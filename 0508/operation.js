/* //산술연산자 : +, -, *, /, %(나머지)
console.log(10+5);
console.log(20-7);
console.log(4*3);
console.log(15/3);
console.log(10%3); */

/* //문자열 연산
const str1 = 'hello';
const str2 = 'world'; */

/* // hello world
console.log(`${str1} ${str2}`);
console.log(str1+` `+str2); */

/* //문자+숫자=문자
console.log(str1+4); //hello4
console.log("10"+4); //104
console.log("10"-4); //6
console.log("aaa"-4); //NaN(숫자의 오류값)
console.log("10"*3); //30 */

/* //문자, 숫자가 서로 연산
let txt = "35"; //이 변수를 이용해서 30값을 출력
txt = Number(txt); //문자를 숫자로 변환
console.log(txt, typeof(txt)); */

/* //대입연산자
let a = 10;
//a값 + 5
a=a+5; //10+5=15
a+=5; //15+5=20
a=a-5; //20-5=15
a-=5; //15-5=10
a=a*3; //10*3=30
a*=3; //30*3=90
a/=3; //90/3=30
a%=4; //2
// a+5=a; 틀린문법
console.log(a); */

/* //증감연산자 : ++, -- / a=a+1, a=a-1 -> a++, ++a, a--, --a
// -> 연산자가 앞에 있으면 출력이 먼저, 연산자가 뒤에있으면 +1
let b = 6;
let c = 0;
c=b++; //1.c=a 2.b++
console.log(b); //7
console.log(c); //6
c=++b;
console.log(b,c); //b=8, c=8
c=b++;
console.log(b,c); //b=9, c=8
c=b--;
console.log(b,c); //b=8, c=9
c=--b;
console.log(b,c); //b=7, c=7

let x=5;
x++; //6
console.log(x); //6
console.log("현재페이지:", x++); //현재페이지: 6(출력), x=7
console.log("다음페이지:", x); //현재페이지: 7

let time = 5;
console.log("타이머 시작");
console.log(--time); //4
console.log(--time); //3

let visiter = 0;
visiter++; //1
visiter++; //2
visiter++; //3
console.log("총 방문자 :", visiter); //총 방문자 : 3

let y=10;
console.log("y=", y++); //y= 10
console.log("y=", y); //y= 11

let count = 0;
count++; //1
++count; //2
console.log(count); //2

let page = 5;
let next = page++;
console.log(next); //5
console.log(page); //6 

/* //비교연산자
let a=7;
let b=4;
console.log(a>b); //true
console.log(a<b); //false
console.log(a>=b); //true
console.log(a>=7); //true
console.log(b<=3); //false
console.log(a==7); //true
console.log(a=='7'); //true, == 값이 같다 / 숫자 값만 비교
console.log(a==='7'); //false == 타입까지 같다 / 엄격한 자료 비교
// == 값이 같다, != 값이 같지 않다, === 타입까지 같다, !== 타입까지 다르다
console.log(b !=4); //f
console.log(b !='4'); //f
console.log(b !=='4'); //t

let c=100;
console.log(c !==100); //f

let userAge = 19;
const isAult = userAge >=18;
console.log(isAult); //t

let inpuName = '홍길동';
let saveName = '홍길동';
console.log(inpuName === saveName); //t

let x=3;
let y=true;
console.log(x===y); //f
console.log(x==y); //f
console.log(1==y); //t
console.log(1===y); //f */

/* //논리연산자 : and(&&), or(||), not(!)
//and(&&)
console.log(true && true); //t
console.log(true && false); //f
console.log(false && false); //f
//true && 일 경우 0을 제외한 모든 값이 true이며, 뒤에 있는 값이 출력됨
console.log(true && 1); //1
console.log(true && 2); //2
console.log(true && -3); //-3
console.log(false && 'aaa'); //f
console.log(false && 'aaa'); //f
// 앞에가 true일 경우 뒤에 있는 값이, 앞이 false일 경우 앞에 있는 값이 출력됨
console.log(1 && 'a'); //a
console.log(0 && -1); //0
//or(||)
console.log(true||true); //t
console.log(true||false); //t
console.log(false||false); //f
//not(!)
console.log(!true); //f
console.log(!false); //t */

/* //삼항 조건 연산자
// (조건) ? true : false;
//1. 나이 조건으로 성인/미성년자를 분류
const userAge = 19;
const result = (userAge >=17) ? "성인" : "미성년자";
console.log(result);
//2. 비밀번호 유무 체크
const passward = ''; //false : 0, null, undefined, ''(공백)
// const passward = 1234; //false : 0, null, undefined, ''(공백)
const message = passward ? "비밀번호 입력됨" : "비밀번호를 입력하세요";
console.log(message);
//3. 로그인 상태 확인
const isLogin = true;
const txt = isLogin? "로그아웃" : "로그인";
console.log(txt);
//4. 구매 수량에 따른 할인
const qty = 1;
const discount = (qty>3) ? "할인 적용" : "할인 없음";
console.log(discount);
//5. 점수에 따른 합격/불합격
// score = 72점
// 60점 이상이면 합격 출력, 그렇지 않으면 불합격 출력
const score = 72;
const test = (score>=60) ? "합격" : "불합격";
console.log(test);
//6. 
// 변수는 하나 설정 : 숫자를 입력
// 숫자가 홀수/짝수인지 판별하세요
const num = 8; //홀수, 짝수 여부
// const evenOdd = (num%2 === 1) ? "홀수" : "짝수"
const evenOdd = (num%2) ? "홀수" : "짝수"
console.log(evenOdd);
//7. 사용자 입력 체크
const keyword = 'search';
const output = keyword ? `검색어 : ${keyword}` : `검색어를 입력하세요`;
console.log(output); */