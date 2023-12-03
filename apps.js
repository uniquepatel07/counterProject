let dec = document.querySelector(".decrease");
let res = document.querySelector(".reset");
let inc = document.querySelector(".increase");

let count = document.querySelector("h2");
let digit = Number(count);

document.addEventListener("mouseenter", function(){
    digit = 0;
})

inc.addEventListener("click", function(event){
    count.innerText = digit+=1;
});

document.addEventListener("keypress", function(event){
    if(event.key == "+"){
        count.innerText = digit+=1;
    }
})

dec.addEventListener("click", function(event){
    if(digit<=0){
        digit = 0;
    }else{
    count.innerText = digit-=1;
    }
})
document.addEventListener("keypress", function(event){
    if(event.key == "-"){
        if(digit<=0){
            digit = 0;
        }else{
        count.innerText = digit-=1;
        }


        
    }
})

res.addEventListener("click", function(event){
    digit = 0;
    count.innerText= digit;
})