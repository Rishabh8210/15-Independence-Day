
const Unfrul = document.querySelector("#Unfrul");
const reUnfrul = document.querySelector("#reUnfrul");
let flag = false;

Unfrul.addEventListener("click", function(){
    flag = true;
    gsap.to(".tricolor", {
        x : 356,
        delay:1,
        duration:3,
    })
})

reUnfrul.addEventListener("click", function(){
    if(flag == true)
    {
        gsap.to(".tricolor", {
            x : -356,
            delay:1,
            duration:3,
        })
    }
    flag = false;
})
