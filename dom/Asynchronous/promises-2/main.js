//////basic promises///////////////////////
let p = new Promise((resolve,reject)=>{
    let a=1+2;
    if(a==2){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
})
p.then((message)=>{
    console.log("This is in the then" +" "+ message)
}).catch((message)=>{
    console.log('This is in the catch' +" "+ message);
})

//////simple callback function/////////////////////////
const userLeft=false;
const userWatchingCatmeme=false;
function watchCallback(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:"vimal",
            message:"Hi this is siri"
        })
    }else if(userWatchingCatmeme){
        errorCallback({
            name:"User Watching Cat Meme",
            message:'Your selected for Web Series'
        })
    }else{
        callback('Like and Comments')
    }
}
watchCallback((message)=>{
    console.log('Success:'+message);
},(error)=>{
    console.log(error.name+' '+error.message);
})

//////////////promises////////////////////////////////////////
const userInput=false;
const userFunction=true;

function promiseCallback(){
    return new Promise((resolve,reject)=>{
        if(userInput){
            reject({
                name:"vimal",
                message:"Hi this is siri"
            })
        }else if(userFunction){
            reject({
                name:"User Watching Cat Meme",
                message:'Your selected for Web Series'
            })
        }else{
            resolve('Like and Comments')
        }
    })
}
promiseCallback().then((message)=>{
    console.log('success:' +message)
}).catch((error)=>{
    console.log(error.name +' '+error.message);
})

//////////////////////////////////////////////////////////
const recordVideoone = new Promise((resole,reject)=>{
    resole('video 1 Recorder')
})

const recordVideoTwo = new Promise((resole,reject)=>{
    resole('video 2 Recorder')
})
const recordVideoThree = new Promise((resole,reject)=>{
    resole('video 3 Recorder')
})
Promise.all([
    recordVideoone,
    recordVideoTwo,
    recordVideoThree
]).then((message)=>{
    console.log(message);
})
Promise.race([
    recordVideoone,
    recordVideoTwo,
    recordVideoThree
]).then((message)=>{
    console.log(message);
})
Promise.allSettled([
    recordVideoone,
    recordVideoTwo,
    recordVideoThree
]).then((message)=>{
    console.log(message);
})
