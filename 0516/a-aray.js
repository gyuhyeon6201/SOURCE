/**
 * 배열 : [ ]
 */

// const arr = [1,2,3];
// // const arrObj = new Array(1,2,3);
// const arr2 = [];
// arr2[0] = 'a';
// arr2.push('b'); // 데이터 값 추가 push
// const data = arr2.pop(); // 데이터 값 제거 pop

// // console.log(arr);
// // console.log(arrObj);
// console.log(arr2);
// console.log(data);


/**
 * forEach, map, filter
 * forEach : 있는 배열을 하나씩 가져오기
 * map(length가 똑같이), filter(length가 똑같지 않고 조건을 사용) : 새로 생성
 */

const value = ['a','b','c','d','e'];
// for(let i = 0; i < value.length; i++){
//     console.log(value[i]);
// }
// forEach // 배열선택.forEach(함수선택) // 함수에 들어갈 수 있는 매개변수 : 3개(value, index, arr) // for과 똑같은 역할
// value.forEach((item, num)=>{
//     // console.log(item);
//     // 출력 형식 : {index} 번째 값은 {value} 입니다
//     console.log(`${num}번째 값은 ${item}입니다`)
// });

/**
 * 출력 결과를 소문자를 다 대문자로 출력
 * map
 */

// const upperCase = value.map((data)=>{
//     return data.toUpperCase();
// });
// console.log(upperCase);


/**
 * 알파벳이 'C' 이후인 값을 새로운 배열로 생성
 * filter
 */

// const filterCase = value.filter((item)=>{
//     return item > 'c';
// });
// console.log(filterCase);

/** */

// forEach, map, filter 의 주요 차이점
// 원본 배열을 변경하지 않고 새로운 배열을 만들고 싶어요 : map, filter
// filter 메서드는 어떤 결과를 반환하는가? boolean형 (True/Failse)

/**
 * 각 요소 앖에 value: 이라는 문자열을 붙여서 새롭게 배열을 만들어 주세요
 * 출력 결과 ; [value:a, value:b, value:c .....]
 */

const case1 = value.map((item)=>{
    return `value:${item}`;
});
console.log(case1);

// 생략 버전
// const case1 = value.map(item=> `value:${item}`);
// console.log(case1);




/**
 * 알바펫 순서상 'b' 뒤에 있는 요소만 출력해 주세요
 * 출력 결과 : ['c','d',e']
 */

const case2 = value.filter((item)=>{
    return item>'b';
});
console.log(case2);

// 생략 버전
// const case2 = value.filter(item => item>'b');
// console.log(case2);


/**
 * 각 요소를 "현재 값을 {} 입니다."로 출력해주세요
 * 출력 결과 : 현재 값은 a 입니다.
  *           현재 값은 b 입니다.    
 */

value.forEach((item)=>{
    console.log(`현재 값은 ${item} 입니다`);
});








