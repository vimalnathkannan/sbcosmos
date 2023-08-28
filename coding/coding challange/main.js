// print number from 1 t0 10
for(i=1; i<=10; i++){
    console.log(i);
}

//Print the odd numbers less than 100
for(let i=2; i<=100; i=i+2){
    console.log(i);
}

//Print the multiplication table with 7

for(let i=1; i<=10; i++){
    let row="7*"+i+"=" + 7*i;
    console.log(row);
}

//Print all the multiplication tables with numbers from 1 to 10
for(i=1; i<=10; i++){
    console.table(i)
    // console.log("10");

}
function consoletable(n){
    for(i=1; i<=10; i++){
            let row=n +"*"+i+"="+ n*i;
            console.log(row);
    }
}

/////////////////////////////
//Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(i);
    console.log(`Multiplication Table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i);
        // console.log(j);
      console.log(`${i} x ${j} = ${i * j}`);
    } 
    console.log('\n');
  }


////////////////////////////////////////////////////////////////
//Calculate the sum of numbers from 1 to 10
let sum=0;
for(i=1; i<=10; i++){
    sum=sum+i;
    console.log(sum);
}


/////////////////////////////////////////
//Calculate 10!
let prd=1;
for(i=1; i<=10; i++){
    prd =prd*i
}
console.log(prd);

///////////////////////////////////
//Calculate the sum of odd numbers greater than 10 and less than 30
let odd=0;
for(i=11; i<=30; i=i+2){
    console.log(i);
    odd=odd+i;
}
console.log(odd);

/////////////////////////////////
//: Create a function that will convert from Celsius to Fahrenheit
function Celsiustofahrenheit(n){
    return n* 1.8 + 32;
}
let r=Celsiustofahrenheit(20);
console.log(r);
///
let a=20;
let n=a*1.8 +32;
console.log(n);

///////////////////////////////////////////
//Create a function that will convert from Fahrenheit to Celsius
function Fahrenheittocelsius(n){
    return (n-32)/1.8;
}
let f=Fahrenheittocelsius(68);
console.log(f);
/////////////////////////////////////////////
//Calculate the sum of numbers in an array of numbers
function sumarray(arr){
    let sum=0;
    for(i=0; i<arr.lenght; i++){
        sum=sum+arr[i];
    }
    return sum;
}
let arr=[4,2,3,1,16,12];
console.log(sumarray(arr));



/////////////////////////////////////////////////////
//Calculate the average of the  numbers in an array of numbers

function averagearr(array){
    let n=array.lenght;
    let sum=0;
    for(i=0; i<n; i++)
    {
        sum=sum+array[i];
    }
    return sum/n;
}
let array=[1,4,6,7,29];
let avg=averagearr(array);
console.log(avg);

/////////////////////////////////////////////////
//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getpositive(ar){
    let arr1=[];

    for(i=0; i<ar.lenght; i++)
    {
        let el=ar[i];
        if(el>=0)
        {
            arr1.push(el);
        }
    }
    return arr1;
}
let ar=[10,2,-8,6,-1,6];
let ars=getpositive(ar);
console.log(ars);

// method-2
function getpositive2(ar1){
    let arr2=[];
    for(let el of ar1)
    {
        if(el >= 0)
        {
            arr2.push(el)
        }
    }
    return arr2;
}
let ar1=[10,-4,8,-3,5];
let getps=getpositive2(ar1);
console.log(getps);

///////////////////////////////////
//Find the maximum number in an array of numbers

function findmax(ar2){
    let max=ar2[0];
    for(i=0; i<ar2.lenght; i++){

        if(ar2[i] > max)
        {
            max=ar2[i]
        }
    }
    return max;
}
let ar2=[2,-5,6,-9,10];
let gts=findmax(ar2);
console.log(gts);
/////////////////////////////////////////////////////////

function findMax(arr2)
{
    let max=arr2[0];

 for(let i = 0; i < arr2.length; i++)
 {
    // console.log(i);
 if (arr2[i] > max)
 {
max = arr2[i];
 console.log(max);
 }
 }
 
 return max;
}
let arr2 = [5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(arr2);
console.log("Max: ", max);

/////////////////////

let f1=0;
let f2=1;
for(i=1; i<10; i++){
    let fi=f2+f1;
    console.log(fi);

    f1=f2;
    f2=fi;
}



for(i=1; i<=10; i++)
{   
    i=i+1;
    console.log(i);
}

let arr4=["v","i","m","a","l"];
let sum4="";
for(i=0; i<arr4.length; i++)
{
    sum4=sum4+arr4[i];
}
console.log(sum4);

let arr5=[5,-6,3,7,9];
 let n1=arr5.length;
 let sum5=0;
for(i=0; i<n1; i++)
{
    sum5=sum5+n1[i];
}
console.log(sum5/n1); 

let arr6=[5,-3,-8,10,54];
let arr7=[];
for(i=0; i<arr6.length; i++)
{
    let el=arr6[i]   ;
    if(el>=0)
    {
        arr7.push(el);
    }
}
console.log(arr7);

let ar4=[7,80,-3,6];
let max1=ar4[0];
for(i=0; i<ar4.length; i++)
{
    if(ar4[i]>max1)
    {
        max1=ar4[i]
    }
}
console.log(max1);

let fa=0;
let fb=1;
for(i=1; i<10; i++)
{
    let fc=fb+fa;
    fa=fb;
    fb=fc;
    console.log(fc);    
}

