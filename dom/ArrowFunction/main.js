/*1.default function.
2.Anonymous function.
3.Arrow function.*/

function myfun(){
    console.log("This is javascript arrow function");
}
myfun();

function myname(Name){
    console.log("Hello: "+Name);
}
myname("vimalnath");


var myfun=function(){
    console.log("This is anonymous function");
}
myfun();

var myfun=function(Name){
    console.log("Hello: "+Name);
}
myfun("deepikavimalnath");

var myfun=(Name1,Name2)=>Name1 +" love "+Name2;
console.log(myfun("Vimal","Deepi"));

var myfun=Name=>({myname:Name});
console.log(myfun("VimalNath"));

var myfun=(Name,Address)=>{
    var data={myname:Name,myAddress:Address};
    console.log(data.myname,data.myAddress);
}
myfun("DeepikaVimalNath","Mannargudi");