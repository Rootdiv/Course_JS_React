import { get, child, ref } from 'firebase/database';

const HOST_URI = process.env.NODE_ENV === 'production' ? 'https://rootdiv.ru' : 'http://localhost';
const URL_API = `${HOST_URI}:1216/mrdonalds`;

export const sendMailOrder = (dataBase, key) => {
  const dbRef = ref(dataBase);
  get(child(dbRef, `orders/${key}`)).then(snapshot => {
    if (snapshot.exists()) {
      fetch(URL_API, { method: 'POST', body: JSON.stringify(snapshot.val()) });
    }
  });
};
