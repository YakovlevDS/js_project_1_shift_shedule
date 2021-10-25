// записываем в  константы кнопки добавить и рассчитать
const btnAdd = document.querySelector("#btn-add");
const btnCalc = document.querySelector("#btn-calc");
const btnClear = document.querySelector("#btn-clear");
 const  btnDel = document.querySelector("#btn-del");

 // записываем в node-list циклические части
  const cicleItems = document.querySelectorAll(".shift__box");
  const cicleParts = document.querySelectorAll(".shift-duration");
  const labels = document.querySelectorAll(".shift-label");

// записываем в  константы смещение полного цикла относительно бригады 1
const deltaBr2 = document.querySelector("#deltaBr2");
const deltaBr3 = document.querySelector("#deltaBr3");
const deltaBr4 = document.querySelector("#deltaBr4");
  // записываем в  константу list смещений бригад
  const inputDelta = document.querySelectorAll(".input-delta");

// записываем в node-list ячейки по-бригадно
const br0 = document.querySelectorAll(".day-num");
const br1 = document.querySelectorAll(".br1");
const br2 = document.querySelectorAll(".br2");
const br3 = document.querySelectorAll(".br3");
const br4 = document.querySelectorAll(".br4");
const br5 = document.querySelectorAll(".br5");

  // находим все строки бригад и заносим в константы
  const brRow2 = document.querySelector("#brigade2");
  const brRow3 = document.querySelector("#brigade3");
  const brRow4 = document.querySelector("#brigade4");
  const brRow5 = document.querySelector("#brigade5");




// записываем в  константы данные для расчетов
const calcYear = document.querySelector(".year");
const calcMonth = document.querySelector(".month");

// записываем в константу количество бригад и его значение в переменную
const totalBrigade = document.querySelector(".total-brigade");
let totalBrigadeVal = +totalBrigade.value;
  


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
const contentAdd = document.querySelector(".shift__box");
const parentAppend = document.querySelector(".shift__wrapper");

// временные исходные данные
let b1, b2,b3,b4,b5


// Расчет количества дней в месяце любого года
daysInMonth = (m, y) =>
  31 - (--m ^ 1 ? m % 7 & 1 : y & 3 ? 3 : y % 25 ? 2 : y & 15 ? 3 : 2);
// Используем конструкцию тернарного оператора с несколькими проверками
// % --Бинарный оператор. Возвращает целочисленный остаток от деления двух операндов.
// & -- Возвращает единицу в каждой битовой позиции, для которой соответствующие биты обеих операндов являются единицами.
// --m учет того что мес начинается с 0.
// ^ -- Возвращает единицу в каждой битовой позиции, для которой только один из соответствующих битов операндов является единицей.(^1 для четных делает +1 для нечетных -1)
// Вычитаем из максимально возможного числа дней в месяце(31) 0 1 , 2 или 3 дня в зависимости от условий.



const getStrBr = () => {
  clearTable();
  // записываем в node-list циклические значения всех элементов node-list
  let ciclePartsVal = [];
  let labelVal = [];
  let arrCicle = [];
  let sumCicleDays = 0;
  let newArrCicle = [];

  // записываем в  константы блоки с исходными данными
  const startDate = document.querySelector(".shift-start");
  const numberOfBrigade = document.querySelector(".number-brigade");
  // объявляем переменные и заносим исходные значения
  let startDateVal = startDate.value;
  let numberOfBrigadeVal = +numberOfBrigade.value;
  // console.log(startDateVal);

  // записываем в  константы данные для расчетов
  const inputMonth = document.querySelector("#calc-month");
  const inputYear = document.querySelector("#calcYear");
  const shiftStart = document.querySelector(".shift-start");

  // записываем в константы текущую дату, год, месяц
  const curDate = new Date();

  const curYear = curDate.getFullYear();
  // console.log(curYear);
  const curMonth = curDate.getMonth();
  // console.log(curMonth);
  const dataStart = new Date(curYear, curMonth, startDateVal);
  // console.log(dataStart);

  const future = new Date(inputYear.value, inputMonth.value - 1);
  // console.log(future);
  const furYear = future.getFullYear();
  const furMonth = future.getMonth();

  // const dataEnd = new Date(furYear, furMonth, 1);
  // console.log(furYear, furMonth, dataEnd);

  // console.log(dataEnd);
  // console.log(furMonth);
  // Передаем месяц в формате js от 0 до 11
  const days = daysInMonth(furMonth + 1, furYear);

  // console.log(days, furMonth, furYear);

  // Заносим выбранный месяц и год в выводимом бланке
  calcMonth.textContent = monthNames[inputMonth.value - 1];
  calcYear.textContent = inputYear.value;

  // наполняем  массив циклов отдельных частей
  cicleParts.forEach((item, i) => {
    ciclePartsVal[i] = item.value;

    // считаем сумму дней полного цикла
    sumCicleDays += +ciclePartsVal[i];
  });

  // наполняем  массив символьного отображения смен
  labels.forEach((item, i) => (labelVal[i] = item.value));

  // заполняем массив полного цикла

  for (let g = 0; g < labelVal.length; g++) {
    for (let r = 0; r < +ciclePartsVal[g]; r++) {
      arrCicle.push(labelVal[g]);
    }
  }
  // console.log(arrCicle);

  // находим  и заносим в константу смещение по разности дней дат
  const deltaDiffDays = calcDate(dataStart, future, sumCicleDays);
  console.log(deltaDiffDays);
  // перезаписываем массив с учетом смещения
  let j = 0;
  // console.log(arrCicle);
  if (deltaDiffDays < 0) {

    console.log("pfgjkyztv gj 1 cwtyfhb.");

    // заполняем новый массив с отступом из старого массива
    for (
      let i = arrCicle.length + deltaDiffDays;
      i < arrCicle.length;
      i++
    ) {
      newArrCicle[j] = arrCicle[i];
      j++;
    }
    // console.log(newArrCicle);
    // продолжаем заполнять новый массив отступом из старого массива
    for (let i = 0; i < arrCicle.length + deltaDiffDays; i++) {
      newArrCicle[j] = arrCicle[i];
      j++;
    }
  } else {
    console.log('pfgjkyztv gj 2 cwtyfhb.');
    // заполняем новый массив с отступом из старого массива
    for (let i = deltaDiffDays; i < arrCicle.length; i++) {
      newArrCicle[j] = arrCicle[i];
      j++;
    }
    // console.log(newArrCicle);
    // продолжаем заполнять новый массив отступом из старого массива
    for (let i = 0; i < deltaDiffDays; i++) {
      newArrCicle[j] = arrCicle[i];
      j++;
    }
  }

  console.log(newArrCicle);

  b1 = newArrCicle.join("");
  // console.log(b1);
  if (+deltaBr2.value < 0) {
    b2 =
      b1.substring(Math.abs(+deltaBr2.value), arrCicle.length) +
      b1.substring(0, Math.abs(+deltaBr2.value));
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

  if (+deltaBr5.value < 0) {
    b5 =
      b1.substring(Math.abs(+deltaBr5.value), arrCicle.length) +
      b1.substring(0, Math.abs(+deltaBr5.value));
  } else {
    b5 =
      b1.substring(arrCicle.length - +deltaBr5.value, arrCicle.length) +
      b1.substring(0, arrCicle.length - +deltaBr5.value);
  }
  console.log(b1);
  console.log(b2);
  console.log(b3);
  console.log(b4);
  // console.log(b5);
  // Вызов функции заполнения каждой из бригад

  for (let k = 1; k <= totalBrigadeVal; k++) {
    fillTable(eval(`br${k}`), eval(`b${k}`), days, startDateVal);
  }

  // прячем лишние строки (бригады)  в зависимости от выбора количества бригад
  for (let i = 1 + totalBrigadeVal; i < 6; i++) {
    eval(`brRow${i}`).classList.add("hide");
  }

  // прячем лишние(пустые) колонки(конец месяца)
  for (let y = 0; y < 6; y++) {
    for (let i = days; i < 31; i++) {
      eval(`br${y}[${i}]`).classList.add("hide");
    }
  }
  hideDeltaBrigade();

  // прячем лишние поля смещений бригад относительно 1 бр
  // for (let i =totalBrigadeVal-1; i < 4; i++) {
  //   inputDelta[i].classList.add("hide");
  // }

  return sumCicleDays;
};


 

// Заполняем ячейуки месяца пустотами
clearTable = () => {
  for (let y = 1; y < 6; y++) {
    for (let i = 0; i < 31; i++) {
      eval(`br${y}[${i}]`).textContent = '';
    }
  }
 for (let y = 0; y < 6; y++) {
   for (let i = 27; i < 31; i++) {
     eval(`br${y}[${i}]`).classList.remove("hide");
   }
 }

  for (let i = 2; i < 6; i++) {
    eval(`brRow${i}`).classList.remove("hide");
  }
}
  
// Функция скрытия лишних смещений
hideDeltaBrigade = () => {
    // прячем лишние поля смещений бригад относительно 1 бр
    for (let i =totalBrigadeVal-1; i < 4; i++) {
    inputDelta[i].classList.add("hide");
  }
}
clearDeltaBrigade = () => {
  // отображаем все
  for (let i = 0; i < 4; i++) {
    inputDelta[i].classList.remove("hide");
  }
};
  

  
// Заполняем ячейуки месяца по бригадам выбравнным графиком
fillTable = (br, b, days, startDat) => {
  let z = 0;
  // реализация заполнения с первого числа месяца
  if (startDat == 1) {
    for (let i = 0; i < days; i++) {
      br[i].textContent = b[z];
      // Проверяем если остаток от деления текущего дня мес на длину полного цикла ноль то сбрасываем заполнение на нулевой элемент цикла пока не заполним все дни мес
      (i + 1) % b.length === 0 ? (z = 0) : z++;
    }

    // реализация заполнения не с первого числа месяца
  } else {
    // заполняем сначала конец мес от даты начала рабочего цикла
    for (let i = startDat; i < days + 1; i++) {
      br[i - 1].textContent = b[z];
      // Проверяем если остаток от деления текущего дня мес на длину полного цикла ноль то сбрасываем заполнение на нулевой элемент цикла пока не заполним все дни мес
      (i + 1) % b.length === 0 ? (z = 0) : z++;
    }
    // заполняем начало мес от даты начала рабочего цикла в обратном порядке
    z = 0;
    const revB = b.split("").reverse().join("");
    // console.log(revB);
    for (let j = +startDat - 1; j > 0; j--) {
      br[j - 1].textContent = revB[z];
      // Проверяем если остаток от деления текущего дня мес на длину полного цикла ноль то сбрасываем заполнение на нулевой элемент цикла пока не заполним все дни мес
      (j + 1) % b.length === 0 ? (z = 0) : z++;
    }
  }
  
};
// определение разницы дней  от указанного в текущем месяце до 1 числа расчетного месяца и остаток от деления
calcDate = (date1, date2, sumCicleDays) =>{
  let diff = Math.floor(date2.getTime() - date1.getTime());
console.log(diff);
  let day = 1000 * 60 * 60 * 24;
  let ds = Math.floor(diff / day);
  console.log(ds);
  let remainder = ds % sumCicleDays
  console.log(remainder);
  return remainder;
}

 addRowPartCicle = () => {
   // создание div c классами и контентом и добавление в Dom
   const el = document.createElement("div");
   el.classList.add("d-flex", "flex-row", "m-2", "justify-content-center");
   let content = contentAdd.innerHTML;
   el.innerHTML = content;
   parentAppend.appendChild(el);
 };

deleteRowPartCicle = () =>
  parentAppend.childElementCount > 1
    ? parentAppend.lastElementChild.remove()
    : btnDel.setAttribute("disabled", "disabled");
  
  


//  Добавление слушателей на события click по кнопкам Add и Calc
btnAdd.addEventListener("click", () => addRowPartCicle());
btnCalc.addEventListener("click", () => getStrBr());
btnClear.addEventListener("click", () => clearTable());
btnDel.addEventListener("click", () => deleteRowPartCicle());

totalBrigade.addEventListener("change", () => {
  clearDeltaBrigade()
  totalBrigadeVal = +totalBrigade.value;
  hideDeltaBrigade()
}
)
