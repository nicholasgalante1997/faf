export function pipeline(...args: any[]) {
  return args.reduce((a, b) => b(a));
}
