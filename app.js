
const btnAdd = document.querySelector("#btn-add");
// let btnsDel = document.querySelectorAll(".btn-del");
let btnDel
const contentAdd = document.querySelector(".shift__wrapper");
const parentAppend = document.querySelector("#add-block-wrapper");
const parentAppendDel = document.querySelector("#gv__add-shift-button__wrapper");

add = () => {
  
 
  if (!btnDel) {
    const buttonDel = document.createElement("button");
    buttonDel.type="button";
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

}

del = () => {
  console.log(parentAppend.childElementCount);
  if (parentAppend.childElementCount > 1) {
    parentAppend.lastElementChild.remove();
    if(parentAppend.childElementCount = 1) {
    btnDel.remove();
  }; 
  };
}
//   btnsDel = document.querySelectorAll(".btn-del");
//   console.log(btnsDel);
//   btnsDel.forEach((btn) => btn.addEventListener("click", () => del()));
// };

// del = () => parentAppend.lastElementChild.remove();
  

 

btnAdd.addEventListener("click", () => add())





const shiftStart = document.querySelector(".shift-start");


  shiftStart.addEventListener("change", () => this.value);
  shiftStart.value
