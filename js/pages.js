let gearCheck = document.querySelector(".gear-check");
let colorOption = document.querySelector(".color-option");
let to = document.querySelector(".to")

gearCheck.addEventListener("click" , function(){
    colorOption.classList.toggle("to")
});

/********************************************************** */

let red = document.getElementById("1");
red.style.cssText="background-color:#E41b17;";

let blue = document.getElementById("2");
blue.style.cssText="background-color:#0895d1;";

let gold = document.getElementById("3");
gold.style.cssText="background-color:goldenrod;";

let green = document.getElementById("4");
green.style.cssText="background-color:#009688;";

let purple = document.getElementById("5");
purple.style.cssText="background-color:#9c27b0;";

let targetColor = document.querySelector(".target-color");
let li = document.querySelectorAll(".list");
li.forEach(function(e){
    e.addEventListener("click",function(){
        // console.log(e.getAttribute("data-value"));
        // console.log(targetColor.getAttribute("href"));

        let dataValue = e.getAttribute("data-value");
        targetColor.setAttribute("href",`${dataValue}`);

    })
});
// for(i=1; i<=li.length; i++){
//     console.log(li[i].getAttribute("data-value"));
// }

/*Start scroll top*/
let scrollBtn = document.getElementById("scroll-top");
window.addEventListener("scroll",function(){
    scrollBtn.style.cssText = "opacity:1;"
})
scrollBtn.addEventListener("click", function(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
})
/*End scroll top*/

/*test  */
let  tes = document.querySelector(".features");


// window.onscroll = function(){
//     let sub = document.querySelector(".subscribe");
//     let Bo = sub.getBoundingClientRect().top;
//     let sc = window.scrollY;
// }

/* control active*/
let links = document.querySelectorAll(".link");
links.forEach(function(e){
    e.addEventListener("click",function(el){
        console.log(el.target)
        e.classList.remove("active");
        el.pare
    })
})


