/**
 * 사용자 점수를 반올림 해서 등급 분류
 * 사용자 점수 = [86.7, 92.6, 73.2]
 * 90점 이상이면 A로 출력, 80점 이상이면 B로 출력, 70점 이상이면 C로 출력
 */

// const score = [86.7, 92.6, 73.2];
// // console.log(score[0]);
// // console.log(score[1]);
// // console.log(score[2]);
// let value = 0;
// for(let i = 0; i < score.length; i++){
//     console.log(score[i]);
//     value = Math.round(score[i]);
//     if(value >= 90){
//         console.log("A");
//     } else if(value >= 80){
//         console.log("B");
//     } else if(value >= 70){
//         console.log("C");
//     }
// }
// console.log(value);

/** 정답 */
// const score = [86.7, 92.6, 73.2];
// score.forEach((item)=>{
//     const result = Math.round(item);
//     if(result>=90){
//         console.log("A");
//     }else if(result >=80){
//         console.log("B")
//     }else if(result >=70){
//         console.log("C")
//     }
// });



/**
 * 쿠폰 만료일 자동 계산
 * 오늘 날짜 이후로 30일 계산 해서 출력
 * 출력 - 쿠폰 만료일 : (날짜 출력)
 */

// const today = new Date();
// // console.log(today.toLocaleDateString());
// today.setDate(today.getDate()+30);
// console.log(`쿠폰 만료일 : ${today.toLocaleDateString()}`);

/**정답 */
// const today1 = new Date();
// today1.setDate(today1.getDate() + 30);
// console.log("쿠폰 만료일 : ", today1.toLocaleDateString());


/**
 * 오늘의 date 값을 입력받아서 주말인지 평일인지 판별하세요
 */

// const today = new Date().getDay();
// const week = ['일','월','화','수','목','금','토'];
// console.log(`${week[today]}요일`);

/** 정답 */
// const today = new Date(); 
// const day = today.getDay(); 
// if (day === 0 || day === 6) {
//   console.log("주말");
// } else {
//   console.log("평일");
// }



/**
 * 인증번호 생성 : 정수(0~10) 6자리 숫자를 랜덤하게 추출
 */

// const nums = [];
// for(let i = 0; i < 6; i++){
//     const value = Math.floor(Math.random()*10);
//     nums[i] = value;
// }
// console.log(nums);

/** 정답 */
// const secret = [];
// while (secret.length < 6) {
//     let num = Math.floor(Math.random() * 10);
//     if (!secret.includes(num)) {
//         secret.push(num);
//     }
// }
// console.log(secret.join(""));


