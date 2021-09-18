const btnAdd = document.querySelector("#btn-add");

const contentAdd = document.querySelector(".shift__wrapper");
const parentAppend = document.querySelector("#add-block-wrapper");
const parentAppendDel = document.querySelector(
  "#gv__add-shift-button__wrapper"
);
const startDate = document.querySelector(".shift-start");
const numberOfBrigade = document.querySelector(".shift-brigade");
const numberOfWorkDays = document.querySelector(".shift-duration");
const numberOfOffDays = document.querySelector(".shift-off-days");
const labelOff = document.querySelector(".shift-off-label");
const labelWork = document.querySelector(".shift-work-label");


let btnDel;

let startDateVal = startDate.value;
let numberOfBrigadeVal = numberOfBrigade.value;
let numberOfWorkDaysVal = numberOfWorkDays.value;
let numberOfOffDaysVal = numberOfOffDays.value;
let labelOffVal = labelOff.value;
let labelWorkVal = labelWork.value;

const curDate = new Date();

const daysInMonth = (m, y) =>
  31 - (--m ^ 1 ?
    m % 7 & 1
    : y & 3 ? 3
      : y % 25 ? 2
        : y & 15 ? 3
          : 2);
  // Используем конструкцию тернарного оператора с несколькими проверками
  // % --Бинарный оператор. Возвращает целочисленный остаток от деления двух операндов.
  // & -- Возвращает единицу в каждой битовой позиции, для которой соответствующие биты обеих операндов являются единицами.
  // --m учет того что мес начинается с 0.
  // ^ -- Возвращает единицу в каждой битовой позиции, для которой только один из соответствующих битов операндов является единицей.(^1 для четных делает +1 для нечетных -1)
  // Вычитаем из максимально возможного числа дней в месяце(31) 0 1 , 2 или 3 дня в зависимости от условий.


numberOfWorkDays.addEventListener(
  "change",
  () => (numberOfWorkDaysVal = numberOfWorkDays.value)
);
numberOfOffDays.addEventListener(
  "change",
  () => (numberOfOffDaysVal = numberOfOffDays.value)
);
startDate.addEventListener("change", () => startDateVal = startDate.value);
labelOff.addEventListener("change", () => (labelOffVal = labelOff.value));
labelWork.addEventListener("change", () => (labelWorkVal = labelWork.value));
numberOfBrigade.addEventListener(
  "change",
  () => numberOfBrigadeVal = numberOfBrigade.value
);

//   const b1 = '1111 2222 3333  '
//   const b2 = '1111 2222 3333  '
//   const b3 = '1111 2222 3333  '
// const b4 = '1111 2222 3333  '

// for (let i = startDateVal; i <= curMonthDays; i++){

// }



console.log(
  numberOfBrigadeVal,
  numberOfWorkDaysVal,
  numberOfOffDaysVal,
  labelWorkVal,
  labelOffVal
);


add = () => {
  if (!btnDel) {
    const buttonDel = document.createElement("button");
    buttonDel.type = "button";
    buttonDel.classList.add("btn", "btn-primary", "btn-sm", "btn-del");
    buttonDel.textContent = "Del";
    parentAppendDel.appendChild(buttonDel);
    btnDel = document.querySelector(".btn-del");
    btnDel.addEventListener("click", () => del());
  }
  const el = document.createElement("div");
  el.classList.add("d-flex", "flex-row");
  let content = contentAdd.innerHTML;
  el.innerHTML = content;
  parentAppend.appendChild(el);
};

del = () => {
  console.log(parentAppend.childElementCount);
  if (parentAppend.childElementCount > 1) {
    parentAppend.lastElementChild.remove();
    if ((parentAppend.childElementCount = 1)) {
      btnDel.remove();
    }
  }
};
//   btnsDel = document.querySelectorAll(".btn-del");
//   console.log(btnsDel);
//   btnsDel.forEach((btn) => btn.addEventListener("click", () => del()));
// };

// del = () => parentAppend.lastElementChild.remove();

btnAdd.addEventListener("click", () => add());
