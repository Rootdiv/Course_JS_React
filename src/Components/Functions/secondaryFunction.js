export const totalPriceItems = order => {
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1) * countTopping;
  if (countTopping) {
    return (order.price + priceTopping) * order.count;
  } else {
    return order.price * order.count;
  }
};

export const formatCurrency = value => value.toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB'
});
