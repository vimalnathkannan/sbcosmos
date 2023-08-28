var btnsubmit=document.querySelector("#btnsubmit");
var btnclear=document.querySelector("#btnclear");

btnsubmit.addEventListener("click",()=>{
    var uname=document.querySelector("#uname").value;
    var address=document.querySelector("#address").value;
    
    var body=document.body;
    var runame=document.createElement("h3");
    var raddress=document.createElement("h3");

    runame.innerHTML="UserName: "+uname;
    raddress.innerHTML="Address: "+address;

    body.append(runame,raddress);
    // var result1=document.querySelector("#result1");
    // var result2=document.querySelector("#result2");
    // result1.innerHTML="UserName: "+uname;
    // result2.innerHTML="Address: "+address;

});

btnclear.addEventListener("click",function(){
    document.querySelector("uname").value="";
    document.querySelector("address").value="";
    document.querySelectorAll("h3").forEach((elements)=>{
       elements.remove();
    });
});

var btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    alert("hi hema");
});


console.log("hello world!");