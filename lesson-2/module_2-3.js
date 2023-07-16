//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// const numbers2 = 4;

// function findSmallerNumber(array) {
//   let minNumber = array[0];

//   if (!Array.isArray(array)) {
//     return "This is not array";
//   }
//   for (const number of array) {
//     if (number < minNumber) {
//       minNumber = number;
//     }
//   }
//   return minNumber;
// }
// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(numbers2));

//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// function caclculateAverage(...args) {
//   let total = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     total += arg;
//     count += 1;
//   }
//   return total / count;
// }

// console.log(caclculateAverage("true", 10, 10, 20, 200));

//TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Не правильне значення a або б";
//   }

//   // if (a < b) {
//   //   return a;
//   // }
//   // return b;

//   return a < b ? a : b; // тернарний
// }
// console.log(min("7", 5));

//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function total(array) {
//   const newArr = [];
//   for (let i = 0; i < array.length - 1; i += 1) {
//     newArr.push(array[i] + array[i + 1]);
//   }
//   return newArr;
// }

// console.log(total(someArr));

//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`номер елемента-${i + 1}: значення елемента-${array[i]}`);
//   }
// }
// logItems(["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"]);

//TODO: № 6 ==============================================================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength

// function formatMessage(message, maxLength) {
//   if (message.length > maxLength) {
//     return message.slice(0, maxLength) + "...";
//   }
//   return message;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

//TODO: № 7 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };

// user.mood = "happy";
// user.premium = false;
// console.log(user.greet());

// // console.log("🚀 ~ user:", user);

// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }
