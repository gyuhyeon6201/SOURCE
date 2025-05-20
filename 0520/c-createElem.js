/**
 * document(객체).querySelector("선택자") : 1개의 요소만 가져옴
 * document(객체).querySelectorAll("선택자") : nodelist[](배열)로 가져옴
 */

// const $h1 = document.querySelector("h1");
// console.log($h1); // type: object
// // $h1.textContent = "DOM수정";
// console.log($h1.dataset.id);

// 클래스 설정

/**
 * checkbox에 체크가 되면 label에 class="change"
 */

// 객체 가져오기

const $check = document.querySelector("input[type=checkbox]");
const $label = document.querySelector("label[for=data]");
// console.log($check);
$check.addEventListener("change", ()=>{
    // // console.log("change event");
    // if($check.checked){
    //     // 라벨에 클래스를 추가 : classList(배열), className(문자열)
    //     // $label.className = "change";
    //     $label.classList.add("change");
    // } else{
    //     // $label.className = '';
    //     $label.classList.remove("change");
    // }

    $label.classList.toggle("change");
});

