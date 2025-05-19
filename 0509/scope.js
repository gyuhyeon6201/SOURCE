let value; //선언만
console.log(value); //undefined(=false)
{
    let data;
    console.log(data); //undefined
}
data = "추가설정";
console.log(data);
/*
if(value){
    let add = "value가 true";
    console.log(add);
} else{
    add="value가 false"; //오류 --> 로컬이라 적용된것으로 추정
    console.log(add);
}
console.log(add); //오류 --> 로컬이라 적용된것으로 추정
*/
let value = true; //전역변수
let aaa = "전역변수";
let aaa = "data";
if(value) {
    //지역변수 
    let aaa = "value가 true";
    console.log(aaa);
}
console.log(aaa);