"use client"
import React, { useState, useContext, useEffect } from 'react'
const image1 = "/bPe6svQylMx7zS4RyuMJbOL46ao.jpg"
import "../css/HomePage/HomePage.css"
import { Context } from './page'
import { useDispatch } from 'react-redux'




function HomeBanner() {

    const [backImages,setbackImages] = useState(image1)
    const [val,setval] = useState(0)

    const {bollywood} = useContext(Context);
    // console.log("bollywood.results",bollywood.results?.[1]?.backdrop_path);

   
    
    // useEffect(()=>{
        
    //     setInterval(()=>{
    //         setval(Math.floor(Math.random() * 19) + 1)
    //     },6000)
        

        
    // },[val])
        

   
    
    

   

   

  return (
    <div className='bannerHead'>
            <div className='bannerImageDiv' >
                {console.log("value",val)}
                <div className='bannerImageDiv' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${bollywood?.results?.[val]?.backdrop_path})`,padding:0,position:'absolute',zIndex:-1}}></div>  

                <BannerBox/>

                        {/* <div className='welcomeContainerDiv'>
                            <div className='welcomeDiv'>
                                <span className='welcomeText'>Welcome</span>
                                <span className='welcomeParagraphText'>
                                    Millions of movies, TV shows and people to discover.
                                    Explore now.
                                </span>
                                <div className='homeInputAndButton'>
                                    <input
                                        type="search"
                                        placeholder="Search movie or tv show...."
                                        onChange={(e) => setQuery(e.target.value)}
                                        onKeyUp={searchQueryHandler}
                                        className='searchInput' 
                                    />
                                    <button className='welcomeDivSearchButton' onClick={searchQueryHandler} >Search</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='opacity-layer'></div> */}

            </div>        
        </div>
  )
}


const BannerBox =()=>{

    const [query, setQuery] = useState("abc");
    const dispatch = useDispatch()

  const searchQueryHandler = (event) => {
    // if (event.key === "Enter" && query.length > 0) {
    //     navigate(`/search/${query}`);
    // }
    console.log("query",query);

    };
    return (
        <>
            <div className='welcomeContainerDiv'>
                            <div className='welcomeDiv'>
                                <span className='welcomeText'>Welcome</span>
                                <span className='welcomeParagraphText'>
                                    Millions of movies, TV shows and people to discover.
                                    Explore now.
                                </span>
                                <div className='homeInputAndButton'>
                                    <input
                                        type="search"
                                        placeholder="Search movie or tv show...."
                                        onChange={(ev) => setQuery(ev.target.value)}
                                        onClick={searchQueryHandler}
                                        className='searchInput' 
                                    />
                                    <button className='welcomeDivSearchButton' onClick={searchQueryHandler} >Search</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='opacity-layer'></div>
        </>
    )
}

export default HomeBanner
