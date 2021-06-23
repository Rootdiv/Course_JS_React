import {
  useState
} from 'react';

const getTopping = toppings => toppings.map(item => ({
  name: item,
  checked: false,
}));

export function useTopping(openItem) {
  const readyToppings = openItem.toppings ? getTopping(openItem.toppings) : [];
  const [toppings, setToppings] = useState(readyToppings);

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
