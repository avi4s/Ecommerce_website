// var imageclick= document.querySelector('.imageclick')
// imageclick.addEventListener('click',function(){
//   var len=  document.querySelectorAll('.imageclick').length
//   for(i=0;i<len;i++){
//     window.location.href='offer.html'
//   }
// })

document.querySelector('.image1').addEventListener('click', function () {
    window.location.href = 'offer.html'
})
document.querySelector('.image2').addEventListener('click', function () {
    window.location.href = 'comingsoon.html'
})
document.querySelector('.image3').addEventListener('click', function () {
    window.location.href = 'comingsoon.html'
})
document.querySelector('.image4').addEventListener('click', function () {
    window.location.href = 'comingsoon.html'
})

// var home = document.querySelector('.home')
// home.addEventListener('mouseover', (event) => {
//     event.target.style.color = 'red'
//     home.addEventListener('mouseleave', (event) => {
//         event.target.style.color = 'white'

//     })
// })
function homehover(){
    var home= document.querySelector('.home')
 home.style.color='red'
 }
 function homeleave(){
     var home= document.querySelector('.home')
  home.style.color='white'
  }
function producthover(){
   var product= document.querySelector('.product')
product.style.color='red'
}
function productleave(){
    var product= document.querySelector('.product')
 product.style.color='white'
 }
 function dailydealshover(){
    var dailydeals= document.querySelector('.dailydeals')
 dailydeals.style.color='red'
 }
 function dailydealsleave(){
     var dailydeals= document.querySelector('.dailydeals')
  dailydeals.style.color='white'
  }

  document.querySelector('.offers').addEventListener('mouseover',function(){
    document.querySelector('.offers').style.backgroundColor='red'
})
document.querySelector('.offers').addEventListener('mouseleave',function(){
    document.querySelector('.offers').style.backgroundColor=''
})

document.querySelector('.newlaunch').addEventListener('mouseover',function(){
    document.querySelector('.newlaunch').style.backgroundColor='red'
})
document.querySelector('.newlaunch').addEventListener('mouseleave',function(){
    document.querySelector('.newlaunch').style.backgroundColor=''
})


var button= document.querySelectorAll('#addtocart')
for(var but of button){
    but.addEventListener('click',function(){
        alert("Product Added")
    })
}
document.getElementById('addtocart').addEventListener('click',function(){
    alert("Product Added")
})





function loginvalid(){
var inp1= document.getElementById('inp1')
if(inp1==" "){
    document.getElementById('warning1').innerHTML='please enter name'
    return false
}
}

document.querySelector('#del').addEventListener('click',function(){
    document.querySelector('#del').style.color='red'
})

function continueshop(){
    window.location.href='index.html'
}
// function validation(){
//     var firstname= document.getElementById('firstname').value
//     if(firstname==""){
//         document.getElementById('error1').innerHTML='Please Enter name'
//         document.getElementById('error1').style.display='block'
//         // alert('f')
//     }
//     return true
// }

function validation(){
    var firstname= document.getElementById('firstname').value
    var lastname= document.getElementById('lastname').value
    var enteremail= document.getElementById('enteremail').value
    var enterpassword= document.getElementById('enterpassword').value
    if(firstname==""){
        document.getElementById('error1').innerHTML='Please Enter name'
        document.getElementById('error1').style.display='block'
        return false 
    }
    document.getElementById('error1').innerHTML=''
    if(lastname==""){
        document.getElementById('error2').innerHTML='Please Enter last name'
        document.getElementById('error2').style.display='block'
        return false
    }
    document.getElementById('error2').innerHTML=''
    if(enteremail==""){
        document.getElementById('error3').innerHTML='Please Enter email'
        document.getElementById('error3').style.display='block'
        return false
    }
    document.getElementById('error3').innerHTML=''
    if(enterpassword==""){
        document.getElementById('error4').innerHTML='Please Enter password'
        document.getElementById('error4').style.display='block'
        return false
    }
    document.getElementById('error4').innerHTML=''

    return true
}
 