/**
 * 시간계산기
 */


const $resultBtn = document.querySelector("button");
//select value 가져오는 함수
const getSelectDate = (id)=>{
    const elem = document.querySelector(`#${id}`);
    return elem.value;
}
//결과보기 버튼 클릭했을 때
$resultBtn.addEventListener("click", ()=>{
    console.log("결과버튼 클릭");
    //시작 날짜를 알아오기
    const startDate = new Date(getSelectDate("start-year"),
                               getSelectDate("start-month")-1,
                               getSelectDate("start-day"));
    const targetDate = new Date(getSelectDate("target-year"),
                               getSelectDate("target-month")-1,
                               getSelectDate("target-day"));
    // console.log(startDate.toDateString(), targetDate.toDateString());
    //남은 날짜 계산
    //targetDate-starDate
    const diff = targetDate - startDate;
    const diffDays = Math.floor(diff/(1000*60*60*24));
    const diffHours = Math.floor(diff%(1000*60*60*24))/(1000*60*60);
    const diffMinutes = Math.floor(diff%(1000*60*60))/(1000*60);
    const diffSeconds = Math.floor(diff%(1000*60))/(1000);
    if(diff<=0){
        document.querySelector(".dday").textContent = "목표일이 시작일보다 빠릅니다."
    } else{
        document.querySelector(".dday").textContent = `남은 날짜 : ${diffDays} 일`
        document.querySelector(".dtime").textContent = `남은 시간 : ${diffDays} 일 ${diffHours} 시 ${diffMinutes} 분 ${diffSeconds} 초`
    }
    //남은시간 초:
    
});
//시작 날짜 설정
const setSelectDate = (id,value)=>{
    const $select = document.querySelector(`#${id}`);
    $select.value = value;
}
//1. 오늘 현재 날짜를 먼저 읽어옵니다. (년/월/일)
const setToday = ()=>{
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate();
    // console.log(year,month,date);
    //함수호출
    setSelectDate("start-year", year);
    setSelectDate("start-month", month);
    setSelectDate("start-day", day);
    
    
    //제일 하단의 오늘의 날짜를 출력
    const todayDate = document.querySelector(".today")
    todayDate.textContent = `현재날짜 : ${today.toLocaleString()}`;
}
setInterval(setToday,1000);

window.onload = ()=>{
    setToday();
}