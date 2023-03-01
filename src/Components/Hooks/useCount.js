import {
  useState
} from 'react';

export function useCount(openItem) {
  const [count, setCount] = useState(openItem.count ? openItem.count : 1);
  const onChange = event => setCount(event.target.value);
  return {
    count,
    setCount,
    onChange
  };
}
