import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

function Player( props) {

    const [HasWindow, setHasWindow] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);


    

  return (
    <div style={{width:"100%", height:"100vh",position:"fixed", padding:100,display:'flex',justifyContent:"center", alignItems:"center",zIndex:101,flexDirection:'column',backgroundColor:"rgba(0,0,0,0.8)" }} >
        
        <div style={{height:400,width:700,position:'fixed',}}>
            <div style={{width:"100%", display:'flex', justifyContent:'flex-end',alignItems:'center'}}><button  onClick={props.funClose}>Close</button></div>
            {
                        HasWindow && <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' controls />}
        </div>
      
    </div>
  )
}

export default Player
