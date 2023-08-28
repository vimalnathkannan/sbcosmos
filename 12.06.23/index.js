// function count(){
//     for(i=10;i>=1;i--)
//     console.log(i)
// }
// count();

// var a=10;
// function number(a){
//     let sum=0;

//  for(let i=1;i<=a;i++){
//   sum +=i;
//  }
//  return sum;
// }
// var rlt=number(a);
// console.log(rlt);

// var fname = 'vimal';
function reverseString(str) {
    var reversedString = '';

    for (var i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  var reversedString = reverseString('vimal');
  console.log(reversedString);
  
//   var a=['v','i','m','a','l'];
//   a.reverse();
//   console.log(a);

var a="vimal,nath,node";
var b=a.split(",").reverse().join(",");
console.log(b);

// var srt=[5,10,70,60,1];
// srt.sort();
// console.log(srt); 

let text = "";
let i = 10;
while (i >= 1) {
  text +=i;
  i--;
}
console.log(text);


var numbers = 10;
var sum = 0;
var i = 1;
while (i <= numbers) {
  sum += i;
  i++;
}
console.log(sum);


var i = 0;
While(i<5)
{
  Console.log(i);
  i++;
}



var arr=[4,2,5];
var len=arr.length;
for(i=1; i<len; i++){
  for(j=0; j<i; j++){
    console.log(i,j);
    if(arr[i]<arr[j])
    {
      let temp=arr[i];   2
      arr[i]=arr[j]; arr[1]=4
      arr[j]=temp;  arr[0]=2
    }
  }
}
console.log(arr);

var arr=[
  {id:103, name:'vimal', age:24},
  {id:102, name:'karun', age:26},
  {id:104, name:'mani', age:22}
];
var len=arr.length;
for(i=0; i<len; i++){
  for(j=i+1; j<len; j++){
    if(arr[i].id>arr[j].id)
    {
      let temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}
console.log(arr);

//factorial
var n=5;
var sum=1;
for(i=1;i<=n;i++){   
  sum =sum*i;
}
console.log(sum); 

//loop
let num=10;
for(i=0;i<=num;i++){
  if(i%2 !== 0)
  {
    console.log(i);
  }

}

var arr=[4,3,2];
for(i=0; i<arr.length; i++){
  for(j=i+1; j<arr.length; j++){
    if(arr[i]>arr[j])
    {
      let temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}
console.log(arr);


let arr=[7,2,3];
var  i=0;
while(i<arr.length){
  let j=i+1;
  while(j<arr.length){
    if(arr[i]>arr[j])
    {
     let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    }
    j++;
  }
   i++;
}
console.log(arr);

let arr=[
  {id:2, name:'vimal', age:24},
  {id:4, name:'karun', age:25},
  {id:6, name:'mani', age:22}
];

let i=0;
while(i<arr.length){
  let j=i+1;
  while(j<arr.length){
    if(arr[i].id>arr[j].id)
    {
      let temp=a[i];
      a[i]=a[j];
      a[j]=temp;
    }
    j++
  }
  i++;
}
console.log(arr);


var str="mam";
for(i=0; i<str.length/2; i++){
  if(str[i] !== str [str.length-1-i])
  {
    console.log("false");
    break;
  }
  console.log("true");
  break;
}



function reverseString(str) {
  var reversedString = '';

  for (var i = str.length - 1; i >= 0; i--) {
    // reversedString += str[i];
    if(str[i] !== str [str.length-1-i])
    {
      return false;
    }
  }
  return true;
}
var reversedString = reverseString('madam');
console.log(reversedString);

var str="vimal";
for(i=str.length-1; i>=0; i--)
{
  console.log(i);
}

let n="153";
let sum=0;
let temp=n;
// console.log(temp)
while(temp>0){
  let r=temp%10;
  sum =sum+r*r*r;
  temp=parseInt(temp/10); 
}
if(sum==n)
{
  console.log("true");
  // console.log(n);
}
else
{
console.log("false");
}


var obj = {
  name:  "vivek",
  age:23,
  getName: function(){
  console.log(this.name);
  console.log(this.age);
}

   getage:function(){
    console.log(this.name);
   }
}
obj.getName();
obj.getage();