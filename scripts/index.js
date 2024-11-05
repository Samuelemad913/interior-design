 const header =document.querySelector("header");

 window.addEventListener("scroll",function(){

    header.classList.toggle("sticky",this.window.scrollY >0)
 })


let menu = document.getElementById("menu-icon");
let navList = document.querySelector(".navList");

menu.onclick = () =>{
   menu.classList.toggle("bx-x");
   menu.classList.toggle("bx-x");
   navList.classList.toggle("open");

}
 



































































































































 
//  const color = document.getElementById('color')
//  color.addEventListener('click',() =>{
//     if (color.style.backgroundColor = "white"){
//         color.style.backgroundColor = "black"
//     }else {
// color.addEventListener('click',() =>{
//     color.style.backgroundColor
// })


//     }

// }


//  )
// window.addEventListener("scroll",function()
// {
//     const menuIcon = document.getElementById("menu-icon");
// if(window.scrollY > 100){
// menuIcon.style.display = 'block'
// }
// else {
//     menuIcon.style.display = 'none'
// }
// })

