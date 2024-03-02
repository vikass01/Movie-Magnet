"use client"
import React, { useState } from 'react'
import "../css/HomePage/HomePage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'


function Navbar() {
  const router = useRouter()
  const [searchInput, setSearchInput]= useState(false)
  const [mobisearchInput, setmobiSearchInput]= useState(false)
  const [mobiMenu, setmobiMenu]= useState(false)


  const mobiSearchFunction =()=>{
    setmobiSearchInput(!mobisearchInput)
    setmobiMenu(false)

  }

  const mobiMenuFunction =()=>{
    setmobiMenu(!mobiMenu)
    setmobiSearchInput(false)

  }


  
  return (
    <>
  <div className="topnav" id="myTopnav" style={{position:'absolute',zIndex:1000}}>
    <div className='logo'><button onClick={()=>router.push(`/`)}> Movie Magnet </button></div>
    
    <div className='zxcv'>
        <a href="#news" className="active">Movie</a>
        <a href="#contact">Tv Shows</a>
        {searchInput ?
        <>
          <input type="text" placeholder="Search.." style={{padding:"3px 0px", borderRadius:5,backgroundColor:"transparent"}}></input>
          <a href="#contact"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>setSearchInput(false)} /></a>
        </>
        :
        <a href="#contact"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>setSearchInput(true)} /></a>
        }
        <a href="#contact" className="icon" >
          <FontAwesomeIcon icon={faBars} />
        </a>
        
       
    </div>
    
    <a href="#contact" className="icon" onClick={mobiSearchFunction} >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </a>
    <a href="#contact" className="icon" onClick={mobiMenuFunction} >
      <FontAwesomeIcon icon={faBars} />
    </a>
    
  </div>


  {mobiMenu && 
  <div style={{display:'flex', justifyContent:"flex-start", width:'100%',backgroundColor:"rgba(0,0,0,.25)", transition: "all 2s linear 10s"}}>
      <div style={{display:'flex', flexDirection:"column", textAlign:'start', width:"50%",marginTop:50, gap:10}}  >
          <a href="#home" className="active">Movies</a>
          <a href="#news">Tv Shows</a>
      </div>
  </div>
  }

  {mobisearchInput && 
  <div style={{width:'100%', marginTop:50,}}>
      <input type='search' placeholder='Search Movie' style={{width:"100%",height:40}}/>
  </div>
  }
 
</>
  )
}

export default Navbar