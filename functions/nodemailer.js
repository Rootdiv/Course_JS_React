//Обновлённая версия отправки заказа для проекта по курсу Базовый React
const nodemailer = require('nodemailer');
const { htmlToText } = require('html-to-text');
const { email, password } = require('./config');

const message = data =>
  `<div>
    <h2>Добрый день ${data.nameClient}</h2>
    <h3>Ваш заказ:</h3>
    <ul>
      ${data.order /* eslint-disable indent */
        .map(({ itemName, count, topping, choice, totalPrice }) => {
          const choices = choice !== 'no choice' ? `&nbsp;${choice}` : '';
          const toppings = topping !== 'no topping' ? `&nbsp;Допы: ${topping.join(', ')}` : '';
          return `<li>${itemName}${choices}${toppings} - ${count} шт., цена - ${totalPrice} руб.</li>`;
        })
        .join('\n')}
    </ul>
    <p>Итого: ${data.order.reduce((sum, item) => sum + item.totalPrice, 0)} руб.</p>
    <small>Ожидайте курьера.</small>
  </div>`;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

const sendOrderEmail = data => {
  const options = {
    from: `MrDonald's <${email}>`,
    to: data.email,
    subject: "Ваш заказ из MrDonald's",
    text: htmlToText(message(data)),
    html: message(data),
  };

  transporter.sendMail(options);
};

module.exports = sendOrderEmail;
