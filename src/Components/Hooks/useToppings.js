import {
  useState
} from 'react';

const getTopping = toppings => toppings && toppings.map(item => ({
  name: item,
  checked: false,
}));

export function useTopping(openItem) {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings));

  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      if (index === i) {
        item.checked = !item.checked;
      }
      return item;
    }));
  };
  return {
    toppings,
    checkToppings
  };
}
