#!/usr/bin/env bun

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { writeFile, readdir } from "fs/promises";
import { join, extname, relative } from "path";

import { getHtmlTemplate } from "./templates/html";
import { copyFile } from "./utils/copy";
import { ensureDir } from "./utils/dir";

import App from "../src/App";
import { routes } from "../src/routes";

const DIST_DIR = "./dist" as const;
const SRC_DIR = "./src" as const;

async function copyAssets() {
  console.log("📁 Copying static assets...");

  console.log("Copying css...");
  try {
    const cssFiles = await readdir(join(SRC_DIR, "styles"));
    for (const file of cssFiles) {
      if (extname(file) === ".css") {
        await copyFile(join(SRC_DIR, "styles", file), join(DIST_DIR, file));
      }
    }
  } catch (error) {
    console.error("❌ Error copying assets:", error);
    process.exit(1);
  }

  console.log("Copying images...");
  try {
    const assetsDir = join(process.cwd(), "public", "assets");
    const imageFiles = await readdir(assetsDir);
    for (const file of imageFiles) {
      await copyFile(join(assetsDir, file), join(DIST_DIR, "assets", file));
    }
  } catch (error) {
    console.error("❌ Error copying images:", error);
    process.exit(1);
  }
}

async function bundleClientCode() {
  console.log("📦 Bundling client-side code...");

  const result = await Bun.build({
    entrypoints: [join(SRC_DIR, "bootstrap.tsx")],
    outdir: DIST_DIR,
    minify: true,
    splitting: false,
    format: "esm",
    target: "browser",
    naming: "bundle.[hash].js",
  });

  if (!result.success || result.outputs.length < 1) {
    console.error("❌ Build failed:", result.logs);
    process.exit(1);
  }

  // Return the generated filename for HTML injection
  const bundleFile = result.outputs[0];

  for (const log of result.logs) {
    console.log(log);
  }

  if (bundleFile?.path) {
    return relative(DIST_DIR, bundleFile.path);
  }

  throw new Error("Failed to generate bundle file. Check logs.");
}

async function generateStaticHTML(bundlePath: string) {
  console.log("🏗️  Generating static HTML...");

  for (const route of routes) {
    const html = renderToStaticMarkup(React.createElement(App, { initialRoute: route.path }));

    const fullHTML = getHtmlTemplate(route, html, bundlePath);

    const outputPath =
      route.path === "/" ? join(DIST_DIR, "index.html") : join(DIST_DIR, route.path.slice(1), "index.html");

    if (route.path !== "/") {
      await ensureDir(join(DIST_DIR, route.path.slice(1)));
    }

    await writeFile(outputPath, fullHTML);
    console.log(`✅ Generated: ${outputPath}`);
  }
}

async function build() {
  console.log("🚀 Starting build process...");

  // Clean and create dist directory
  await ensureDir(DIST_DIR);

  // Copy static assets
  await copyAssets();

  // Bundle client-side code
  const bundlePath = await bundleClientCode();

  // Generate static HTML files
  await generateStaticHTML(bundlePath);

  console.log("✨ Build complete! Ready for S3 deployment.");
}

build().catch(console.error);
