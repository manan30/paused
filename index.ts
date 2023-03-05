export function paused<RValue = void>(value: RValue, timeoutMs = 0) {
  return new Promise<RValue>((resolve) =>
    setTimeout(() => resolve(value), timeoutMs)
  );
}
