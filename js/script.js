'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья',
  ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'
];
const nameCourse = 'Базовый React';
const command = [];

command.push(employers.filter(item => item.trim() !== '')
  .map(str => str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase()).join(','));

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase']
};

const calcCash = (own) => {
  const everyCash = own;
  const total = everyCash.reduce((sum, current) => sum + current, 0);
  return total;
};

const lesson = calcCash(data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
  teacher = teacher || 'Максим';
  const sumTech = [...data.react, ...data.add, 'и другие'];
  console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.\nКоманда Академии: ${gang}`);
  console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
  console.log('Технологии которые мы изучим: ');
  console.log(...sumTech);
};

makeBusiness(...['Артем', null, lesson, command, nameCourse]);
