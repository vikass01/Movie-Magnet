"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../src/css/HomePage/HomePage.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination } from 'swiper/modules';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Context } from './page';
import { useRouter } from 'next/navigation'




function HomePageBollywoodCarousals(props) {
  const router = useRouter()
  const value = 7.9
  const {bollywood} = useContext(Context);
  const [dayWeek,setDayWeek]=useState(1)

  const setday=()=>{
    setDayWeek(1)
    props.switchBollywoodDay()
  }

  const setweek=()=>{
    setDayWeek(2)
    props.switchBollywoodWeek()
  }

 
  
  
  return (

    
    <div className='carousalContainer'>
      
        <div className='carousalheading'>
            <div>Bollywood Movies</div>
            <div className="switch" >
                <div className='box1slider'>
                    <button onClick={setday} className={`slider1 ${dayWeek === 1 ? "ttcolor ":"textColor"}`}>Movie</button>
                </div>
                <div className='box2slider'>
                    <button onClick={setweek} className={`slider2 ${dayWeek === 2 ? "ttcolor ":"textColor"}`} >TV</button>
                </div>
            
            </div>
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
        {bollywood.results?.map((elem,index)=>{
            if(elem.poster_path){
          return <SwiperSlide key={index} onClick={() => router.push(`/${elem.id}`)} >
          <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={elem.vote_average.toFixed(1)} maxValue={10} text={`${elem.vote_average.toFixed(1)}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${elem.vote_average.toFixed(1) < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>{setDayWeek === "day" ? elem.title.substring(0,22):elem.name}</span>
            <span className='carousalDescriptionSpan2'>{elem.release_date}</span>
          </div>
          
          </SwiperSlide>}
        })}
      </Swiper>
   

      
    </div>
  )
}



export default HomePageBollywoodCarousals
















