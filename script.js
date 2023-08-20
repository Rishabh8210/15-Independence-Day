
const Unfrul = document.querySelector("#Unfrul");
const reUnfrul = document.querySelector("#reUnfrul");
const tricolor = document.querySelector('.tricolor');
const computedStyle = window.getComputedStyle(tricolor)
const leftValue = parseInt(computedStyle.getPropertyValue("left"));

let flag = false;

Unfrul.addEventListener("click", function(){
    flag = true;
    gsap.to(".tricolor", {
        x : -1*leftValue,
        delay:1,
        duration:3,
    })
})

reUnfrul.addEventListener("click", function(){
    if(flag == true)
    {
        gsap.to(".tricolor", {
            x : leftValue,
            delay:1,
            duration:3,
        })
    }
    flag = false;
})
