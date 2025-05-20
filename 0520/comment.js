//객체 정보 가져오기
const $form = document.querySelector("#comment-form");
const $input = $form.querySelector("#comment-input");
const $list = document.querySelector("#comment-list");
//버튼 요소 생성하는 함수
const createButton = (value,text)=>{
  const elem = document.createElement("button");
  elem.className = value;
  elem.textContent = text;
  return elem;
}
//댓글 수정 버튼을 클릭했을 때 사용하는 함수
const editComment = ($comment, oldText)=>{  
  const $input = document.createElement("input");
  $input.type = "text";
  $input.value = oldText;
  $input.className = "edit-input";  
  const $btnWrap = document.createElement("div");
  $btnWrap.className = "btn-wrap";
  const $saveBtn = createButton("save-btn","저장");
  $saveBtn.addEventListener("click",()=>{
    //저장 버튼을 클릭하면
    const newText = $input.value.trim();
    if( newText ){
      $list.replaceChild( buildCommentElem(newText), $comment);
    }
  });
  const $cancelBtn = createButton("cancel-btn","취소");
  $cancelBtn.addEventListener("click",()=>{
    //취소 버튼을 클릭하면
    $list.replaceChild( buildCommentElem(oldText), $comment);
  });
  $btnWrap.appendChild($saveBtn);
  $btnWrap.appendChild($cancelBtn);
  
  $comment.innerHTML = '';
  $comment.appendChild($input);  
  $comment.appendChild($btnWrap);
}

//댓글 요소 생성 함수
const buildCommentElem = (text)=>{
  const $div = document.createElement("div");
  $div.className = "comment";
  const $span = document.createElement("span");
  $span.textContent = text;
  $div.appendChild($span);
  const $btnWrap = document.createElement("div");
  $btnWrap.className = "btn-wrap";
  const $editBtn = createButton("edit-btn","수정");
  $editBtn.addEventListener("click",()=>{
    editComment($div,$span.textContent);
  });
  const $delBtn = createButton("del-btn","삭제");
  //삭제 버튼이 클릭되면
  $delBtn.addEventListener("click",()=>{
    $div.remove();
  });
  $btnWrap.appendChild($editBtn);
  $btnWrap.appendChild($delBtn);
  $div.appendChild($btnWrap);  
  return $div;
}

//댓글 등록 버튼이 실행이 되면
$form.addEventListener("submit",(event)=>{
  event.preventDefault();  //기능 초기화
  const text = $input.value.trim();  //양쪽끝에 여백 없애기
  if( text ){    
    const $div = buildCommentElem(text);
    $list.appendChild($div);
    $form.reset();
  }
});