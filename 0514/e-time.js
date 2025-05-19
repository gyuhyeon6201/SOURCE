/**
 * Math 객체
 * 수학과 관련된 기능
 * 버림, 올림, 반올림, 랜덤, min-max
 */
// const value = 3.4;
// console.log(Math.round(value)); //반올림
// console.log(Math.floor(value)); //내림
// console.log(Math.ceil(value)); //올림
// console.log(Math.abs(-7)); //절댓값, 두 위치의 차이
// console.log(Math.max(4,1,7,2)) //7
// console.log(Math.min(4,1,7,2)) //1

// const nums = [6,9,10,24];
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));


/**
 * random
 */ 
// console.log(Math.random()); //0이상, 1미만의 수를 생성
// console.log(Math.random());
// console.log(Math.random());
/**
 * 0~10미만의 수로
 */ 
// const value = Math.floor(Math.random()*10);
// console.log(value);
/**
 * 2~22미만의 수로
 */ 
// const value = Math.floor(Math.random()*20)+2;
// console.log(value);
/**
 * 2~22미만의 수로 숫자 5개 추출 : 배열
 * for, while, do-while
 */ 
// const nums = [];
// for(let i = 0; i < 5; i++){
//     const value = Math.floor(Math.random()*20)+2;
//     nums[i] = value;
// }
// console.log(nums);

/**
 * 로또번호 추출기
 * 1~45
 * 6개
 */
// const value = Math.floor(Math.random()*44)+1;
// console.log(value);

// const lotto = [4,8];
// // let count = 0;
// while(lotto.length < 6){
//     const num = Math.floor(Math.random() * 44)+1;
//     let i = 0;
//     while(i < lotto.length){
//         if(lotto[i] === num){
//             //같은 숫자가 있다는 의미 -> 다시 뽑아야 함
//             num = 0;
//             break;
//         }
//         i++;
//     }
//     if(num !== 0){
//         lotto.push(num);
//     }
// }
// console.log(lotto);

const lotto = [4,8];
// let count = 0;
while(lotto.length < 6){
    const num = Math.floor(Math.random() * 44)+1;
    if(!lotto.includes(num)){
        lotto.push(num);
    }
}
console.log(lotto);

