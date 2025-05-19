// let x=10;
// let y=4;
let x=10, y=4, result;
// console.log(result); //undfind
// result=null;
// result=0;
// result='';
// console.log(result); //null

y=++x;
console.log(y); //11
x=y--;
console.log(x,y); //x=11, y=10

result=x+y--;
console.log(result,x,y); //21, x=11, y=9

result=++x-y;
console.log(result,x,y); //3, x=12, y=9

let txt = null;
//문자와 숫자, 문자와 문자가 + 연산이 될때는 연결 연산자
txt = result+'값 입니다';
txt = `${result} 값 입니다`;
console.log(txt); //3값 입니다
console.log(typeof(txt)); //string

console.log(4>2); //true
console.log('a'>'b'); //아스키
console.log('javascript'>'JAVASCRIPT'); //true

//javascript, JAVASCRIPT: 전부다 대문자나 소문자로 변경
const user = "Hello"; //string
//Number(): 이미 만들어져 있는 객체 : 내장객체
console.log(user.toLowerCase()); //string 내장객체
console.log(user.toUpperCase()); //string 내장객체
