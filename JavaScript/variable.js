// let value = "30";
// console.log( value );

// 1단계: 변수 선언
let age; // 값이 없음, 초기값은 undefined
age = 100; // 값을 할당
age = 200; // 재할당
console.log(age); // 참조: 메모리에서 값을 찾아서 반환
console.log(typeof(age)); // 변수 age의 데이터 타입 출력

 // 문자열 값을 가진 변수 선언
let str = "사용하는 문자";
console.log(str, typeof(str));

// 비교 연산 결과를 가진 변수 선언
let bool = 10>100;
console.log(bool, typeof(bool));

// "", '', ``를 사용 시 수식을 입력해도 문자형으로 인식함
bool = "10>100";
console.log(bool, typeof(bool));

// null 값을 가진 변수 선언
let value = null;
value = "재할당";
console.log(value);

// 상수 선언
const data = 123;
// data = 456; // 상수는 재할당 불가, 주석 처리하지 않으면 오류 발생
console.log(data);

