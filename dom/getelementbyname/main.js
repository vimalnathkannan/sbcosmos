function mygender(){
var gender=document.getElementsByName("gender");
count=0;
gender.forEach((gen)=>{
    if(gen.checked){
        alert(gen.value);
        count=1;
    }
});
    if(count==0){
        alert("please select anyone..")
    }
}


function mymobile(){
    var mobile=document.getElementsByName("mobile");
    count=0;
    mobile.forEach((mobile)=>{
        if(mobile.checked)
        {
            alert(mobile.value);
            count=1;
        }    
    });
    if(count==0){
        alert("please select anyone");
    }

}

function mybike()
{
    var bike=document.getElementsByName("bike");
    int=0;
    bike.forEach((biker)=>{
        if(biker.checked)
        {
            alert(biker.value);
            int=1;
        }
    });
    if(int==0)
    {
        alert("please select anyone")
    }   
}


