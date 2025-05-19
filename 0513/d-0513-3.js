// 제어문: 조건문, 반복문(for-배열)


// 프롬프트 창에서 [최소]버튼을 클릭하면 "취소했습니다"를 출력
// 값이 입력되면 입력된 값을 출력
// 출력 :  console
/*
let input = prompt("값을 입력하세요");
// console.log(input);
if(input === null){
    console.log("취소하였습니다")
} else {
    console.log(input);
}
// if(input === null) console.log("취소하였습니다"); //조건이 1개일 경우
*/

/** */

// prompt로 프로그래밍 점수를 입력받습니다.
// 점수가 90점 이상이면 A학점
// 점수가 80점 이상이면 B학점
// 나머지는 C학점을 출력해 주세요.
// 출력은 document.write를 이용합니다.
/*
let input = prompt("점수를 입력하세요");
if(input >=90){
    document.write("A학점");
} else if(input >=80){
    document.write("B학점");
} else {
    document.write("C학점");
}
    */

let score = prompt("프로그래밍 점수 :");
if(score !== null){
    // 확인버튼 클릭: 무조건 점수가 입력되었다는 가정
    if(Number(score) >= 90){
        document.write("A학점")
    } else if(Number(score) >= 80){
        document.write("B학점")
    } else{
        document.write("C학점")
    }
}


