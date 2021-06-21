export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = elem => elem.toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB'
});
