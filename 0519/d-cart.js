// console.log("cart.js 실행"); : HTML에 정상 연결되었는지 확인

const products = [
    {id:1, prodName: "상품 A", price: 10000},
    {id:2, prodName: "상품 B", price: 20000},
    {id:3, prodName: "상품 C", price: 15000}
];
const cartlistElem = document.querySelector(".cart-list");
const cart = [];
const removeCart = (idx)=>{
    console.log(idx);
    cart.splice(idx,1);
    renderCard();
}
const renderCard = ()=>{
    // 배열에 아무것도 없을때를 확인하는 항목
    if(cart.length === 0){
        // 배열에 아무것도 없을때를 확인하는 항목
        cartlistElem.innerHTML/* (HTML에 추가) */= `<p>장바구니가 비어있습니다.</p>`
    } else{
        let createText = '';
        let total = 0;
        //카트에 저장
        cart.forEach((elem,idx)=>{
            // console.log(elem);
            // <div class="cart"><span>상품 A (￦10,000)</span><button>삭제</button>
            createText += `<div class="cart"><span>${elem.prodName}(￦${elem.price})</span><button onclick="removeCart(${idx})">삭제</button>`;
            total += elem.price;
        });
        // createText 어떻게 +=로 추가되는지 확인용 console.log(createText);
        cartlistElem.innerHTML = createText;
        document.querySelector("#total").textContent = `${total}원`;
    }
};
const addElem = document.querySelectorAll(".product>button");
// addElem확인용 console.log(addElem);
addElem.forEach/* (읽어만 오는) */((elem,idx)=>{
    elem.addEventListener("click",()=>{
        cart.push(products[idx]);
        // cart.push확인용 console.log(cart);
        // addElem의 idx 확인용 console.log(`${idx}번째 클릭`);
        // products의 idx 확인용 console.log(products[idx]);
        renderCard();
    });
});

//load되면
renderCard();