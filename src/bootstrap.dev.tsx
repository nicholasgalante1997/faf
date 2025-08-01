import { serve } from "bun";
import dev from "./dev/dev.html";

const server = serve({
  port: 3000,
  routes: {
    // ** HTML imports **
    // Bundle & route index.html to "/". This uses HTMLRewriter to scan the HTML for `<script>` and `<link>` tags, run's Bun's JavaScript & CSS bundler on them, transpiles any TypeScript, JSX, and TSX, downlevels CSS with Bun's CSS parser and serves the result.
    "/": dev,
  },
  // Enable development mode for:
  // - Detailed error messages
  // - Hot reloading (Bun v1.2.3+ required)
  development: {
    hmr: true,
    console: true,
  },

  // Prior to v1.2.3, the `fetch` option was used to handle all API requests. It is now optional.
  async fetch(req) {
    // Implement static file serving from the "public/assets" directory
    console.log("Received request:", req.method, req.url);

    if (req.method === "GET" && req.url.startsWith("/assets/")) {
      const filePath = req.url.replace("/assets", "public/assets");
      console.log("Serving static file:", filePath);
      try {
        const file = Bun.file(filePath);
        return new Response(await file.arrayBuffer(), {
          headers: {
            "Content-Type": file.type || "application/octet-stream",
          },
        });
      } catch (error) {
        console.error("File not found:", filePath, error);
        return new Response("Not Found", { status: 404 });
      }
    }

    // Return 404 for unmatched routes
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
