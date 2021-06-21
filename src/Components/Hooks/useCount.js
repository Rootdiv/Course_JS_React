import {
  useState
} from 'react';

export function useCount() {
  const [count, setCount] = useState(1);
  const onChange = event => setCount(event.target.value);
  return {
    count,
    setCount,
    onChange
  };
}
