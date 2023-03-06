export function paused<RValue = undefined>(timeoutMs: number, value?: RValue) {
  return new Promise<RValue | undefined>((resolve) =>
    setTimeout(() => resolve(value), timeoutMs)
  );
}
