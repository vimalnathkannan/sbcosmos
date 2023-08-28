    function userinput(callback){
        const data=prompt("Enter your Name:");
        callback(data);
     }
     function display(data){
        // alert(`Name:${data}`);
        document.write("<h2>Name &#8594 "+data+"</h2>");
     }
     userinput(display); 



    function sum(val1,val2,callback){
        let out=val1+val2;
        callback(out);
     }
     function dis(out){
        document.write("<h2> sum &#8594 "+ out +"</h2>");
     }
     sum(23,30,dis);
     
     function int(val1,val2,callback)
     {
      let inpt=val1+val2;
      callback(inpt);
     }
     function displayed(inpt)
     {
      document.write("<h2> equal &#8594 " + inpt +"</h2>")
     }
     displayed(50,20,int)



     function doSomething(vimal) {
      // Perform some operations or tasks
      console.log("vimal");
      // Invoke the callback function
      vimal();
    }
    
    function callbackFunction() {
      console.log("Callback function is executed.");
    }
    
    // Pass the callback function as an argument to doSomething()
    doSomething(callbackFunction);
    

    //callback example/////////////////////////////////////////////
    function cooking(callback){
      setTimeout(() => {
         console.log("Food is cooked");
      }, 3000);
      callback();
      console.log("Food is still cooking");
    }
    function addsalt(){
      console.log("Salt is added");
    }
    cooking(addsalt)

   /////////////////////////////////////////////////////////////////////////////////////////////
   let settime=setTimeout(() => {
      console.log("vimalnath");
    }, 5000);

   clearTimeout(settime,8000);

   let setinter=setInterval(() => {
      console.log("vimalnathkannan");
    }, 2000);
   clearInterval(setinter,8000);