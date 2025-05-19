const btnElem = document.querySelector("button");
console.log(btnElem);
// console.log(typeof(btnElem)); //객체
// console.dir(btnElem); //객체형식으로 보여짐 (키:값)
btnElem.style.border = "none";

// btnElem.onclick = ()=> {
//     alert("팝업표시");
// }
const popupBox = ()=>{
    alert("팝업표시");
}
// btnElem.onclick = popupBox;
btnElem.addEventListener("click",popupBox);
