const descs = [
    "손 흔드는 잠만보",
    "졸고 있는 잠만보",
    "놀고 있는 잠만보",
    "앉아 있는 잠만보",
    "잠만보 키링"
];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgElem = document.querySelector("main>div>img");
const pElem = document.querySelector("main>div>p");

let current = 1;

// 이전버튼
nextBtn.addEventListener("click", ()=>{
    current++;
    if(current > 5){
        current = 1;
    }
    imgElem.src = `./sleepingImg/sleeping-${current}.jpeg`;
    pElem.textContent = descs[current-1];
});

prevBtn.addEventListener("click", ()=>{
    current--;
    if(current < 1){
        current = 5;
    }
    imgElem.src = `./sleepingImg/sleeping-${current}.jpeg`;
    pElem.textContent = descs[current-1];
});