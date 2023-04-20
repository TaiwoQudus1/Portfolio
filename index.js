$(document).ready(function(){
    let button=$(".fa-bars")
    let nav=$("#first-part")
    let clear=$(".fa-times")
    let active=$("active")

    clear.on("click",()=>{
        nav.animate({
            
    "left":"-100%",
    "height": "auto",
    "z-index": 3,
    "transition": "all 0.5s ease-in-out"
        })
    })

    button.on("click",()=>{
        nav.animate({      
    "left":0,
    "width":"100%",
    "z-index": 3
        })
    })
})