function myfunction(){
    alert("message-1");
}
function myfunction(){
    alert("message-2");
}

var elements=document.querySelector("#mybtn");
elements.addEventListener("click",()=>{
    alert("event-1");
});

elements.addEventListener("click",()=>{
    alert("event-2");
});

elements.addEventListener("click",()=>{
    alert("event-3");
});

var elements=document.querySelector("#btn");
elements.addEventListener("click",myevent1)
 function myevent1(){
    alert("myevent-1")
 }
 elements.addEventListener("click",myevent2)
 function myevent2(){
    alert("myevent-2")
 }
 elements.addEventListener("click",myevent3)
 function myevent3(){
    alert("myevent-3")
 }

 elements.removeEventListener("click",myevent1);;
 elements.removeEventListener("click",myevent2);