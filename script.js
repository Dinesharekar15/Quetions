var button=document.querySelectorAll('.btn');
var article=document.querySelectorAll('.artical');


button.forEach(function(button,index) {
    button.addEventListener("click",function(){
        
        var articleClassList = article[index].classList;
        articleClassList.toggle('show-text');
        console.log(articleClassList);
        
        })
})