"use client"
import React, { useState } from 'react'
const image1 = "https://image.tmdb.org/t/p/original/bPe6svQylMx7zS4RyuMJbOL46ao.jpg"
import "../css/HomePage/HomePage.css"

function HomeBanner() {

  const [query, setQuery] = useState("");

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};


  return (
    <div className='bannerHead'>
    {console.log(value1}
            <div className='bannerImageDiv' style={{backgroundImage: `url(${image1})`}}>
            
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
                                        placeholder="Search for a movie or tv show...."
                                        onChange={(e) => setQuery(e.target.value)}
                                        onKeyUp={searchQueryHandler}
                                        className='searchInput' 
                                    />
                                    <button className='welcomeDivSearchButton' onClick={searchQueryHandler} >Search</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='opacity-layer'></div>
            </div>        
        </div>
  )
}

export default HomeBanner
