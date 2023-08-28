const arr=[1,2,3,4,5];
console.log(arr);
arr.map((item)=>{
    console.log(item*2);
})
///////////////////////////////
const user=[
    {
        name:"vimal",
        contact:8236789456,
    },
    {
        name:"deepi",
        contact:9897949596,
    },
    {
        name:"vinoth",
        contact:564897243,
    },
];
user.map((item)=>{
    console.log(item);
    console.log(item.name);
    console.log(item.contact);
})
///////////////////////////////////////////
//filter()

const user1=[
    {
        name:"vimal",
        contact:8796545465,
    },
    {
        name:"deepi",
        contact:7859633251,
    },
    {
        name:"vinoth",
        contact:523648215,
    },
    {
        name:"vimal",
        contact:8796545465,
    },
];
const filteruser=user1.filter((user1)=>{
    return user1.name !=="vimal";
});
console.log(filteruser);

////////////////////////////////////////////////
//reduce()
const arr1=[1,2,3,4,5];
let initialvalue=0;
const sum=arr1.reduce((previousvalue,currentvalue)=>{
    return previousvalue+currentvalue;
},initialvalue);
console.log(sum);
/////////////////////////////////

var a="  vimal   ";
console.log("name of:"+a.trim());

///////////////////////////////////
var a="vimalnathkannan";
b=a.split("");
console.log("splite the name of:"+b);
///////////////////////
var a="vimalnath";
// b=a.toUpperCase();
console.log("The UpperValue is:"+a.toUpperCase());
console.log("The lowervalye is:"+a.toLowerCase());
///////////////////////////////////////////
var pets=['cat','dog','bat'];
console.log(pets.includes('cat'));


const player=[
    {
        name:"vimalnath", age:24,
        teams:["Frondend","chennai"]
    },
    {
        name:"karun", age:25,
        teams:["AWS","Bangalore"]
    },
    {
        name:"deepi", age:23,
        teams:["cybersecurity","saidapet"]
    },
    {
        name:"yogesh", age:22,
        teams:["DotNet","Taramni"]
    }
];
console.table(player.filter(player=>player.age > 30));
console.table(player.filter(p=>p.teams.includes("chennai")));


