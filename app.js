
const btnAdd = document.querySelector("#btn-add");
let btnDel = document.querySelector("#btn-del");
const contentAdd = document.querySelector(".shift__wrapper");
const parentAppend = document.querySelector("#add-block-wrapper");
btnAdd.addEventListener("click", () => {
    const el = document.createElement("div");
    let content = contentAdd.innerHTML;
    el.innerHTML = `${content}<button type="button" id="btn-del" class="btn btn-primary">Del</button>`;
    parentAppend.appendChild(el);
    
});
btnDel &&
btnDel.addEventListener("click", () => {

  parentAppend.removeChild(contentAdd);
});

// const btnAddField = document.querySelector("#btn-add");
// const parentFieldSet = document.querySelector("#add-block-wrapper");
// const blockAddField = document.querySelector("#gv__all-shifts__box");
// console.log(btnAddField);
// console.log(parentFieldSet);
// console.log(blockAddField);
// btnAddField.addEventListener("click", () => {
//     console.log("click");
//     let newDiv = document.createElement = "div";
//     newDiv.innerHTML = "<h1>Привет!</h1>";
//      parentFieldSet.appendChild(newDiv);
// })
 