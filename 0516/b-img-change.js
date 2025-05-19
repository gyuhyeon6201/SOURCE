// 다음 버튼을 클릭을 했을 때
        const prevBtn = document.querySelector("main>button:nth-child(1)");
        prevBtn.disabled = true;
        const nextBtn = document.querySelector(".next");
        const imgElem = document.querySelector("img");
        let count = 1;
        // console.log(prevBtn, imgElem, nextBtn);
        nextBtn.addEventListener("click",()=>{
            // 이미지2로 변경
            //1->2->3->4->5 더 이상 실행 불가
            // imgElem.src = "/JavaScript/numberImg/img-2.png";
            prevBtn.disabled = false;
            if(count<5){
                count++;
                // 이미지5 5에 도달시 nextBtn 비활성화
                if(count===5){
                    nextBtn.disabled = true;
                }
            }
            console.log(count);
            imgElem.src = `/JavaScript/numberImg/img-${count}.png`;
        });
        prevBtn.addEventListener("click",()=>{
            // nextBtn 다시 활성화
            nextBtn.disabled = false;
            if(count>1){
                count--;
                if(count===1){
                    prevBtn.disabled = true;
                }
            }
            console.log(count);
            imgElem.src = `/JavaScript/numberImg/img-${count}.png`;
        });