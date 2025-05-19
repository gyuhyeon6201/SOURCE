// 1~10까지 수 중 짝수만 출력
// 1. 배열 선언
// 2. 짝수 확인
// 3. 짝수 출력

// const nums = [1,2,3,4,5,6,7,8,9,10];
// for( let i=0; i<nums.length; i++ ){
//     // console.log(nums[i]);
//     if( nums[i] % 2 === 0 ){
//         console.log(nums[i]);
//     }
// }

/** */

// 1~10까지의 수의 합
// 1. 배열 선언
// 2. 1~10 합
// 3. 합 출력

// let sum = 0;
// const nums = [1,2,3,4,5,6,7,8,9,10];
// for ( let i=0; i<nums.length; i++ ){
//     // console.log(nums[i]);
//     sum += i;
// }
// console.log(sum);

/** */

// 1~10까지의 숫자를 출력하고 그 옆에 홀수인지 짝수인지 같이 출력
// 1. 배열 선언
// 2. 숫자 출력
// 3. 홀짝 구분
// 4. 홀짝 출력

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < nums.length; i++) {
//     const type = nums[i] % 2 === 0 ? "짝수" : "홀수";
//     console.log(`${nums[i]} - ${type}`);
// }

/** */

// 1~30까지의 숫자 중에서 3과 5의 배수만 출력
// 1. 배열 선언
// 2. 3,5배수 구분
// 3. 3,5배수 선언

// for ( let i = 0; i <=30; i++ ) {
//     if ( i%3 === 0 || i%5 === 0 ){
//         console.log(i);
//     }
// }

/** */

// 사용자의 점수 합계/평균 계산하여 출력
// score = [80,90,100,70] 340/85
// 1. 배열 선언
// 2. 점수 합계/평균 계산
// 3. 출력

// const score = [80,90,100,70];
// let sum = 0;
// for ( let i=0; i<score.length; i++ ){
//     sum += score[i];
// }
// let avg = sum/4;
// console.log(sum, avg);

/** */

// 상품명 앞에 번호 붙이기
// products = ['키보드', '마우스', '모니터', '프린터']
// 출력 : 1-키보드, 2-마우스, 3-모니터, 4-프린터
// 1. 배열 선언
// 2. 출력

// const products = ['키보드', '마우스', '모니터', '프린터'];
// for( let i=0; i<products.length; i++ ){
//     console.log(`${i+1} - ${products[i]}`);
// }

/** */

// 가격에 10% 가산세를 적용 후 출력
// prices = [1000,2000,3000]
// 출력값 : 1100,2200,3300
// 1. 배열 선언
// 2. 10% 적용
// 3. 출력

// const prices = [1000,2000,3000];
// for( let i=0; i<prices.length; i++ ){
//     const calc = prices[i] + (prices[i]*0.1);
//     console.log(calc);
// }

/** */

// 아이디를 이용하여 이메일 리스트 만들기
// users = ['kin', 'lee', 'park']
// 출력값 : kim@email.com, lee@email.com, park@email.com
// 1. 배열 선언
// 2. 아이디와 이메일 조합
// 3. 출력

// const users = ['kin', 'lee', 'park'];
// for( let i=0; i<users.length; i++ ){
//     console.log( `${users[i]}@email.com` );
// }

/** */

// members = ['tom', 'jane', '', null, 'hong']
// 위의 배열에서 이름이 제대로 입력된 회원 수를 출력
// 출력 : 3
// 1. 배열 선언
// 2. true/false 확인
// 3. 회원수 계산
// 4. 출력

// const members = ['tom', 'jane', '', null, 'hong'];
// let count = 0;
// for( let i=0; i<members.length; i++ ){
//     if( members[i] ){
//         count++;
//     }
// }
// console.log(count);

/** */

// nums = [3,7,2,9,5]
// 위의 배열에서 가장 큰 숫자를 출력하세요
// 출력 : 9
// 1. 배열 선언
// 2. 큰 숫자 확인 (max)
// 3. 출력

// const nums = [3,7,2,9,5];
// let max = 0;
// for( let i=0; i<nums.length; i++ ){
//     if( max < nums[i] ){
//         max = nums[i];
//     }
// }
// console.log("max=" + max);

/** */

// nums = [1,4,6,7,8,9]
// 위의 배열에서 짝수의 갯수를 출력하세요.
// 1. 배열 선언
// 2. 짝수 확인
// 3. 갯수 확인 (count)
// 4. 출력

// const nums = [1,4,6,7,8,9];
// let count = 0;
// for( let i=0; i<nums.length; i++ ){
//     if( nums[i] % 2 ===0 ){
//         count++;
//     }
// }
// console.log(`짝수는 ${count}개 입니다.`);

/** */

// numbers = [1,3,5,7,9]
// 배열 안의 숫자 모두를 2배로 변환해서 출력
// 출력 : 1,6,10,14,18
// 1. 배열 선언
// 2. 2배 변환
// 3. 출력

// const numbers = [1,3,5,7,9];
// for ( let i=0; i<numbers.length; i++ ){
//     console.log(numbers[i]*2);
// }

/** */

// items = ['c', 'b', 'c', 'f', 'a', 'g']
// a문자가 저장되어 있는 인덱스 번호를 출력해 주세요
// 1. 배열 선언
// 2. a 찾기
// 3. 출력

// const items = ['c', 'b', 'c', 'f', 'a', 'g'];
// for( let i=0; i<items.length; i++ ){
//     if( items[i] === 'a' ){
//         console.log(i);
//     }
// }

/** */

// tags = ['html', 'css', 'js', 'html', 'html'];
// 위의 배열에서 html이 몇개가 있는지 count  해서 출력하기를 해보세요.
// 1. 배열 선언
// 2. html 갯수 확인 (count)
// 3. 갯수 출력

const tags = ['html', 'css', 'js', 'html', 'html'];
let count = 0;
for( let i=0; i<tags.length; i++){
    if( tags[i] === 'html' ){
        count++;
    }
}
console.log(`html의 갯수는 ${count}개 입니다.`)
// console.log("html의 갯수는" + count + "개 입니다.")



