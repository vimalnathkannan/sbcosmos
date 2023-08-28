setTimeout(() => {
    let element = document.getElementsByClassName("example");
    for (i = 0; i < element.length; i++) {
        element[i].innerText = "this text has been changed";
    }
}, 3000);

let element=document.querySelectorAll(".example");
element.forEach(data=>{
    data.style.backgroundColor="blue";
})

// var element=document.getElementsByClassName("example");
// console.log(element);
// for ( let data of element){

//   data.style.backgroundColor="red";
// };

// var element=document.getElementsByClassName("example");
// element=[1,2,3,4];
// element.forEach(myf);
//     function myf(data)
//     {
//     data.innerHtml="vimal";
// }

let datas = document.getElementsByClassName("myclass");
for (i = 0; i < datas.length; i++) {
    datas[i].style.backgroundColor = "black";
    datas[i].style.color = "yellow";
}

var elements = document.getElementsByClassName("oldclass");
for (i = 0; i < elements.length; i++) {
    elements[i].classList.add("newclass");
}

var elements = document.getElementsByClassName("oldclass");
for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove("newclass");
}

var elements = document.getElementsByClassName("oldclass");
for (i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("newclass");
}

function changeimg() {
    var imgelement = document.getElementsByClassName("myimage");
    for (i = 0; i < imgelement.length; i++)
    imgelement[i].setAttribute("src", "img3.jpg");
}


