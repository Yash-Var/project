const videoGrid = document.getElementById('video-grid')

let myVideoStream;
navigator.mediaDevices.getUseMedia({
    video: true,
    audio: true,
  }).then((stream) => {
    muVideoStream = stream;
  });

  const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.add
  }