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
