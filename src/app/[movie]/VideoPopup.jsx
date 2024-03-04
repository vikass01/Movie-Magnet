"use client"
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = (props) => {
    const [showVideo, setShowVideo] = useState(false)
    
    useEffect(()=>{
        setShowVideo(true)
    },[])
    return (
         <div className={`videoPopup visible`} style={{position:'fixed',width:"100%", height:"100%",zIndex:100, display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.8)'}}>
            <div className="opacityLayer" ></div>
            <div className="videoPlayer" style={{width:"640px",height:"390px"}}>
                <span className="closeBtn cursor-pointer" onClick={()=>props.closeVideo()} >
                    Close
                </span>
                {showVideo ?
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=S1UOvQKI19o`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                    origin="https://www.youtube.com"
                />:null}
            </div>
        </div>
    );
};

export default VideoPopup;
