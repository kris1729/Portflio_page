let hamb=document.querySelector(".hamb");
hamb.addEventListener('click',funcHb);
const hb1=document.querySelector("#hb1")
    const hb2=document.querySelector("#hb2")
    const hb3=document.querySelector("#hb3")
function funcHb(){
    const menu=document.querySelector(".menuVt");
    menu.classList.toggle("appearance")
    
    hb1.classList.toggle("hb1rotate")
    hb2.classList.toggle("hb2rotate")
    hb3.classList.toggle("hb3rotate")
}




let navBg=document.querySelector(".navbar");
let logo= document.querySelector(".logo");
let scrlTop=document.querySelector(".scroll-top");


let scrollP=window.scrollY
const scrolChan=25

window.addEventListener('scroll',()=>{
    scrollP = window.scrollY;
    if(scrollP>scrolChan){
        navBg.classList.add("navbar-bg")
        logo.style.color="black";
        hb1.style.background="white"
        hb2.style.background="white"
        hb3.style.background="white"
        scrlTop.style.display = "block";
    }
    else{
        navBg.classList.remove("navbar-bg")
        logo.style.color="darkorange"
        hb1.style.background="darkorange"
        hb2.style.background="darkorange"
        hb3.style.background="darkorange"
        scrlTop.style.display="none"
        menuItem.style.background="transparent"
    } 

})

scrlTop.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
   })


let changeText=document.getElementById("changeText")
var txt="Creative developer"
var i=0;

var speed=100;
setInterval(() => {
    if(i<=txt.length){
        changeText.innerHTML+=txt.charAt(i);
        i++;
    }
    
    if(i>txt.length){
        i=0;
        changeText.innerHTML="";
        if(txt=="Creative developer"){
            txt="Student   ";
            speed=200;
        }
        else{
            txt="Creative developer";
        }
    }
   }, speed);


   
   




  

