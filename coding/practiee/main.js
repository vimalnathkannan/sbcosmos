const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
    // console.log(num);
  counts[num] = counts[num] ? counts[num] + 1 : 1;
  console.log(counts[num]);
}

console.log(counts);
console.log(counts[5], counts[2], counts[9], counts[4]);


let age=24;
let type=age>18 ? "Adult Ticket":"child ticket"
console.log(type);

function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(4);


function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}


const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

for(let i = 1; i <= 10; i++)
{
    console.log(i);
}

/////////////////////////////
// print number from 1 t0 10
for(i=1; i<=10; i++){
    console.log(i);
}


let r=20;
console.log(r*1.8+32);

let r1=68;
console.log(r1-32/1.8);

let vim=[2,8,3,4,6];
let sum1=0;
for(i=0; i<vim.length; i++)
{
    sum1=sum1+vim[i];
}
console.log(sum1);

let vimal=[2,8,4,6,9];
let sum2=0;
let sum3=vimal.length;
for(i=0; i<sum3; i++)
{
    sum2=sum2+vimal[i];
}
console.log(sum2/sum3);

let vimal1=[5,6,-7,9,-10];
let ar2=[];
for(i=0; i<vimal1.length; i++)
{
    let el=vimal1[i]
    if(el>=0)
    {
        ar2.push(el)
    }
}
console.log(ar2);

let ar1=[20,60,90,120];
let max=ar1[0];
for(i=0; i<ar1.length; i++)
{
    if(ar1[i]>max)
    {
        max=ar1[i];
    }
}
console.log(max);

let f0=0;
let f1=1;
for(i=0; i<10; i++)
{
    let fi=f1+f0;
    f0=f1;
    f1=fi;
    console.log(fi);
}


var sum=1235231;
let s=sum.toString();
let sum12=0;
for(let char of s)
{   
    let digit=parseInt(char);
    sum12=sum12+digit;
}
console.log(sum12);


function sumDigits(n)
{
 let s = n.toString();
 let sum = 0;
 
 for(let char of s)
 {
 let digit = parseInt(char);
 sum += digit;
 }
 
 return sum;
}
let sum = sumDigits(1235231);
console.log("Sum: ", sum);

let arrr=[1,2,3];
let first=arrr.shift();
arrr.push(first);
console.log(first);


let ar = [1, 2, 3];
rotateLeft(ar);
function rotateLeft(ar)
{
 let first = ar.shift();
 ar.push(first);
}
console.log(ar);

let arrrr=[1,2,3];
arrrr.push(arrrr.shift());
console.log(arrrr);

let ar5=[1,2,3];
ar5.unshift(ar5.pop());
console.log(ar5);

let ar6=[1,2,3];
let ar7=[];
for(i=ar6.length-1; i>=0; i--)
{
    ar7.push(ar6[i]);
}
console.log(ar7);


let s1="vimal";
let s2="";
for(i=s1.length-1; i>=0; i--)
{
    s2=s2+s1[i];
}
console.log(s2);

var aar=[1,2,3];
var aat=[4,5,6];
var aay=[];
for(let el of aar)
{
    aay.push(el);
}
for(let el of aat)
{
    aay.push(el);
}
console.log(aay);

var aar=[1,2,3,10,5,3,14];
var aat=[1,4,5,6,14]
var aay=[];
for(let el of aar)
{
    if(!aat.includes(el))
    {
        aay.push(el);
    }
}
for(let el of aat)
{
    if(!aar.includes(el))
    {
        aay.push(el);
    }
}
console.log(aay);


for(i=1; i<=10; i++)
{
    console.log(i);
}

for(i=1; i<=100; i++)
{
    i=i+1;
    console.log(i);
}

for(i=1; i<=10; i++)
{
    console.log(7*i);
}

for(i=1; i<=10; i++)
{
    for(j=1; j<=10; j++)
    {
        console.log(i*j);
    }
}

var sem=0;
for(i=1; i<=10; i++)
{
    sem=sem+i;
}
console.log(sem);

var sem=1;
for(i=1; i<=10; i++)
{
    sem=sem*i;
}
console.log(sem);

var sem=0;
for(i=11; i<=30; i=i+2)
{
    sem=sem+i;
}
console.log(sem);

var n=20;
console.log(n*1.8+32);

var n=68;
console.log((n-32)/1.8);

var a=[1,3,8,-9,4,5];
var sem=0;
for(i=0; i<a.length; i++)
{
    sem=sem+a[i]
}
console.log(sem);

var a=[1,3,8,-9,4,5];
var b=a.length;
var sem=0;
for(i=0; i<b; i++)
{
    sem=sem+a[i];
}
console.log(sem/b);

var a=[2,5,-8,3,-7,6,4];
var sem=[];
for(i=0; i<a.length; i++)
{
    if(a[i]>0)
    {
        sem.push(a[i])
    }
}
console.log(sem);

var a=[10,50,60,78,95,80];
var maxi=a[0];
for(i=0; i<a.length; i++)
{
    if(a[i]>maxi)
    {
        maxi=a[i];
    }
}
console.log(maxi);

var a=[10,80,120,54,160];
var maxi=[];
for(i=0; i<a.length; i++)
{
    if(a[i]>maxi)
    {
        maxi=a[i];
    }
}
console.log(maxi);

var fs1=0;
var fs2=1;
for(i=2; i<10; i++)
{
    let fs=fs2+fs1;
    fs1=fs2;
    fs2=fs;
    console.log(fs);
}

var sem=1235231;
var ss1=sem.toString();
var semi=0;
for(let char of ss1)
{
    semi=semi+parseInt(char);
}
console.log(semi);

var sem=1235231;
var ss1=sem.toString();
var semi=0;
for(let char of ss1)
{
    semi=semi+parseInt(char);
}
console.log(semi);

var a=[1,2,3];
a.push(a.shift());
console.log(a);

var a=[1,2,3];
a.unshift(a.pop());
console.log(a);

var a=[1,2,3];
var b=[];
for(i=a.length-1; i>=0; i--)
{
    b.push(a[i])
}
console.log(b);

var a="vimal";
var b="";
for(i=a.length-1; i>=0; i--)
{
    b=b+a[i];
}
console.log(b);

var a=[1,2,3];
var b=[4,5,6];

var c=[];
for(let el of a)
{
    c.push(el);
}
for(let el of b)
{
    c.push(el)
}
console.log(c);

var a=[1,2,3,5,7,9,6,14,54];
var b=[1,4,3,7,9];
var c=[];
for( let el of a)
{
    if(!b.includes(el))
    {
        c.push(el);
    }
}
for(let el of b)
{
    if(!a.includes(el))
    {
        c.push(el);
    }
}
console.log(c);

var a=[1,2,3,10,5,3,14];
var b=[-1,4,5,6,14];
var c=[];
for(let el of a)
{
    if(!b.includes(el))
    {
        c.push(el);
    }
}
console.log(c);


var a="1.5,2.3,3.1,4,5.5";
var b=a.split(",");
var c=0;
for(let n of b)
{
    c=c+parseFloat(n)
}
console.log(c);


var a=[1,2,3,5,6,10,14];
var b=[4,5,6,15,20];
var c=[];
for(let el of a)
{
    if(!b.includes(el))
    {
        c.push(el);
    }
}
for(let el of b)
{   
    if(!a.includes(el))
    {
        c.push(el);
    }
}
console.log(c);

var a=[1,2,3,4,15,16,20];
var b=[1,3,4,16];
var c=[];
for(let el of a)
{
    if(!b.includes(el))
    {
        c.push(el)
    }
}
console.log(c);

var a="1.2,3.4,4,4.0,6.1";
var b=a.split();
var c="";
for(let el of b)
{
    c=c+parseFloat(el);
}
console.log(c);


function isprime(n)  {
  if(n<2)
    return `${n} is not a prime`;
    for(i=2; i<n; i++)
    {
        if(n%i===0)
        {
        return `${n} is not a prime`;
        }
    } 
    return `${n} is a prime`;
}
console.log(isprime(7));

function printprime(nprime)
{
    var n=0;
    var i=2;
    while (n<nprime)
    {
        if(isprime(i))
        {
            console.log(n,"-->",i);
            n++;
        }
        i++;
    }
}
function isprime(n)
{
    if(n<2)
    return false;
    if(n==2)
    return true;
    let maxdiv=math.sqrt(n);
    for(i=2; i<=maxdiv; i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}

var a="1235231";
// var b=a.toString();
var c=0;
for(let el of a)
{
    let d=parseInt(el);
    console.log(d);
    c=c+d;
}
console.log(c);



function getChars(s)
{
 return Array.from(s);
}
console.log(getChars("I like JavaScript"));

var a="vimalnath";
var b=[];
for(i=0; i<a.length; i++)
{
    b.push(a.charCodeAt(i));
}
console.log(b);

var a="vimalanth";
var b=[];
for(i=0; i<a.length; i++)
{
    b.push(Array.from(a));
}
console.log(b);

var array1=[1,2,3];
var array2=[4,5,6];
var array3=[...array1,...array2];
console.log(array3);


var nums=[2,7,11,15];
var target=9;
function twosum(nums,target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]==target){
                return nums[i,j];
            }
        }
    }
}
console.log(twosum(nums,target));


function car(){
    var model="roadster";
    function displaymodel(){
        console.log(model);
    }
    return displaymodel;
}
var choosecar = car();
choosecar();