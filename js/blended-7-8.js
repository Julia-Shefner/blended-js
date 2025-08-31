// * Завдання 0

// При натисканні на кнопку "SHOW ME", потрібно в консоль 
// вивести значення, яке будемо вводити в інпут.

// const buttonEl = document.querySelector('#alertButton');
// const inputEl = document.querySelector('#alertInput');
// buttonEl.addEventListener('click', handlerClick);

// function handlerClick(){
//     console.log(inputEl.value);
// }

// * Завдання 1

// 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector('body');
// console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
// const titleEl = document.querySelector('#title');
// console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
// const listEl = document.querySelector('.list');
// console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const listItem = document.querySelectorAll('[data-topic]');
// console.log(listItem);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і 
// виведи його в консоль;
// console.log(listItem[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і 
// виведи його в консоль;
// console.log(listItem[listItem.length-1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// console.log(titleEl.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const allSubtit = document.querySelectorAll('h3');
// console.log(allSubtit);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка
//  на червоний колір
// allSubtit.forEach((h3) => h3.classList.add('active'));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і 
// виведи його в консоль;
// const liEl = document.querySelector('li[data-topic="navigation"]');
// console.log(liEl);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і 
// зроби його backgroundColor жовтим
// liEl.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст 
// на "Я змінив тут текст!".
// const text = liEl.querySelector('p');
// text.textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент 
// у якогоо атрибут data-topic має значення, яке зберігається у змінній 
// currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const element = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(element);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor 
// блакитним;
// element.style.backgroundColor = 'lightblue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його 
// в консоль;
// const subtitle = document.querySelector('.completed');
// console.log(subtitle);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// subtitle.closest('li').remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай 
// йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newEl = document.createElement('p');
// newEl.textContent = "Об'єктна модель документа (Document Object Model)";
// titleEl.insertAdjacentElement('afterend', newEl);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - 
// "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи 
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити 
// браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI 
// потім наповнити H3 та P і готову LI закинути у кінець списку
// const elNew = document.createElement('li');
// const elNewTitle = document.createElement('h3');
// const elNewText = document.createElement('p');
// elNewTitle.textContent = "Властивість innerHTML";
// elNewText.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// elNew.insertAdjacentElement('beforeend', elNewTitle);
// elNew.insertAdjacentElement('beforeend', elNewText);
// listEl.insertAdjacentElement('beforeend', elNew);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод 
// insertAdjacentHTML()
// listEl.insertAdjacentHTML('beforeend',
//   `
//   <li>
//   <h3>Властивість innerHTML</h3>
//   <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>
//   `
// );
// 20 - очисти список
// listEl.remove();
// listEl.innerHTML('');
// * Завдання 2 

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const div = document.createElement('div');
// div.classList.add('number-container');
// newEl.insertAdjacentElement('afterend', div);

// for (let i = 0; i <= 100; i++) {
//   const newDiv = document.createElement('div');
//   newDiv.classList.add('number');
//   newDiv.textContent = randomNumber();
//   if(newDiv.textContent %2 === 0){
//     newDiv.classList.add('even');
//   } else {
//     newDiv.classList.add('odd');
//   }
//   div.insertAdjacentElement('beforeend', newDiv);
// }

// * Завдання 3 

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const input = document.querySelector('.js-username-input');

// input.addEventListener('input', (event) => {
//   const text = event.target.value.trim();
//   if(text.length < 6) {
//     input.classList.add('error');
//     input.classList.remove('success');
//   } else {
//     input.classList.add('success');
//     input.classList.remove('error');
//   }
// });

// input.addEventListener('focus', (event) => {
//   const text = event.target.value;
//   if (text.length === 0){
//     input.style.outline = `3px solid red`;
//   } else {
//     input.style.outline = `3px solid lime`;
//   }
// });

const form = document.querySelector('.js-contact-form');
const checkbox = document.querySelector('.js-policy-checkbox');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = input.value;
  const checkCheckbox = checkbox.checked;
  console.log(inputValue);
  console.log(checkCheckbox);
  if (inputValue.length !==0 && checkCheckbox){
    const userData = { username: inputValue };
    console.log(userData);
  } else {
    alert('Type your name');
  }
})

// * Завдання 4 

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меншим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
