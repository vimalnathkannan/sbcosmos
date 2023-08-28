const cameraFeed=document.getElementById('cameraFeed');
navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
    cameraFeed.scrObject=stream;
})
.catch(error=>{
    console.error('Error accessing camera:',error);
})