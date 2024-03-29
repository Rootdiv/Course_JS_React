export const totalPriceItems = order => {
  const countTopping = order.topping.filter(item => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping;
  const orderPrice = (order.price + priceTopping) * order.count;
  order.totalPrice = orderPrice;
  return orderPrice;
};

export const formatCurrency = value =>
  value.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

export const projection = rules => {
  const keys = Object.keys(rules);
  return obj =>
    keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);
      return newObj;
    }, {});
};
