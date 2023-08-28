//Destructuring
//Array Destructuring
//oject desttrcturing

//Array Destruturig

//syntax
//const [variable1,variable2,variable3]=array;
const number1=[1,2,3,4,5];
const[first1,second1,third1]=number1;
console.log(first1,second1,third1);

//Rest operator ...ValueName

const number2=[1,2,3,4,5];
const[first2,second2,third2,...restpara]=number2;
console.log(first2,second2,third2,restpara);

//oject desttrcturing
const person={
    firstName:"vimal",
    lastName:"nath",
    age:30,
    address:{
        street:"keelapettai",
        city:"mannargudi",
        country:"India"
    }
}
const {firstName, lastName,address:{city}}=person;
console.log(firstName); 
console.log(lastName);
console.log(city);