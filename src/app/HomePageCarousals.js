"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../src/css/HomePage/HomePage.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination } from 'swiper/modules';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image'


const banner1image = "https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642"

function HomePageCarousals(props) {

  const value = 7.9;
  
  return (

    
    <div className='carousalContainer'>
        <div className='carousalheading'>
            <div>{props.title}</div>
            <SwitchButton filterFirst={props.filterFirst} filterSecond={props.filterSecond} />
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
        <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>

          <SwiperSlide >
          
          <img src={banner1image}/>
          <div className='carousalPercentagediv'>
          <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
          </div>
          <div className='generes'>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>Drama</span>
            <span style={{backgroundColor:'#da2f68',padding:"0px 5px",borderRadius:10,fontSize:12}}>History</span>
          </div>
          <div className='carousalDescription'>
            <span className='carousalDescriptionSpan1'>The Zone of Interest</span>
            <span className='carousalDescriptionSpan2'>Dec 15, 2023</span>
          </div>
          
          </SwiperSlide>
        
          
        
      </Swiper>
   

      
    </div>
  )
}

const SwitchButton =(props)=>{
  const [dayWeek,setDayWeek]=useState(1)
    return (
            <div className="switch" >
                <div className='box1slider'>
                    <button onClick={()=>setDayWeek(1)} className={`slider1 ${dayWeek === 1 ? "ttcolor ":"textColor"}`}>{props.filterFirst}</button>
                </div>
                <div className='box2slider'>
                    <button onClick={()=>setDayWeek(2)} className={`slider2 ${dayWeek === 2 ? "ttcolor ":"textColor"}`} >{props.filterSecond}</button>
                </div>
            
            </div>
    )
}

export default HomePageCarousals
