let promise = new Promise(function(resolve,reject){
    resolve("payment is successfull");
    reject("your payment is failed");
});
promise.then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log(err);
})

///////////////////////////////////////////////////////////////
let dev=true;
let promises=new Promise(function(resolve,reject){
    if(dev){
        resolve("your payment is received");
    }
    else{
        reject("Your payment is declined")
    }
});

const getdata=async()=>{
    try{
        const data=await promises;
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
};
getdata();



//promises in youtube example/////////////////////////////////////////
function cookFood(){
    return new promise((resolve)=>{
        setTimeout(()=>{
            console.log("Food is cooked!!");
            resolve();
        },3000);
    })
}
async function prepareMeal(){
   try{
    console.log("salt is added");
    console.log("Food is still cokking..");
    await cookFood();
    console.log("Enjoy your Meal!!");
   } 
   catch{
     console.log("Something went wrong");
   }
}
prepareMeal();