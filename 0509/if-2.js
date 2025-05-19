//if(조건1) {
// if(조건2) {
//  조건1도 true이고, 조건2도 true
//}
//}

//회원이고, 나이가 성인, 미성년자 구분
// 조건1: 회원, 조건2: 성인/미성년자 구분

const isMember = true;
const age = 18;
/*
if(isMember) {
    if(age>=18){
        console.log("성인 회원 입니다.");
    } 
} else {
    console.log("미성년자 회원 입니다.");
}
*/

if(isMember && age>=18){
    console.log("성인 회원 입니다.");
} else if(isMember && age<18) {
    console.log("미성년자 입니다");
}

