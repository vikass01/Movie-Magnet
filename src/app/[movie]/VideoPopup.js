"use client"
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "../../css/MoviePage/movie.css"

const VideoPopup = (props) => {
    const [showVideo, setShowVideo] = useState(false)
    
    useEffect(()=>{
        setShowVideo(true)
    },[])

   

    
    return (
         <div className={`videoPopup visible playerMain`} >
            {/* <div className="opacityLayer" ></div> */}
            <div className="videoPlayer" style={{width:"640px",height:"390px",padding:0}}>
                <span className="closeBtn cursor-pointer" onClick={()=>props.closeVideo()} >
                    Close
                </span>
                {showVideo ?
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${props.videoData.results[1].key}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                    origin='https://www.youtube.com'
                    config={{
                        youtube: {
                             playerVars: { modestbranding: 1 }
                        }
                    }}
                />:null}
            </div>
        </div>
    );
};

export default VideoPopup;
