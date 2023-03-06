export function paused<RValue = unknown>(timeoutMs: number, value: RValue) {
  return new Promise<RValue>((resolve) =>
    setTimeout(() => resolve(value), timeoutMs)
  );
}
