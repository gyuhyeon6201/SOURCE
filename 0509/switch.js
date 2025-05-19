//사용자 회원 등급
//VIP-20%할인
//Gold-10%할인
//나머지는 기본헤택
//1. 사용자 회원 등급 정보 설정 : grade
//2. grade값이 VIP와 같다면, "20%할인" 출력
//3. grade값이 Gold와 같다면, "10%할인" 출력
//4. 그 이외에는 "기본혜택" 출력
/*
let grade = "VIP";
if(grade === "VIP"){
    console.log("20%할인");
} else if(grade === "Gold"){
    console.log("10%할인");
} else {
    console.log("기본혜택");
}
switch(grade){
    case "VIP" :
        console.log("20%할인");
        break;
    case "Gold" :
        console.log("21%할인");
        break;
        default:
            console.log("기본혜택");
}
*/

//월별 계절 출력
//3~5월까지는 봄, 6~8월까지는 여름, 9~11월까지는 가을, 12~2월까지는 겨울
/*
let month = 5;
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("봄입니다");
        break;
    case 4:
    case 5:
    case 6:
        console.log("여름입니다");
        break;
    case 7:
    case 8:
    case 9:
        console.log("가을입니다");
        break;
    default:
        console.log("겨울입니다");
}
*/

//3의 배수의 수한테는 "3의 배수입니다." 출력
//나머지가 1일 경우는 "나머지가 1입니다."
//나머지가 2일 경우는 "나머지가 2입니다."

const num = 6;
switch (num % 3) {
    case 0:
        console.log("3의 배수입니다.");
        break;
    case 1:
        console.log("나머지가 1입니다.");
        break;
    case 2:
        console.log("나머지가 2입니다.");
        break;
}
