"use client"
import React, { useEffect, useState } from 'react'
import "../../css/MoviePage/movie.css"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player/lazy'
import { useParams } from 'next/navigation';

import { useRouter } from 'next/navigation'
import VideoPopup from './VideoPopup';
const banner1image = "https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642"


function MoviePage() {
const router = useRouter()
const parms = useParams()
  const [openPlayer, setopenPlayer]=useState(false)
  const [moviebackup, setmoviebackup]=useState({})
  const [val,setval] = useState(0)
  const [Similermoviebackup, setSimilermoviebackup]=useState({})
  const value = 7.9;
  

      const playerCloseFunction =()=>{
        setopenPlayer(false)
      }

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.ACCESS_TOKEN
        }
        };


      const fetchMovie =async()=>{
            const serc = parms.movie
            const url = `https://api.themoviedb.org/3/movie/${serc}?language=en-US`
            let result = await fetch(url, options)
            result = await result.json()
            setmoviebackup(result)

      }

      useEffect(()=>{
        fetchMovie()
      },[])


      const fetchSimiler =async()=>{
        const serc = parms.movie
        const url = `https://api.themoviedb.org/3/movie/${serc}/similar?language=en-US&page=1`
        let result = await fetch(url, options)
        result = await result.json()
        setSimilermoviebackup(result)

  }

        useEffect(()=>{
          fetchSimiler()
        },[])

      
        const functionCloseVideo =()=>{
          setopenPlayer(false)
        }
      



  return (
    <div className='moviePageHeadContainer' >
       {openPlayer && <VideoPopup closeVideo={functionCloseVideo}/> }
      <div className='vghuii' style={{padding:0,height:"100%",width:"100%"}}>
        <div className='headContainer'>

          <div className='bannerImageHeadContainer' style={{backgroundImage:`url(${"https://image.tmdb.org/t/p/original"+moviebackup.backdrop_path})`,backgroundSize:'cover'}} >
          <div className='bannerImageJuniourContainer'>
          <div className='vghui'>
                  <div className='bannerDiv' style={{maxWidth:350,minWidth:300}}>
                    <img src={`https://image.tmdb.org/t/p/original${moviebackup?.poster_path}`} style={{borderRadius:12}} />            
                  </div>

          <div className='overviewDiv'>
              <div style={{paddingTop:0}}>
                  <p style={{fontSize:34,textAlign:"left"}}>{moviebackup?.original_title}</p>
                  <p style={{fontSize:17,fontStyle:'italic',color:'#ccc',textAlign:'left'}}>{moviebackup?.tagline}</p>
                  <div style={{display:'flex', flexDirection:"row",padding:"5px 0px",gap:5}}>
                    {moviebackup.genres?.map((elem,index)=>{
                      return <span key={index} style={{fontSize:12,backgroundColor:"#da2f68", borderRadius:5, padding:"0px 5px"}}>{elem.name}</span>
                    })}
                    
                    
                  </div>
              </div>
              <div style={{display:'flex',flexDirection:'row', width:"60%",justifyContent:'space-between',alignItems:'center'}}>
                
                <div className='carousalPercentagedivv' onClick={()=>setopenPlayer(true)}>
                  <CircularProgressbar value={moviebackup.vote_average} maxValue={10} text={`${parseFloat(moviebackup.vote_average).toFixed(1)}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: 'linear-gradient( #f89e00 .99%, #da2f68 100%)',pathColor: `${moviebackup.vote_average < 7 ? "orange": "green" }`})} />
                </div>
                
                <div className='cursor-pointer' onClick={()=>setopenPlayer(true)}><a className="play-btn" style={{zIndex:0}} ></a></div>
                <div>Watch Trailer</div>
              </div>
              <div >
                <p style={{textAlign:'left'}}>Overview :</p>
                <p style={{textAlign:'justify',}}>{moviebackup?.overview}</p>
                <p style={{textAlign:'left'}}>Status: {moviebackup.status}, Release Date: {moviebackup?.release_date}, Runtime: {parseFloat(moviebackup.runtime/60).toFixed(1)}hrs.</p>
                <p style={{textAlign:'left',padding:0,}}>Director: Denis Villeneuve, Writer: Denis Villeneuve, Jon Spaihts</p>
              </div>
                

          </div>
          </div>
          </div>
          </div>

        <div style={{width:'100%'}}>
          {/* Top cast */}
          <div className='pcompany'>
            <div style={{padding:0}}>
              <p style={{padding:0,textAlign:'left'}}>Production Companies :</p>
            </div>
            <div style={{padding:0,width:'100%'}}>
              <div style={{display:'flex', flexWrap:"nowrap", flexDirection:'row',justifyContent:'flex-start',gap:40,alignItems:'center',width:'100%'}}>

                {moviebackup.production_companies?.map((elem,index)=>{
                  if(elem.logo_path){
                  return <div key={index} style={{padding:"5px 0px",width:175}}>
                  <img src={`https://image.tmdb.org/t/p/original${elem.logo_path}`} style={{width:"100%",height:60,objectFit:'contain',backgroundColor:"#fff",padding:10,borderRadius:12}}/>
                  <p style={{fontSize:16}}>{elem.name}</p>
                  {/* <p style={{fontSize:14}}>{elem.origin_country}</p> */}
                </div>}
                })} 
                
              </div>
              

            </div>
          </div>

          {/* Official Videos */}
          <div className='pcountries'>
            <div style={{padding:0,textAlign:'left'}}>
              <span style={{padding:0,textAlign:'left'}}>Production Countries :</span>
            </div>
            <div style={{padding:0,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:"100%",gap:40}}>
                <div  style={{width:"100%",height:"100%",padding:0}}>
                       
                            {moviebackup.production_countries?.map((elem,index)=>{
                              return <div key={index} style={{padding:0}}>
                              <div  style={{padding:"5px 0px",display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <p style={{fontSize:16,marginRight:20}}>{elem.name}</p>
                                {/* <p style={{fontSize:14}}></p> */}
                              </div>
                              </div>
                            })}
                            
                        
                        
                </div>  
                
            </div>
            <div>
              
            </div>
          </div>

          {/* Similar video */}
          <div className='similer'>
          <div style={{padding:0}}>
              <p style={{padding:0,textAlign:'left'}}>Similar Movies</p>
          </div>
            
          <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        style={{marginTop:1}}
      >
        {Similermoviebackup.results?.map((elem,index)=>{
          if(elem.poster_path){
          return <SwiperSlide key={index} onClick={() => router.push(`/${elem.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
              <div className='carougene'>
                <div className='carousalPercentagediv'>
                <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
                </div>
                <div className='generes'>
                  <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
                  <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
                </div>
              </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>}
        })}
        

          
        
          
        
      </Swiper>



          </div>
        </div>  


        </div>
      </div>
    </div>
  )
}



export default MoviePage


