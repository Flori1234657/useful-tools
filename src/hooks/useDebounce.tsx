import { useState, useEffect } from "react";

const useDebounce = <T,>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(debounceTimeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
