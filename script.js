var article=document.querySelectorAll('.artical');


article.forEach(function(outer) {

    // console.log(din)
    const btn=outer.querySelector(".btn")
    btn.addEventListener("click",function(){
        article.forEach(function(inner){
            if(inner !==outer){
                inner.classList.remove("show-text")
            }

        })
   
        outer.classList.toggle("show-text")
    })

    
})