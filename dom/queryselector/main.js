function changetext(){
    var elements=document.querySelector("#myhead");
    elements.innerText="javascript coding challages";
}


function getinput(){
    var uname=document.querySelector("#uname");
    var email=document.querySelector("#email");

     var body=document.body;
     var rname=document.createElement("h3");
     var remail=document.createElement("h3");

     rname.innerText="username:"+uname.value;
     remail.innerText="emailid:"+email.value;

     body.append(rname);
     body.append(remail);

    // var output1=document.querySelector("#output-1");
    // var output2=document.querySelector("#output-2");
    // output1.innerText="username is :" +uname.value;
    // output2.innerText="emailid is :"+email.value;
}
