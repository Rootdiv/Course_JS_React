'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья',
  ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'
];
const nameCourse = 'Базовый React';
const command = employers.filter(item => item.trim() !== '')
  .map(str => str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase()).join(',');

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase']
};

const {
  cash,
  react,
  react: [first],
  add
} = data;

const calcCash = everyCash => everyCash.reduce((sum, current) => sum + current, 0);

const lesson = calcCash(cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
  const sumTech = [...react, ...add, 'и другие'];
  console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.\nКоманда Академии: ${gang}`);
  console.log(`Первое что изучим будет ${first}. Он очень похож на HTML!`);
  console.log('Технологии которые мы изучим: ');
  console.log(...sumTech);
};

makeBusiness('Артем', lesson, command, nameCourse);
