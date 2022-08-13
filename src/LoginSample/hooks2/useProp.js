import { useMemo, useState } from 'react';

export default function useProp(initialValue) {
  const [value, set] = useState(initialValue);

  return useMemo(() => {
    const prop = { value, set };
    return prop;
  }, [value]);
}
