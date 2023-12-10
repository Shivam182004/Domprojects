let btn = document.querySelector("#btn")
let text =document.querySelector("#box h4")
let check = 0

btn.addEventListener('click'  , function(){
    if(check==0){
        text.innerHTML = "Friends"
        text.style.color = "green"
        btn.textContent ="Unfollow"
        check=1 
    }else{
        text.innerHTML = "Stranger"
        text.style.color = "red"
        btn.innerHTML ="Follow"
        check =0
    }
})