function changeText(){
    let textElement=document.getElementById("myText");
    textElement.innerHTML="vimalnathkannan";
    alert("Changed name");
}


var  mydiv=document.getElementById("mydiv");
mydiv.style.backgroundColor="red";

var mybutton=document.getElementById("mybutton");
mybutton.addEventListener("click",function(){
    alert("clicked me");
});

var mybutton=document.getElementById("mybtn");
mybutton.addEventListener("click",function(){
    var data=document.getElementById("myinput");
    alert(data.value);
});

function myfuction(){
    var mycheckbox=document.getElementById("mycheckbox");
    if(mycheckbox.checked){
        alert("checked");
    }else{
        alert("not checked");
    }
}

function myevent(){
  let changeText=document.getElementById("myid");
   changeText.style.backgroundColor="yellow";
   changeText.style.color="green";
   alert("your color is changed");
}

let changecolor=document.getElementById("mychange");
changecolor.style.backgroundColor="black";

let order=document.getElementById("mybtn1");
order.addEventListener("click",function(){
    alert("your order is placed");
});

// let pname=document.getElementById("mybtn2");
// pname.addEventListener("click",function(){
//     let data=document.getElementById("myipt");
//     alert(data.value);
// });

let pname=document.getElementById("mybtn2").addEventListener('click',()=>{
    let data=document.getElementById("myipt")
    alert(data.value);
})


