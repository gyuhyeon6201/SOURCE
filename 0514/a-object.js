/**
 * 객체 : 다양한 자료형들의 묶음
 * 내장객체 : 객체가 이미 만들어져서 브라우저 적용된 상태
 */

// const computer = {
//     //key : value
//     moniter: '16인치',
//     ram: '8G',
//     disk: '256g'
// }
// window.sessionStorage
// console.log(computer.moniter);


/**
 * 이미 만들어져 있는 내장객체를 사용
 * Date
 */

// const now = new Date();
// // console.log(typeof(now)); //객체 생성
// // console.log(now);
// console.log("연도:", now.getFullYear());
// console.log("월:", now.getMonth()+1); //0부터 시작
// console.log("일:", now.getDate());
// console.log("요일", now.getDay()); //0부터 시작: 일요일
// console.log("몇시", now.getHours());
// console.log("몇분", now.getMinutes());
// console.log("몇초", now.getSeconds());
// console.log("밀리초", now.getMilliseconds());


/**
 * 요일 출력
 * 0-일요일, 1-월요일~~
 * 조건문 : if, ?, switch-case
 */

// switch(now.getDay()){
//     case 0:
//         console.log("일요일");
//         break;
//     case 1:
//         console.log("월요일");
//         break;
//     case 2:
//         console.log("화요일");
//         break;
//     case 3:
//         console.log("수요일");
//         break;
//     case 4:
//         console.log("목요일");
//         break;
//     case 5:
//         console.log("금요일");
//         break;
//     case 6:
//         console.log("토요일");
//         break;
// }


// const now = new Date();
// const day = now.getDay();
// console.log(day);

// const day = new Date().getDay();
// const day = new Date('2025-05-13').getDay();
// const week = ['일','월','화','수','목','금','토'];
// console.groupCollapsed(`${week[day]}요일`);


/**
 * 생일을 이용해서 나이 계산
 * 현재연도 - 생일연도
 * 출력 : 당신의 나이는 {}세 입니다 (console.log)
 */

// const today = new Date().getFullYear();
// const birth = new Date('2000-10-26').getFullYear();
// let age = today - birth;
// console.log(`당신의 나이는 ${age}세 입니다`);


/**
 * D-day 구하기
 * 1일 : 1000*60*60*24(ms)
 */

// const today = new Date().getTime(); //현재 날짜
// const dday = new Date('2025-12-25').getTime(); //d-day
// const diff = dday-today; //밀리초
// // console.log(diff);
// const days = diff/(1000*60*60*24); //225일
// console.log(Math.ceil(days));

// const future = new Date();
// future.setDate(future.getDate()+days);
// console.log(`${future.getMonth()+1}월 ${future.getDate()}일`)


/**
 * 쿠폰 완료일
 * 7일동안 보이지 않기
 */

const today = new Date();
today.setDate(today.getDate()+7);
console.log(today.toDateString()); //UTC기준 표기법
console.log(today.toLocaleDateString()); //국내 표기법
