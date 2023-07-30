//TODO № 1 =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const name = prompt("What is your name?");
//   if (name === "") {
//     alert("Введіть своє ім'я");
//     return;
//   }
//   return callback(name);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// // console.log(letMeSeeYourName(greet));
// letMeSeeYourName(greet);

//TODO № 2 ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };

//   return callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("tablet", 6000, showProduct);
// makeProduct("iphone", 21000, showProduct);

//TODO № 3 на замикання ✅ ==============================================

// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має лошіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }
// const shefIvan = makeShef("ivan");
// // console.log();
// shefIvan("borsch");
// const shefMykola = makeShef("Mykola");
// // console.log();
// shefMykola("Olivie");

//TODO: № 4 на замикання ✅ ==============================================
//Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка вважає та логує кількість своїх викликів

// function makeCounter() {
//   let result = 0;
//   return function count() {
//     result += 1;
//     console.log(result);
//   };
// }

// const total = makeCounter();
// total();
// total();
// total();
// total();
// total();
// total();

//TODO: № 6 на this ✅ ==============================================
//Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//TODO: № 7 на this ✅==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//   return action();
// }

// const item = {
//   quantity: 5,

//   getQuatity() {
//     console.log(this.quantity);
//   },
// };

// callAction(item.getQuatity());
// function callAction(action) {
//   action();
// }

// const item = {
//   quantity: 5,

//   getQuatity() {
//     console.log(this.quantity);
//   },
// };

// callAction(item.getQuatity.bind(item));

//TODO: № 5  ==============================================
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//   return function userPassword() {
//     const askPass = prompt("Enter your password");
//     return askPass === password;
//   };
// }

// const userPass = savePassword("qwerty");
// console.log(userPass());

//TODO: № 8 на class-ы  =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function ({ userName, age, numbersOfPost }) {
//   // const {userName, age, numbersOfPost} = userObj;
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function () {
//     console.log(
//       `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     );
//   };
// };

// const userArtem = new User({ userName: "Artem", age: 24, numbersOfPost: 999 });
// userArtem.getInfo();
// console.log("🚀 ~ userArtem:", userArtem);

// const userIvan = new User({ userName: "Ivan", age: 24, numbersOfPost: 999 });
// console.log("🚀 ~ userIvan:", userIvan);

//TODO: на class ======================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getInfo() {
    return `Animal name: ${this.name}, type: ${this.type}`;
  }

  getFeed() {
    return `Animal ${this.name} is feeding`;
  }
}

class Tiger extends Animal {
  constructor(name, type, food) {
    super(name, type);
    this.food = food;
  }

  getInfo() {
    return `${super.getInfo()} eats ${this.food}`;
  }
}

class Bird extends Animal {
  constructor(name, type, age) {
    super(name, type);
    this.age = age;
  }

  getInfo() {
    return `${super.getInfo()} has ${this.age} years`;
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(newAnimal) {
    this.animals.push(newAnimal);
  }

  listAnimals() {
    console.log("Zoo Animals:");
    this.animals.forEach((animal) => {
      console.log(animal.getInfo());
    });
  }
}

const zoo = new Zoo();
const tiger = new Tiger("Stepan", "hunter", "meal");
zoo.addAnimal(tiger);
const eagle = new Bird("Vasyl", "bird-hunter", 23);
zoo.addAnimal(eagle);
zoo.listAnimals();
