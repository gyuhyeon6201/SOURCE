// for( 초기값; 조건; 증감값; ) { };

//아래와 같은 서식에서 data가 의미하는 값은 첫번째 위치값인 '5'임(?)
// const data = [5,8,2,6,0]; // 숫자 배열 선언
// console.log( data[0] ); //5
// console.log( data[1] ); //8
// console.log( data[2] ); //2
// console.log( data[3] ); //6
// console.log( data[4] ); //0
//반복 : console.log( data[] );
//변경 : 0,1,2,3,4

// const data = [5,8,2,6,0];
// //몇개인지 확인하기 위해 count 수식 추가
// let count = 0;
// for( let i=0; i<data.length; i++){
//     // console.log( i );
//     console.log( data[i] );
//     // 가져온 데이터가 짝수인지 확인
//     // 가져온 데이터를 2로 나눈 나머지 값이 0이라면(=if) 2의 배수이므로 짝수로 확인
//     if( data[i] % 2 === 0 ); { //짝수를 구하는 수식
//         //몇개인지 체크
//         count++; //8 - 1, 2 - 2, 6 -3
//     }
// }
// console.log(`짝수의 갯수는 ${count}개`);


// numbers = [1,3,5,7,9]
// 배열 안의 숫자 모두를 2배로 변환해서 출력
// 출력 : 1,6,10,14,18
// 1. numbers 배열 선언
// 2. 반복 : numbers의 숫자를 하나씩 출력 : 1 3 5 7 9
// 3. 변경 :

// const numbers = [1,3,5,7,9];
// for( let i=0; i<numbers.length; i++ ){
//     console.log(numbers[i]*2);
// }


// items = ['c', 'b', 'c', 'f', 'a', 'g']
// a문자가 저장되어 있는 인덱스 번호를 출력해 주세요
// 1. items 배열 선언
// 2. 첫번째 데이터를 가져옴
// 3. 가져온 데이터가 a와 같은지 비교
// 4. 같으면 index 번호를 출력, 반복을 중단(break)
// 5. 같지 않으면 다음 데이터를 가져오기

const items = ["c", "b", "c", "f", "a", "g"];
for ( let i = 0; i < items.length; i++ ) {
    // console.log(items[i]);
    if ( items[i] === 'a' ){
        console.log(i);
        break;
    }
}
