//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// console.log("Hello");

// const btnShowME = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// const onTextInput = () => {
//   const inputVal = btnShowME.nextElementSibling.value;
//   console.log("🚀 ~ onTextInput ~ inputVal:", inputVal);
// const inputEl = document.querySelector("#alertInput").value;
// console.log("🚀 ~ onTextInput ~ inputEl:", inputEl);
// alert(inputEl.value);
// };

// btnShowME.addEventListener("click", onTextInput);

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const btnSwap = document.querySelector("#swapButton");
// const inputLeft = document.querySelector("#leftSwapInput");
// const inputRight = document.querySelector("#rightSwapInput");

// btnSwap.addEventListener("click", () => {
//   const value = inputLeft.value;
//   inputLeft.value = inputRight.value;
//   inputRight.value = value;
//    console.log(inputLeft.value);
//    console.log(inputRight.value);
// });

//TODO: № 3 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// elem.setAttribute(name, value)

// const inputEl = document.querySelector("#passwordInput");
// const btnPass = document.querySelector("#passwordButton");

// btnPass.addEventListener("click", () => {
//   const typeInput = inputEl.getAttribute("type");
//   const toggleType = typeInput === "password" ? "text" : "password";
//   inputEl.setAttribute("type", toggleType);

//   const btnText = btnPass.textContent;
//   const btnToggleText = btnText === "Приховати" ? "Розкрити" : "Приховати";
//   btnPass.textContent = btnToggleText;

// console.log(btnToggleText);
// console.log("🚀 ~ btnPass.addEventListener ~ btnText:", btnText);

// btnPass.textContent === typeInput
//   ? (btnPass.textContent = "Приховати")
//   : (btnPass.textContent = "Розкрити");
// console.log(inputEl.getAttribute("type"));
// });

//TODO: № 4 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" -
// більше на 10 пікселів.

const btnDec = document.querySelector("#decrease");
// console.log("🚀 ~ btnDec:", btnDec);
const btnInc = document.getElementById("increase");
// console.log("🚀 ~ btnInc:", btnInc);
const divBox = document.querySelector("#box");
// console.log(divBox.offsetHeight);
// console.log(divBox.offsetWidth);

// Варіант 1

// btnDec.addEventListener("click", () => {
//   const elHeight = divBox.offsetHeight;
//   const elWidth = divBox.offsetWidth;
//   divBox.style.height = `${elHeight - 10}px`;
//   divBox.style.width = `${elWidth - 10}px`;
// });

// btnInc.addEventListener("click", () => {
//   const elHeight = divBox.offsetHeight;
//   const elWidth = divBox.offsetWidth;
//   divBox.style.height = `${elHeight + 10}px`;
//   divBox.style.width = `${elWidth + 10}px`;
// });

// Варіант 2
// btnDec.addEventListener("click", changeSize);
// btnInc.addEventListener("click", changeSize);

// function changeSize(event) {
//   const elHeight = divBox.offsetHeight;
//   const elWidth = divBox.offsetWidth;
//   const currentBtn = event.target.getAttribute("id");

//   switch (currentBtn) {
//     case "decrease":
//       divBox.style.height = `${elHeight - 10}px`;
//       divBox.style.width = `${elWidth - 10}px`;
//       break;
//     case "increase":
//       divBox.style.height = `${elHeight + 10}px`;
//       divBox.style.width = `${elWidth + 10}px`;
//       break;
//   }

//   console.log(currentBtn);
// }

//TODO: № 5 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

//TODO: № 6 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази
