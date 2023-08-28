// for in loop
const persons={name:"vimal",age:24};
for(let key in persons){
    console.log(key+":"+persons[key]);
}


const data=["vimal","deepi","vinoth"];
for(index of data)
{
    console.log(index);
}

// //dot notation
// persons.name
// //bracket notation
// persons['name']