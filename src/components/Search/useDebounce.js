import { useEffect, useRef, useState } from "react";

export default function useDebounce(searchValue, delay) {
  const timeoutId = useRef();
  const [debounceValue, setDebounceValue] = useState(searchValue);
  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setDebounceValue(searchValue);
    }, delay);
    return () => clearTimeout(timeoutId.current);
  }, [searchValue]);
  return debounceValue;
}
