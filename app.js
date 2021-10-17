// записываем в  константы кнопки добавить и рассчитать
const btnAdd = document.querySelector("#btn-add");
const btnCalc = document.querySelector("#btn-calc");
const deltaBr2 = document.querySelector("#deltaBr2");
const deltaBr3 = document.querySelector("#deltaBr3");
const deltaBr4 = document.querySelector("#deltaBr4");

// записываем в node-list ячейки по-бригадно
const br1 = document.querySelectorAll(".br1");
const br2 = document.querySelectorAll(".br2");
const br3 = document.querySelectorAll(".br3");
const br4 = document.querySelectorAll(".br4");
const calcYear = document.querySelector(".year");
const calcMonth = document.querySelector(".month");
const inputMonth = document.querySelector("#calc-month");
const inputYear = document.querySelector("#calcYear");

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];





// записываем в  константы блоки для вставки контента
const contentAdd = document.querySelector(".shift__wrapper");
const parentAppend = document.querySelector("#add-block-wrapper");
const parentAppendDel = document.querySelector(
  "#gv__add-shift-button__wrapper"
);

// записываем в  константы блоки с исходными данными
const startDate = document.querySelector(".shift-start");
const numberOfBrigade = document.querySelector(".shift-brigade");

// временные исходные данные
let b1 = "";
const b2 = "3333ВВ1111В2222В";
const b3 = "ВВ1111В2222В3333";
const b4 = "1111В2222В3333ВВ";

// объявляем переменные и заносим исходные значения
let btnDel;
let startDateVal = startDate.value;
let numberOfBrigadeVal = numberOfBrigade.value;

const getStrBr = () => {
  // записываем в node-list циклические части
  const cicleItems = document.querySelectorAll(".shift__box");
  const cicleParts = document.querySelectorAll(".shift-duration");
  const labels = document.querySelectorAll(".shift-label");

  // console.log(cicleItems.length, labels.length, cicleParts.length);

  // записываем в node-list циклические значения всех элементов node-list
  let ciclePartsVal = [];
  let labelVal = [];
  let arrCicle = [];
  let sumCicleDays = 0;

  // наполняем  массив циклов отдельных частей
  cicleParts.forEach((item, i) => {
    ciclePartsVal[i] = item.value;

    // считаем сумму дней полного цикла
    sumCicleDays += +ciclePartsVal[i];
  });

  // наполняем  массив символьного отображения смен

  labels.forEach((item, i) => (labelVal[i] = item.value));

  // console.log(ciclePartsVal, labelVal, sumCicleDays);
  // console.log(labelVal.length, ciclePartsVal[0]);

  // заполняем массив полного цикла

  for (let g = 0; g < labelVal.length; g++) {
    for (let r = 0; r < +ciclePartsVal[g]; r++) {
      arrCicle.push(labelVal[g]);
    }
  }
  b1 = arrCicle.join('');

let b2;
let b3;
let b4;


  if (+deltaBr2.value < 0) {
    b2 = b1.substring(Math.abs(+deltaBr2.value), arrCicle.length)+ b1.substring(0, Math.abs(+deltaBr2.value))
  } else {
b2 =
  b1.substring(arrCicle.length - +deltaBr2.value, arrCicle.length) +
  b1.substring(0, arrCicle.length - +deltaBr2.value);
  }


    if (+deltaBr3.value < 0) {
      b3 =
        b1.substring(Math.abs(+deltaBr3.value), arrCicle.length) +
        b1.substring(0, Math.abs(+deltaBr3.value));
    } else {
      b3 =
        b1.substring(arrCicle.length - +deltaBr3.value, arrCicle.length) +
        b1.substring(0, arrCicle.length - +deltaBr3.value);
    }
  
    if (+deltaBr4.value < 0) {
      b4 =
        b1.substring(Math.abs(+deltaBr4.value), arrCicle.length) +
        b1.substring(0, Math.abs(+deltaBr4.value));
    } else {
      b4 =
        b1.substring(arrCicle.length - +deltaBr4.value, arrCicle.length) +
        b1.substring(0, arrCicle.length - +deltaBr4.value);
    }
    
  console.log(b1);
  console.log(b2);
  console.log(b3);
  console.log(b4);


  fillTable(br1, b1);
  fillTable(br2, b2);
  fillTable(br3, b3);
  fillTable(br4, b4);

  console.log(calcDate(curDate, future, sumCicleDays));
  return sumCicleDays
};

// записываем в константы текущую дату, год, месяц
const curDate = new Date();
const future = new Date(2021, 10, 01); 
const curYear = curDate.toISOString().substr(0, 4);
const curMonth = curDate.toISOString().substr(5, 2);

// Расчет количества дней в месяце любого года
const daysInMonth = (m, y) =>
  31 - (--m ^ 1 ? m % 7 & 1 : y & 3 ? 3 : y % 25 ? 2 : y & 15 ? 3 : 2);
// Используем конструкцию тернарного оператора с несколькими проверками
// % --Бинарный оператор. Возвращает целочисленный остаток от деления двух операндов.
// & -- Возвращает единицу в каждой битовой позиции, для которой соответствующие биты обеих операндов являются единицами.
// --m учет того что мес начинается с 0.
// ^ -- Возвращает единицу в каждой битовой позиции, для которой только один из соответствующих битов операндов является единицей.(^1 для четных делает +1 для нечетных -1)
// Вычитаем из максимально возможного числа дней в месяце(31) 0 1 , 2 или 3 дня в зависимости от условий.
console.log(daysInMonth(curMonth, curYear), curMonth, curYear);

// Заполняем ячейуки месяца по бригадам выбравнным графиком
const fillTable = (br, b) => {
  let z = 0;
  for (let i = 0; i < 31; i++) {
    br[i].textContent = b[z];
    // Проверяем если остаток от деления текущего дня мес на длину полного цикла ноль то сбрасываем заполнение на нулевой элемент цикла пока не заполним все дни мес
    ((i + 1) % b.length) === 0  ? (z = 0) : z++;
  }
};
// определение разницы дней  от указанного в текущ ме до 1 числа расчетного мес и остаток от деления
function calcDate(date1, date2,sumCicleDays) {
  let diff = Math.floor(date2.getTime() - date1.getTime());
  let day = 1000 * 60 * 60 * 24;
  let days = Math.floor(diff / day);
  let remainder = days % sumCicleDays
  return remainder;
}




// Вызов функции заполнения каждой из бригад

// fillTable(br2, b2);
// fillTable(br3, b3);
// fillTable(br4, b4);

// Функция добавления cicleParts
const add = () => {
  // если нет кнопки Del то создаем ее с классами контентом и добавляем в DOM
  if (!btnDel) {
    const buttonDel = document.createElement("button");
    buttonDel.type = "button";
    buttonDel.classList.add("btn", "btn-primary", "btn-sm", "btn-del");
    buttonDel.textContent = "Del";
    parentAppendDel.appendChild(buttonDel);

    // находим созданную кнопку Del и вешаем слушатель события click вызывая функцию Del
    btnDel = document.querySelector(".btn-del");
    btnDel.addEventListener("click", () => del());
  }
  // создание div c классами и контентом и добавление в Dom
  const el = document.createElement("div");
  el.classList.add("d-flex", "flex-row");
  let content = contentAdd.innerHTML;
  el.innerHTML = content;
  parentAppend.appendChild(el);
};

// Функция удаления cicleParts
const del = () => {
  console.log(parentAppend.childElementCount);
  if (parentAppend.childElementCount > 1) {
    parentAppend.lastElementChild.remove();
    if ((parentAppend.childElementCount = 1)) {
      btnDel.remove();
    }
  }
};

//  Добавление слушателей на события click по кнопкам Add и Calc
btnAdd.addEventListener("click", () => add());
btnCalc.addEventListener("click", () => getStrBr());
inputMonth.addEventListener("change", () =>calcMonth.textContent=monthNames[inputMonth.value-1] );
inputYear.addEventListener("change", () => calcYear.textContent = inputYear.value);


