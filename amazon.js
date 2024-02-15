let slidebtnleft = document.getElementById("slide-btn-left");
let slidebtnright = document.getElementById("slide-btn-right");
let imageitem = document.querySelectorAll(".img-item");
console.log(imageitem)
let slidestart =0;
let slideend = (imageitem.length-1)*100;

slidebtnleft.addEventListener("click",()=>{
    if(slidestart < 0){
        slidestart =slidestart + 100;
    }

    imageitem.forEach( element =>{
    element.style.transform = `translateX(${slidestart}%)`;
    })
})
slidebtnright.addEventListener("click",()=>{  
    if(slidestart >= -slideend+100){
        slidestart =slidestart -100;
    }

    imageitem.forEach( element =>{
    element.style.transform = `translateX(${slidestart}%)`;
    })

})