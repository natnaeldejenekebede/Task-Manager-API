export const funcExec = <Func extends (...args: any[]) => any>(
  func: Func,
  ...args: Parameters<Func>
): [ReturnType<Func>, undefined] | [undefined, any] => {
  try {
    return [func(...args), undefined];
  } catch (error) {
    return [undefined, error];
  }
};
