
// // *️⃣ ... : 전개구문(p124)

// // 배열 선언
// const data = [1,2,3,4];

// // 일반 형태
// // let result = data; // result가 data 배열을 참조(같은 배열을 가리킴)
// // data[1] = 8; // data[1] 값을 변경
// // console.log(data); // 1,8,3,4 (data 배열 값 변경됨)
// // console.log(result); // 1,8,3,4 (result도 같은 배열이므로 값이 변경됨)

// // 전개 구문
// let result = [...data]; // data 배열의 값을 새로운 배열로 복사(깊은 복사)
// data[1] = 8; // data[1] 값을 변경해도
// console.log(data); // 1,8,3,4 (data만 변경)
// console.log(result); // 1,2,3,4 (result는 변경되지 않음)



// // *️⃣ 구조 분해 할당(p124)

// const data = [10,20,30]; // 배열 선언
// // let a = data[0]; // 배열의 첫 번째 값을 a에 할당
// // let b = data[1]; // 배열의 두 번째 값을 b에 할당
// // let c = data[2]; // 배열의 세 번째 값을 c에 할당

// // let a = data[0], b = data[1], c = data[2]; // 한 줄로 여러 변수에 할당

// 🔰 let [a,b,c] = data; // 구조 분해 할당: 배열의 각 값을 변수 a, b, c에 순서대로 할당
// 🔰 console.log(a,b,c); // 10 20 30 (각 변수의 값을 출력)



// *️⃣ const users = {
//     userName : '홍길동', // userName 속성에 '홍길동' 저장
//     age : 30            // age 속성에 30 저장
// }
// // 객체의 각 속성 값을 변수에 할당
// // const dataName = users.userName; // users 객체의 userName 값을 dataName에 저장
// // const dataAge = users.age;       // users 객체의 age 값을 dataAge에 저장
// // console.log(dataName, dataAge);  // dataName과 dataAge 값을 콘솔에 출력

// const {userName, age} = users; // 구조 분해 할당: users 객체에서 userName과 age 속성을 같은 이름의 변수로 추출
// console.log(userName, age);    // userName과 age 변수의 값을 콘솔에 출력 ('홍길동', 30)

// 🔰 const {userName:dataName, age:dataAge} = users; // 구조 분해 할당: users 객체에서 userName을 dataName 변수로, age를 dataAge 변수로 추출(이름 변경)
// 🔰 console.log(dataName, dataAge); // dataName과 dataAge 변수의 값을 콘솔에 출력 ('홍길동', 30)


