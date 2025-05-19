const products = [
    {id:1, prodName: '상품 A', price: 10000},
    {id:2, prodName: '상품 B', price: 15000},
    {id:3, prodName: '상품 C', price: 30000},
    {id:4, prodName: '상품 D', price: 45000},
    {id:5, prodName: '상품 E', price: 20000}
];

// HTML요소 가져오기
const $prodList = document.querySelector('.product-list');
const $cartList = document.querySelector('.cart-list');
const $total = document.querySelector('.total');


// 쇼핑몰 상품 리스트
products.forEach((prod)=>{
    const divElem = document.createElement('div');
    divElem.className = 'product';

    const spanElem = document.createElement('span');
    spanElem.textContent = `${prod.prodName} (￦${prod.price})`;

    const btnElem = document.createElement('button');
    btnElem.textContent = '장바구니 추가';

    divElem.appendChild(spanElem);
    divElem.appendChild(btnElem);
    $prodList.appendChild(divElem);
});


// 장바구니 추가 상품
const addCartItem = ()=>{
    const divElem = document.createElement('div');
    divElem.className = 'cart';

    const spanElem = document.createElement('span');
    spanElem.textContent = `${prod.prodName} (￦${prod.price})`;

    const btnElem = document.createElement('button');
    btnElem.textContent = '삭제';

    divElem.appendChild(spanElem);
    divElem.appendChild(btnElem);
    $cartList.appendChild(divElem);
};

