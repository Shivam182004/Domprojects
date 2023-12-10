let love = document.querySelector("#main")
let icon =document.querySelector("#main i")

love.addEventListener('dblclick', function(){
    icon.style.transform = "scale(1)";
    icon.style.opacity=0.8
    setTimeout(function(){
        icon.style.opacity=0
    },1000)
    setTimeout(function(){
        icon.style.transform = "scale(0)";
        icon.style.opacity=0.8
    },2000)

})
