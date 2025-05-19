/*
제어문 : if문
(조건) ? truel : false; //A &&(and) B, A ||(or) B
if(조건) {
    조건이 true일 경우 실행
}
    if(조건) {
    조건이 true일 경우 실행
    } else {
    조건이 false일 경우 실행
    }
*/
/*
if(조건){
    실행문;
}
*/

//점수가 60점 이상이면 합격 출력, 아니면 불합격 출력
//1. 변수 : score = 75점으로 설정
//2. score가 60점 이상인지 아닌지 체크
//3. 60점 이상이면 합격 출력, 아니면 불합격 출력
/*
const score = 75;
const msg = (score>=60) ? "합격" : "불합격"
console.log(msg);
*/
/*
const score = 75;
if(score>=60){
    console.log("합격");
} else{
    console.log("불합격");
}
*/

//성인인증 : 나이가 18세 이상이면 성인 출력, 그렇지 않으면 미성년자 출력
//1. 나이를 입력받는다. age 변수 사용
//2. 나이가 18세 이상인지 확인(if)
//3. 18세 이상이면 성인 출력, 아니면 미성년자 출력
/*
const age = 21;
if(age>=18){
    console.log("성인");
} else{
    console.log("미성년자");
}
*/

//재고 상태를 확인 : 물품의 재고 수량이 0개 초과면 주문가능 출력, 그렇지 않으면 품절 출력
//1. 물품 재고 수량을 받는다.
//2. 물품 재구 수량이 0개 이상인지 확인
//3. 0개 초과면 주문가능 출력, 아니면 품절 출력
/*
const stock = 0;
if(stock>0) {
    console.log("주문가능");
} else{
    console.log("품절");
}
*/

//다중 처리
//점수가 90점 이상이면 A등급
//      80점 이상이면 B등급
//      70점 이상이면 C등급
//      60점 이상이면 D등급
//      나머지는 재시험등급
/*
if(1조건){
    //참일경우
} else if(2조건){
    //참일경우
} else if(3조건){
    //참일경우
} else if(4조건){
    //참일경우
} else {
    //참일경우
}
*/
/*
const score = 83;
if(score>=90){
    console.log("A등급");
} else if(score>=80){
    console.log("B등급");
} else if(score>=70){
    console.log("C등급");
} else if(score>=60){
    console.log("D등급");
} else {
    console.log("재시험등급");
} 
*/

//시간에 따른 인사말 출력
//시간이 12시 전이면 "좋은 아침입니다." 출력
//시간이 18시 전이면 "좋은 오후입니다." 출력
//그 이후에는 "좋은 저녁입니다." 출력
//시간에 대한 변수 : hour 로 처리
/*
const hour = 15;
if(hour<12) {
    console.log("좋은 아침입니다.");
} else if(hour<18) {
    console.log("좋은 오후입니다");
} else {
    console.log("좋은 저녁입니다.")
}
*/

//숫자 범위 확인
//숫자가 0보다 작으면 "음수입니다."" 출력
//0(포함)~100 사이의 수이면 "0부터 100사이의 수입니다." 출력
//100 초과의 수이면 "100보다 큰 수 입니다." 출력
/*
const num = 155;
if(num<0){
    console.log("음수입니다.")
} else if(num>=0 && num<=100){
    console.log("0부터 100사이의 수입니다.")
} else {
    console.log("100보다 큰 수입니다.")
}
*/

//월별 계절 출력
//3~5월까지는 봄, 6~8월까지는 여름, 9~11월까지는 가을, 12~2월까지는 겨울
//1. month로 변수 설정
//2. 월별 계절 조건을 확인
/*
const month = 5
if(month>=3 && month<=5){
    console.log("봄");
} else if(month>=6 && month<=8){
    console.log("여름");
} else if(month>=9 && month<=11){
    console.log("가을");
} else {
    console.log("겨울");
}
*/

//코드가 입력되면 111,222,333 일 경우, "코드가 입력되었습니다." 로 출력
//code로 변수 설정
/*
const code = 347;
if(code === 111 || code === 222 || code === 333){
    console.log("코드가 입력되었습니다.")
} console.log("조건 성립 안됨");
*/

//키워드가 비어 있거나, 공백일 경우는 "검색어를 입력하세요." 출력
//
//

const keyword = "";
if(keyword==="" || keyword===null){
    console.log("검색어를 입력하세요.")
} /* else{
    console.log(keyword);
}
 */