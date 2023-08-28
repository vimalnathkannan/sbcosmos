// let body=document.body;
// // body.append("dom manipulation");
// body.innerHTML="<h1>dom manipulation</h1>";

// divelement=document.createElement("div");
// // divelement.innertext="vimalnath";
// // divelement.textcontent="document object module";
// divelement.innerHTML="<h1>document object module</h1>";
// body.append(divelement)

// let divelement=document.querySelector("div");
// console.log(divelement.innerText);
// console.log(divelement.textContent);

// let body=document.body;
// let divelement=document.createElement("div");
// let h1element=document.createElement("h1");
// h1element.innerText="welcome to javascript";
// divelement.append(h1element);
// body.append(divelement);

// let divelement=document.querySelector("div");
// let fname=document.querySelector("#fname");
// let lname=document.querySelector("#lname");

// console.log(fname);

// console.log(lname);

// fname.remove();

// lname.remove();

// divelement.append(fname);
// divelement.append(lname);

// console.log(fname.getAttribute("value"));
// console.log(lname.getAttribute("value"));

// fname.setAttribute("id","fisrtname");
// lname.setAttribute("id","lastname");

// fname.removeAttribute("value");
// lname.removeAttribute("value");

// let myname=document.querySelector("#myname");
// myname.classList.add("myclass");
// myname.classList.remove("myclass");
// myname.classList.toggle("myclass",false);
// myname.classList.toggle("class-1",false);

// let name=document.querySelector("#name");
// name.style.color="white";
// name.style.backgroundColor="black";


//function expression
let table=function(t,n){
    for(i=1;i<=n;i++){
        console.log(i,"*",t,"=",(i*t));
    }
}
table(5,10);

let n=[1,2,3,4,5];
console.log(n);
n.push(20);
console.log(n);
var count=n.push(30)
console.log(count);

var productinfo=[
    {pid:101,pname:"mobile",price:15000},
    {pid:102,pname:"iphone",price:80000},
    {pid:103,pname:"laptop",price:50000},
    {pid:104,pname:"ipad",price:25000},
];
// var result=productinfo.find(info=>{
//     return info.price>=20000;
// })
// console.log(result);

var result=productinfo.findIndex(info=>{
    return info.price>=20000;
})
console.log(result);

var result=productinfo.findlast(info=>{
    return info.price>=20000;
})
console.log(result);

var card1=["hero","honda","yamaha","Tvs"];
var card2=["xpulse","unicorn","R15","apache"];
var data=card1.concat(card2);
console.log(data);

var card1=[1,2,3,4,5];
var card2=["mannargudi","thanjavur","tirchy"];
var data=card1.concat(card2);
console.log(data);

var card1=[[1,2,3,4,5],["bottle","pen","pencil"]];
var card2=["bag","key"];
var data=card1.concat(card2);
data[0].push(7);
data[1].push("vimal");
console.log(data);

var obj1=[
    {pid:101,pname:"samsung",price:25000},
    {pid:102,pname:"vivo",price:30000}
];
var obj2=[
    {pid:103,pname:"realme",price:20000},
    {pid:104,pname:"moto",price:15000},
];

var data=obj1.concat(obj2);
console.log(data);


function printvalue(){
    var name=document.form1.name.value;
    var phone=document.form1.number.value
    alert("welcome: "+ name);
    alert("welcome: "+ phone);
}

function getcube(){
    var number=document.getElementById("number").value;
    alert(number*number*number);
}


  

