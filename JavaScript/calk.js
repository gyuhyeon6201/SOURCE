let num1 = 40;
let num2 = 30;
// num1과 num2의 합을 저장하세요.
let value = num1+num2;
console.log(value);
// num1과 num2의 곱을 저장하고, 출력하세요.
value = num1*num2;
console.log(value);
// num1과 num2의 차을 저장하고, 출력하세요.
value = num1-num2;
console.log(value);
// num1과 num2의 나눗셈을 저장하고, 출력하세요.
value = num1/num2;
console.log(value);
// num1과 num2의 나눗셈의 나머지값을 저장하고, 출력하세요.
value = num1%num2; 
console.log(value);


if(value % 2){
    console.log("홀수");
}else{
    console.log("짝수");
}

// 숫자로 4칙연산
// 문자로 4칙연산 + - * /
let str1 = "학교종이";
let str2 = "땡땡땡";
console.log(str1+str2);
console.log(str1-str2);

// 숫자와 문자가 합쳐지면 문자형이 됨
str1 = 123
str2 = '숫자합하기';
console.log(str1+str2);

console.log("3"+4+5);
console.log(3+4+"5");

console.log(5+3);
console.log("5"+3);
console.log("5"-3);
console.log("5"*2);
console.log("5px"-1);

console.log("나는 '홍길동' 이다");

//숫자 25와 숫자 48을 각각 변수에 저장 후
//출력 : 24+48=계산값
let data1 = 25
let data2 = 48
console.log(`${data1}+${data2}=${data1+data2}`);