import { mkdir, exists } from "fs/promises";

export async function ensureDir(dir: string) {
  try {
    if (await exists(dir)) {
      console.warn(`Directory already exists: ${dir}`);
      return;
    }
    await mkdir(dir, { recursive: true });
  } catch (error) {
    /**
     * Directory already exists
     */
  }
}
