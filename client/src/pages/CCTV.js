import './CCTV.css'
import React, { useEffect, useRef } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'


function CCTV() {
    let videoRef = useRef(null)
    const getUserCamera = () =>{
        navigator.mediaDevices.getUserMedia({
          video:true
        })
        .then((stream) => {
          let video = videoRef.current
    
          video.srcObject = stream
    
          video.play()
        })
        .catch((error) => {
          console.log(error)
        })
      }
    
      useEffect(() => {
        getUserCamera()
      },[videoRef])

    return (
        <>
            <div className='container'>
                <h1 className='head'>농장 CCTV<br/><br/></h1>
                <video className='CCTV' ref={videoRef}></video>
            </div>
        </>
    );
}

export default CCTV;