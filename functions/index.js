const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const {
  email,
  password
} = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  }
});

transporter.use('compile', htmlToText());
const sendOrderEmail = data => {
  /* eslint-disable indent */
  const options = {
    from: `MrDonald's <${email}>`,
    to: data.email,
    subject: "Ваш заказ из MrDonald's",
    html: `
      <div>
        <h2>Добрый день ${data.nameClient}</h2>
        <h3>Ваш заказ:</h3>
        <ul>
          ${data.order.map(({ itemName, count, price, topping, choice }) => {
            const choices = choice !== 'no choice' ? `&nbsp;${choice}` : '';
            const toppings = topping !== 'no topping' ? `&nbsp;Допы: ${topping.join(', ')}` : '';
            return `<li>${itemName}${choices}${toppings} - ${count} шт., цена - ${price * count} руб.</li>`;
          }).join('\n')}
        </ul>
        <p>Итого: ${data.order.reduce((sum, item) => sum + (item.price * item.count), 0)} руб.</p>
        <small>Ожидайте курьера.</small>
      </div>
    `
  };

  transporter.sendMail(options);
};

exports.sendUserEmail = functions.database.ref('orders/{pushID}').onCreate(order => sendOrderEmail(order.val()));
