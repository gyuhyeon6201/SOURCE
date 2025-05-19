// 사용자의 점수 합계/평균 계산하여 출력
// score = [80,90,100,70] 340/85
// 반복 : 점수의 합계를 내는 방법 (sum += 80)
// 변경 : 배열에서 점수를 하나씩 읽어오기, index 번호가 변경
/*
const scores = [80,90,100,70];
let sum = 0;
for(let i=0; i<4; i++){
    sum += scores[i];
}
const avg = sum/4
console.log(sum, avg);
*/

// 배열 : 같은 종류의 데이터를 순서대로 저장
// 각값의 인덱스(index) 숫자로 데이터를 가져옵니다.
// 인덱스 숫자는 length가 계산해줌
/*
const scores = [80,90,100,70,80,60];
console.log(scores.length);
let sum = 0;
for(let i=0; i<scores.length; i++){
    sum += scores[i];
}
const avg = sum/scores.length
console.log(sum, avg);
*/

// 상품명 앞에 번호 붙이기
// products = ['키보드', '마우스', '모니터', '프린터']
// 출력
// 1-키보드
// 2-마우스
// 3-모니터
// 4-프린터
/*
const products = ['키보드', '마우스', '모니터', '프린터'];
//const는 재할당이 불가능하므로 추가가 불가능하지만,
//const는 연속된 데이터의 첫번째 영역을 의미하며 영역에 추가하는 것이 아닌 데이터 그 자체를 추가하는 것이므로 가능하다
products[4] = '스피커';
for(let i=0; i<products.length; i++){
    console.log(`${i+1} - ${products[i]}`);
}
*/


// 가격에 10% 가산세를 적용 후 출력
// prices = [1000,2000,3000]
// 출력값 : 1100,2200,3300
/*
const prices = [1000,2000,3000];
for(let i=0; i<prices.length; i++){
    const calc = prices[i] + (prices[i]*0.1);
    console.log(`총 가격은 ${calc} 원 입니다.`);   
}
*/

// 아이디를 이용하여 이메일 리스트 만들기
// users = ['kin', 'lee', 'park']
// 출력값 : kim@email.com, lee@email.com, park@email.com
/*
const users = ['kin', 'lee', 'park'];
for (let i=0; i<users.length; i++){
    console.log(`${users[i]}@email.com`);
}
*/

// members = ['tom', 'jane', '', null, 'hong']
// 위의 배열에서 이름이 제대로 입력된 회원 수를 출력
// 출력 : 3
/*
const members = ['tom', 'jane', '', null, 'hong'];
let count = 0;
for(let i=0; i<members.length; i++){
    if(members[i]){
        count++;
    }
}
console.log("입력 아이디는 " + count);
*/

// nums = [3,7,2,9,5]
// 위의 배열에서 가장 큰 숫자를 출력하세요
// 출력 : 9
/*
const nums = [3,7,2,9,5];
let max = nums[0];
for( let i=1; i<nums.length; i++){
    if( max < nums[i] ){
        max = nums[i];
    }
}
console.log("max=" + max);
*/
/*
console.log( nums[0] ); //3
max = nums[0]; //3
console.log( nums[1] ); //7
if( max < nums[1] ){
    max = nums[1]; //7
}
console.log( nums[2] ); //2
if( max < nums[2] ){
    max = nums[2]; //7
}
console.log( nums[3] ); //9
if( max < nums[3] ){
    max = nums[3]; //9
}
console.log( nums[4] ); //5
if( max < nums[4] ){
    max = nums[4]; //9
}
console.log("max=" + max);
*/

// nums = [1,4,6,7,8,9]
// 위의 배열에서 짝수의 갯수를 출력하세요.

// const nums = [1,4,6,7,8,9];
// let count = 0;
// for(let i=0; i<nums.length; i++){
//     if( nums[i] % 2 === 0 ){
//         count++;
//     }
// }
// console.log(`짝수는 ${count}개 입니다.`);
