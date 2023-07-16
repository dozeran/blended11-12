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
