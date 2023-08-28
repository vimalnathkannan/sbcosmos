function changetext() {
    var elements = document.getElementsByTagName("h1");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.color = "red";
        elements[i].style.backgroundColor = "green";
    }
}

function changeclass() {
    var elements = document.getElementsByTagName("h2")
    for (i = 0; i < elements.length; i++) {
        elements[i].className = "myclass";
    }
}

function hideimage(){
    var hideimage=document.getElementsByTagName("img");
    for(i=0;i<hideimage.length;i++){
        hideimage[i].style.display="none";
    }
}

function changeimg(){
    var changeimg=document.getElementsByTagName("img");
    for(i=0;i<changeimg.length;i++){
        changeimg[i].src="img6.jpg";
    }
}