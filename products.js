var button= document.querySelectorAll('#addtocart')
for(var but of button){
    but.addEventListener('click',function(){
        alert("Product Added")
    })
}

function timer(){
    var hours=23
    var min=59
    var sec=60
    setInterval(function(){
        if(min==0&&sec==1&&hours==0){
            document.getElementById('timer').innerHTML=0
        }else{
            sec--
            if(sec==0){
                min--
                sec=59
            }
            if(min==0){
                hours--
                min=59
                sec=59
            }
            document.getElementById('timer').innerHTML=hours+"h"+" "+min+"m"+" "+sec+"s"
        }
    },1000)
}