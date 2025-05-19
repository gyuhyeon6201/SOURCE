// 계산기 내부 버튼 배열
const buttons = [
    {text:'AC', className:'ac'},
    {text:'/'},
    {text:'7'},
    {text:'8'},
    {text:'9'},
    {text:'*'},
    {text:'4'},
    {text:'5'},
    {text:'6'},
    {text:'-'},
    {text:'1'},
    {text:'2'},
    {text:'3'},
    {text:'+'},
    {text:'0', className:'zero'},
    {text:'.'},
    {text:'=', className:'equals'}
];

// input display
const inputBox = document.querySelector('input');
let displayCalc = '';
const onBtnClick = (e)=>{
    // console.log(e.target);
    let type = e.target.textContent;
    switch(type){ // 초기화
        case 'AC':
            displayCalc = '';
            inputBox.value = displayCalc;
            break;
        case '=': // 값을 계산
            let result = eval(displayCalc);
            displayCalc = result;
            inputBox.value = displayCalc;
            break;
        default: // 나머지 값은 input에 입력
            displayCalc += type;
            inputBox.value = displayCalc;
            break;
    }
};

// button > btn-wrap 추가 - HTML 요소 가져오기
// createElement 사용하여 btn 요소 생성
const $btnWrap = document.querySelector('.btn-wrap');
buttons.forEach((btn)=>{
    const elem = document.createElement('button');
    elem.textContent = btn.text;
    if(btn.className){
        elem.className = btn.className;
    }
    elem.addEventListener('click', onBtnClick);
    $btnWrap.appendChild(elem);
});













