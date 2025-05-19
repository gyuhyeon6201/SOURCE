const descs = [
    "이미지1 설명입니다",
    "이미지2 설명입니다",
    "이미지3 설명입니다",
    "이미지4 설명입니다",
    "이미지5 설명입니다"
];

const prevBtn = document.querySelector(".prev");
const imgElem = document.querySelector("div>img");
const pElem = document.querySelector("div>p");
const nextBtn = document.querySelector(".next");

let current = 1;

// 다음버튼
nextBtn.addEventListener("click", ()=>{
    current++;
    if(current > 5){
        current = 1;
    }
    imgElem.src = `/JavaScript/numberImg/img-${current}.png`;
    pElem.textContent = descs[current-1];
});


// 이전버튼
let descsElem = 0;

prevBtn.addEventListener("click", ()=>{
    current--;
    descsElem--;
    if(current < 1){
        current = 5;
        descsElem = 4;
    }
    imgElem.src = `/JavaScript/numberImg/img-${current}.png`;
    pElem.textContent = descs[descsElem];
});