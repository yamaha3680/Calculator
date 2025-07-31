import { useCallback, useLayoutEffect, useRef } from 'react';

export const useEventCallback = <Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): ((...args: Args) => Return) => {
  const ref = useRef<typeof fn | undefined>(undefined);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args: Args) => ref.current!.apply(void 0, args), []);
};
