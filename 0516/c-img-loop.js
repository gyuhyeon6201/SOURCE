/**
 * 다음버튼을 눌렀을 때
 * 1>2>3>4>5>1>2>3>4>5
 */

const prevBtn = document.querySelector("button:nth-child(1)")
const nextBtn = document.querySelector(".next");
const imgElem = document.querySelector("img");
let current = 1;
const nextBtnClick = ()=>{
    current++;
    if(current>5){
        current = 1;
    }
    imgElem.src = `/JavaScript/numberImg/img-${current}.png`;
};
nextBtn.addEventListener("click", nextBtnClick);

const prevBtnClick = ()=>{
    current--;
    if(current<1){
        current = 5;
    }
    imgElem.src = `/JavaScript/numberImg/img-${current}.png`;
};
prevBtn.addEventListener("click",prevBtnClick);