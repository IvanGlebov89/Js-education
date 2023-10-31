/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/
const user = { name: "Igor", age: 18, USD: 2100, work: false };
const user1 = {
  name: "Alex",
  age: 24,
  USD: 1500,
  work: true,
};
const user2 = { name: "Ivan", age: 24, USD: 1800, work: false };

const mac = 2000;

const age = (age, work = false) => {
  let USD = 0;
  if (age >= 24 && work === true) {
    USD = 500;
  } else if (age >= 24 && work === false) {
    USD = 100;
  } else {
    USD = 0;
  }
  return USD;
};

const calculateMac = (client) => {
  const calk = age(client.age, client.work);

  const purchase = calk + client.USD;
  if (purchase >= mac) {
    return console.log(` вы можете купить новый макбук ${client.name}`);
  } else {
    return console.log(` вы не можете купить новый макбук ${client.name}`);
  }
};
calculateMac(user);
