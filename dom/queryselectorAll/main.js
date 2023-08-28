setTimeout(()=>{
    let elements=document.querySelectorAll(".myclass")
    elements.forEach((element)=>{
        element.style.color="green";
    })
},3000);

// elements[0].style.color="red";
// elements[1].style.color="red";
 var samsung=document.querySelectorAll("#samsung");
 samsung.forEach((data)=>{
    console.log(data.innerText);
 });

 var iphone=document.querySelectorAll("#iphone");
 iphone.forEach((data)=>{
 console.log(data.innerText);
 });

 var buttons=document.querySelectorAll("button")
 buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert(button.value +" clicked")
    });
 });


let vivo=document.querySelectorAll("#vivo");
 vivo.forEach((btn)=>{
    console.log(btn.innerText);
 });

 let realme=document.querySelectorAll("#realme");
 realme.forEach((data)=>{
    console.log(data.innerText);
 })
 
 let submited=document.querySelectorAll("button")
 submited.forEach((button1)=>{
    button1.addEventListener("click",()=>{
        alert(button1.value+"clicked");
    });
 });

 
 