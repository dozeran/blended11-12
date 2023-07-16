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
