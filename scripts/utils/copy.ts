export const copyFile = async (input: string, output: string) =>
  await Bun.write(output, Bun.file(input), { createPath: true });
