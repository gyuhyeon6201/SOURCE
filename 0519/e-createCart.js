// 상품 정보 배열
const products = [
    {id:1, prodName: "상품 A", price: 10000},
    {id:2, prodName: "상품 B", price: 15000},
    {id:3, prodName: "상품 C", price: 40000},
    {id:4, prodName: "상품 D", price: 20000},
    {id:5, prodName: "상품 E", price: 35000}
];

// 변수 선언
let cart = [];
let uid = 0;

// 객체 설정(HTML 요소 가져오기)
const $prodList = document.querySelector("#product-list");
const $cartList = document.querySelector("#cart-list");
const $total = document.querySelector("#total");

const updateTotal = ()=>{
    const total = cart.reduce((sum, item)=>{
        return sum + item.price;
    },0);
    $total.textContent = total;
};

const renderCart = ()=>{ // 장바구니 목록을 화면에 그리는 함수
    $cartList.innerHTML = ''; // 장바구니 영역을 먼저 비움(초기화)
    cart.forEach((item)=>{ // cart 배열의 각 아이템에 대해
        addCartItem(item); // addCartItem 함수를 호출하여 화면에 추가
    });
};

// 장바구니에서 삭제관련 함수
const removeCart = (uid) =>{
    // // 배열 메소드 중에서 몇번째 인덱스인지 찾기 (uid로 구분)
    // const idx = cart.findIndex((item)=>{
    //     return item.uid === uid; // cart 배열에서 uid가 일치하는 아이템의 인덱스 반환
    // });
    // if(idx >= 0){
    //     cart.splice(idx,1); // 해당 인덱스의 아이템을 cart 배열에서 삭제
    // }

    // 여러개일때 축소 방식 = filter 사용
    cart = cart.filter((item)=>{
        return item.uid !== uid;
    });
    renderCart(); // 전체를 다시 그리기 --> 삭제 후 장바구니 전체를 다시 그림(화면 갱신)
    updateTotal(); // ✅ 삭제 후 총합계 갱신
};

// cart 아이템(장바구니) 추가
const addCartItem = (item)=>{
    // div 요소 생성
    const divElem = document.createElement('div');
    divElem.className = 'cart';
    divElem.dataset.uid = item.uid;
    // console.log(divElem);
    // span 요소 생성
    const spanElem = document.createElement('span');
    spanElem.textContent = `${item.prodName} (￦${item.price})`;
    // button 요소 생성
    const btnElem = document.createElement('button');
    btnElem.textContent = '삭제';
    // 삭제 버튼을 클릭하면 장바구니에서 삭제
    btnElem.addEventListener('click',()=>{
        removeCart(item.uid);
    });

    // 부모자식관계 생성
    divElem.appendChild(spanElem);
    divElem.appendChild(btnElem);
    $cartList.appendChild(divElem);
};

// 상품 목록 생성
products.forEach((item)=>{
    // div 요소 생성
    const divElem = document.createElement('div');
    divElem.className = 'product';
    // span 요소 생성
    const spanElem = document.createElement('span');
    spanElem.textContent = `${item.prodName} (￦${item.price})`;
    // button 요소 생성
    const btnElem = document.createElement('button');
    btnElem.textContent = '장바구니 추가';
    // 장바구니 버튼을 클릭하면 cart에 추가
    btnElem.addEventListener('click',()=>{
        const newItem = {...item, uid:uid++};
        cart.push(newItem);
        addCartItem(newItem);
        updateTotal(); // ✅ 추가 후 총합계 갱신
    });

    // 부모자식관계 생성
    divElem.appendChild(spanElem);
    divElem.appendChild(btnElem);
    $prodList.appendChild(divElem);

    // console.log(divElem, spanElem);
});

$prodList