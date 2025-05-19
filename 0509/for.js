// 반복문 : 반복하기
// for(가장 많이 사용), while, do-while
// for문(기본for문, for-in, for-of, filter, each, map)
// 형식
// for(초기값;조건식;증감식){
// 반복되는 문장;
// } 
/**
 * 1~10까지를 출력
 * 반복 : 숫자가 출력
 * 변경 : 1~10
 */
/*
for(let i=1; i<=10; i++){
    console.log(i);
}
*/

// 10~1까지 출력
// 반복 : 숫자가 출력
// 변경 : 숫자 초기값 : 10, 1씩 감소
/*
for(let i=10; i>=1; i--){
    console.log(i);
}
*/

// 1~10까지 수 중 짝수만 출력
// 반복 : 숫자가 출력
// 변경 : 1~10까지의 숫자 : 짝수만 출력
//       2,4,6,8,10
/*
for(let i=2; i<=10; i+=2){
    console.log(i);
}
*/
/*
for(let i=1; i<=10; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
*/

// 1~10까지의 수의 합을 구하시오.
// 반복 : 수의 합
// 변경 :  if(1~10)
/*
let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;
}
console.log(`1~10까지의 수 합 : ${sum}`);
*/

// 1~10까지의 숫자를 출력하고 그 옆에 홀수인지 짝수인지 같이 출력
// 1 - 홀수
// 2 - 짝수
// 반복 : 숫자 출력
// 변경 : 홀짝 구분
/*
for(let i=1; i<=10; i++){
    if(i%2){
        console.log("짝수");
    } else {
        console.log("홀수");
    }
}
*/
/*
for(let i=1; i<=10; i++){
    const type = i%2 ? "홀수" : "짝수";
    console.log(`${i} - ${type}`);
}
*/
/*
for(let i=1; i<=10; i++){
    let type = '';
    if(i%2){
        type = "홀수";
    } else {
        type = "짝수";
    }
    console.log(`${i} - ${type}`);
}
*/

// 1~30까지의 숫자 중에서 3과 5의 배수만 출력
// 반복 : 3,5배 숫자 출력
// 변경 : 1~30 수가 변경, 이 중에서 3,5배수만 선택
/*
for(let i=1; i<=30; i++){
    if(i%3 == 0 || i%5 == 0){
        console.log(i);
    }
}
*/

//let, const : 자료를 저장
//하나의 변수에 하나의 데이터만 저장 가능
//하나의 변수에 여러개의 데이터를 저장할 때 : 배열, 객체
//배열 : [1,2,3,4,5]
// let value = 1;
// let arr = [1,2,3,4,5]; //인덱스 번호로 원하는 값을 가져옴
// console.log(arr[3]);
/*
const names = ['tom', 'jane', 'anna', 'mike'];
//           names[0] names[1] names[2] name[3]
// console.log(names[2]);
for(let i=0; i<=3; i++){
    console.log(names[i]);
}
*/

// const word = ['h', 'e', 'l', 'l', 'o'];
// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);
// console.log(word[4]);
/*
for(let i=0; i<=4; i++){
    console.log(word[i]);
}
*/

// let str = "hello"; //문자열도 배열이다
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
/*
const str = "hello";
for(let i=0; i<=4; i++){
    console.log(str[i]);
}
*/

// text = "javascript";
// 출력값 : tpircsavaj
/*
const text = "javascript";
for(let i=9; i>=0; i--){
    console.log(text[i]);
}
*/


