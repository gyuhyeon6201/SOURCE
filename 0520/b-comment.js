// 객체 요소 가져오기
const formElem = document.querySelector("#comment-form");
const inputElem = formElem.querySelector("#comment-form>#comment-input");
const listElem = document.querySelector("#comment-list")

// 버튼 요소 생성하는 함수
const createButton = (value, text)=>{
    const elem = document.createElement("button");
    elem.className = value;
    elem.textContent = text;
    return elem;
}

// 댓글 수정 버튼을 클릭했을 때 사용하는 함수
const editComment = (divElem, oldText)=>{
    divElem.innerHTML = '';
    const inputElem = document.createElement("input");
    inputElem.type = "text";
    inputElem.value = oldText;
    inputElem.className = "edit-input";
    divElem.appendChild(inputElem);

    const btnwrap = document.createElement("div");
    btnwrap.className = "btn-wrap";
    const saveBtnElem = createButton("save-btn", "저장");
    saveBtnElem.addEventListener("click", ()=>{
        // 저장버튼을 클릭하면
        const newText = inputElem.value.trim();
        if(newText){
            listElem.replaceChild(buildCommendElem(newText), divElem);
        }
    });
    const cancelBtnElem = createButton("cancel-btn", "취소");
    cancelBtnElem.addEventListener("click", ()=>{
        // 취소버튼을 클릭하면
        divElem.innerHTML = '';
        listElem.replaceChild(buildCommendElem(oldText), divElem);
        // const text = document.createElement("span");
        // text.textContent = oldText;
        // const btnWrap = document.createElement("div");
        // btnWrap.className = "btn-wrap";
        // const editBtn = createButton("edit-btn","수정");
        // const delBtn = createButton("del-btn","삭제");
        // btnWrap.appendChild(editBtn);
        // btnWrap.appendChild(delBtn);
        // divElem.appendChild(text);
        // divElem.appendChild(btnWrap);
    });

    btnwrap.appendChild(saveBtnElem);
    btnwrap.appendChild(cancelBtnElem);

    divElem.innerHTML = '';
    divElem.appendChild(inputElem);
    divElem.appendChild(btnwrap);
}

// 댓글 요소 생성 함수
const buildCommendElem = (text)=>{
    const divElem = document.createElement("div");
    divElem.className = "comment";
    
    const spanElem = document.createElement("span");
    spanElem.textContent = text;
    divElem.appendChild(spanElem);

    const btnwrap = document.createElement("div");
    btnwrap.className = "btn-wrap"

    const editBtn = createButton("edit-btn","수정");
    // 수정 버튼이 클릭되면
    editBtn.addEventListener("click", ()=>{
        editComment(divElem, spanElem.textContent);
    });
    const delBtn = createButton("del-btn","삭제");
    // 삭제 버튼이 클릭되면
    delBtn.addEventListener("click", ()=>{
        divElem.remove();
    });
    // console.log(delBtn, delBtn);

    // 부모자식관계 설정
    btnwrap.appendChild(editBtn);
    btnwrap.appendChild(delBtn);
    divElem.appendChild(btnwrap);
    return divElem;
}

// 댓글 등록 버튼이 실행 되면
formElem.addEventListener("submit", (event)=>{
    event.preventDefault(); // 기능 초기화
    const text = inputElem.value.trim(); // 양쪽끝에 여백 없애기
    if(text){
        // createcomment(text);
        const divElem = buildCommendElem(text);
        listElem.appendChild(divElem);
        formElem.reset();
    }
});
