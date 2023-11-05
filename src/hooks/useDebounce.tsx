import { useState, useEffect } from "react";

const useDebounce = <T,>(value: string) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearInterval(debounceTimeout);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
