import { useCallback, useEffect, useRef, useMemo } from 'react';
import { debounce, throttle } from 'lodash';
import { useTheme } from '@react-navigation/native';

/**
 * Use Debounced Function
 * @param {Function} fn function for debouncing
 * @param {Number} wait waiting time in ms
 * @param {Object} options debounse options
 * @param {Array} dependencies callback dependencies
 */
export const useDebouncedFn = (
  fn,
  wait = 100,
  options = {
    leading: false,
    trailing: true,
  },
  dependencies,
) => {
  const debounced = debounce(fn, wait, options);

  return useCallback(debounced, dependencies);
};

export const usePreviousValue = value => {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;

    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
};

export const useThrottledFn = (
  fn,
  wait = 100,
  options = {
    leading: false,
    trailing: true,
  },
  dependencies,
) => {
  const throttled = throttle(fn, wait, options);

  return useCallback(throttled, dependencies);
};

export const useThemedStyles = themedStyles => {
  const theme = useTheme();
  console.log(theme.dark, theme.fontAddSize);
  return useMemo(() => {
    console.log('Generate styles');
    const styles = themedStyles(theme);
    return styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.dark, theme.fontAddSize]);
};
