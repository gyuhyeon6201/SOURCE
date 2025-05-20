const formElem = document.querySelector("#userForm");
const nameElem = formElem.querySelector("#inputName");
const ageElem = formElem.querySelector("#inputAge");
const listElem = document.querySelector(".container");
// console.log(nameElem);
// console.log(ageElem);

// item 요소 생성 함수
const createItem = (nameTxt, ageTxt)=>{
    // div 요소 생성
    const divElem = document.createElement("div");
    divElem.className = "item";
    // span 요소 생성
    const spanElem = document.createElement("span");
    spanElem.textContent = `${nameTxt} (${ageTxt}세)`;
    divElem.appendChild(spanElem);
    // button 요소 생성
    const btnElem = document.createElement("button");
    btnElem.textContent = "삭제";
    btnElem.addEventListener("click", ()=>{
        divElem.remove(); // DOM 요소를 완전히 삭제
    });
    divElem.appendChild(btnElem);

    listElem.appendChild(divElem);
};

// 폼에서 submit이 실행이 되는 경우
formElem.addEventListener("submit", (event)=>{
    event.preventDefault();
    // console.log("submit 이벤트 발생");
    const nameTxt = nameElem.value.trim();
    const ageTxt = ageElem.value.trim();
    // console.log(nameTxt, ageTxt);
    if(nameTxt && ageTxt){
        // item 생성
        createItem(nameTxt, ageTxt);
        // 입력 필드 초기화
        formElem.reset();
    }
});



