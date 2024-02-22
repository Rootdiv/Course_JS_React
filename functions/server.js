//Сервер обновлённой версии отправки заказа для проекта по курсу Базовый React
const { readFileSync } = require('fs');
const sendOrderEmail = require('./nodemailer');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const { createServer } = require(protocol);

const options = {};
if (protocol === 'https') {
  const certDir = '/etc/nginx/acme.sh';
  options['key'] = readFileSync(`${certDir}/rootdiv.ru/privkey.pem`);
  options['cert'] = readFileSync(`${certDir}/rootdiv.ru/fullchain.pem`);
}

const PORT = 1216;
const URI_PREFIX = '/mrdonalds';

class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

const getJsonData = req =>
  new Promise(resolve => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(JSON.parse(data));
    });
  });

// создаём HTTP сервер, переданная функция будет реагировать на все запросы к нему
createServer(options, async (req, res) => {
  // req - объект с информацией о запросе, res - объект для управления отправляемым ответом

  // этот заголовок ответа указывает, что тело ответа будет в JSON формате
  res.setHeader('Content-Type', 'application/json');

  // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
  // в этом случае достаточно ответить с пустым телом и этими заголовками
  if (req.method === 'OPTIONS') {
    // end = закончить формировать ответ и отправить его клиенту
    res.end();
    return;
  }

  // если URI не начинается с нужного префикса - можем сразу отдать 404
  if (!req.url || !req.url.startsWith(URI_PREFIX)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  const uri = req.url.substring(URI_PREFIX.length);

  try {
    // обрабатываем запрос и формируем тело ответа
    const body = await (async () => {
      if (uri === '' || uri === '/') {
        if (req.method === 'POST') {
          sendOrderEmail(await getJsonData(req));
        } else {
          res.statusCode = 403;
          res.end(JSON.stringify({ message: 'Access denied' }));
          return;
        }
      }
      return null;
    })();
    res.end(JSON.stringify(body));
  } catch (err) {
    // обрабатываем сгенерированную нами же ошибку
    if (err instanceof ApiError) {
      res.writeHead(err.statusCode);
      res.end(JSON.stringify(err.data));
    } else {
      // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
      res.statusCode = 500;
      res.end(JSON.stringify({ message: 'Server Error' }));
      console.error(err);
    }
  }
})
  // выводим инструкцию, как только сервер запустился...
  .on('listening', () => {
    if (protocol === 'http') {
      console.log(`Сервер запущен. Вы можете использовать его по адресу http://localhost:${PORT}`);
      console.log('Нажмите CTRL+C, чтобы остановить сервер');
    }
  })
  // ...и вызываем запуск сервера на указанном порту
  .listen(PORT);
