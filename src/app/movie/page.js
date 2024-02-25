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

const banner1image = "https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642"

function Page() {
  const value = 7.9;
  const [HasWindow, setHasWindow] = useState(false);
  console.log("typeof window" ,typeof window );
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className='moviePageHeadContainer' style={{backgroundImage:`url(${"https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"})`,backgroundSize:'contain'}}>
      <div className='vghui'>
        <div className='headContainer'>

          <div className='bannerImageHeadContainer' >

          <div className='bannerDiv' style={{maxWidth:350,minWidth:300}}>
            <img src={banner1image} />
          </div>

          <div className='' style={{flex:1,flexDirection:'column'}}>
              <div>
                  <p style={{fontSize:34,textAlign:"left"}}>Dune: Part Two (2024)</p>
                  <p style={{fontSize:17,fontStyle:'italic',color:'#ccc',textAlign:'left'}}>Long live the fighters.</p>
                  <div style={{display:'flex', flexDirection:"row",padding:"5px 0px",gap:5}}>
                    <span style={{fontSize:12,backgroundColor:"#da2f68", borderRadius:5, padding:"0px 5px"}}>Science Fiction</span>
                    <span style={{fontSize:12,backgroundColor:"#da2f68", borderRadius:5, padding:"0px 5px"}}>Adventure</span>
                  </div>
              </div>
              <div style={{display:'flex',flexDirection:'row', width:"60%",justifyContent:'space-between',alignItems:'center'}}>
                
                <div className='carousalPercentagedivv'>
                  <CircularProgressbar value={value} maxValue={10} text={`${value}`} styles={buildStyles({textSize: '35px',textColor: '#000',trailColor: '#fff',pathColor: `${value < 7 ? "orange": "green" }`})} />
                </div>
                
                <div ><a className="play-btn" href="#"></a></div>
                <div>Watch Trailer</div>
              </div>
              <div >
                <p style={{textAlign:'left'}}>Overview</p>
                <p style={{textAlign:'left'}}>After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.</p>
              </div>
              <div>
                <div style={{padding:0, }}>
                  <p style={{textAlign:'left'}}>Status: Released Release Date: Feb 27, 2024, Runtime: 2h 47m</p>
                </div>
                <br/>
                <br/>
                <div style={{padding:0,}}>
                  <p style={{textAlign:'left',padding:0,}}>Director: Denis Villeneuve, Writer: Denis Villeneuve, Jon Spaihts</p>
                </div>
                
                

              </div>

          </div>


          </div>

        <div>
          {/* Top cast */}
          <div style={{padding:0,display:'flex',flexDirection:'column',width:"100%", marginBottom:20}}>
            <div style={{padding:0}}>
              <p style={{padding:0,textAlign:'left'}}>Top Cast</p>
            </div>
            <div style={{padding:0,width:'100%'}}>
              <div style={{display:'flex',flexWrap:'wrap', flexDirection:'row',justifyContent:'flex-start',gap:40,alignItems:'center',width:'100%'}}>

                <div style={{padding:"5px 0px",width:100,height:160}}>
                  <img src='https://image.tmdb.org/t/p/original/yO356gXWSr6fgMw4UH1eYuhdOHI.jpg' style={{width:"100%",height:100,objectFit:'cover',borderRadius:50}}/>
                  <p style={{fontSize:16}}>Sydney Sweeney</p>
                  <p style={{fontSize:14}}>Bea</p>
                </div>

                <div style={{padding:"5px 0px",width:100,height:160}}>
                  <img src='https://image.tmdb.org/t/p/original/yO356gXWSr6fgMw4UH1eYuhdOHI.jpg' style={{width:"100%",height:100,objectFit:'cover',borderRadius:50}}/>
                  <p style={{fontSize:16}}>Sydney Sweeney</p>
                  <p style={{fontSize:14}}>Bea</p>
                </div>

                <div style={{padding:"5px 0px",width:100,height:160}}>
                  <img src='https://image.tmdb.org/t/p/original/yO356gXWSr6fgMw4UH1eYuhdOHI.jpg' style={{width:"100%",height:100,objectFit:'cover',borderRadius:50}}/>
                  <p style={{fontSize:16}}>Sydney Sweeney</p>
                  <p style={{fontSize:14}}>Bea</p>
                </div>

                


                
                
              </div>
              

            </div>
          </div>

          {/* Official Videos */}
          <div style={{padding:0,display:'flex',flexDirection:'column',width:"100%"}}>
            <div style={{padding:0,textAlign:'left'}}>
              <span style={{padding:0,textAlign:'left'}}>Official Videos</span>
            </div>
            <div style={{padding:0,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:"100%",gap:40}}>
                <div style={{width:"100%",height:"auto"}}>
                      {
                        HasWindow && <Swiper
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
                        <SwiperSlide style={{width:300,height:200}} >
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' controls />
                        </SwiperSlide>
                        <SwiperSlide style={{width:300,height:200}}>
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
                        </SwiperSlide>
                        <SwiperSlide style={{width:300,height:200}}>
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
                        </SwiperSlide>
                        <SwiperSlide style={{width:300,height:200}}>
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
                        </SwiperSlide>
                        <SwiperSlide style={{width:300,height:200}}>
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
                        </SwiperSlide>
                        <SwiperSlide style={{width:300,height:200}}>
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
                        </SwiperSlide>
                        <SwiperSlide style={{width:300,height:200}}>
                          <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
                        </SwiperSlide>
                        
                          </Swiper>
                        
                        
                        
                        
                        
                        // <div style={{padding:0,display:'flex',flexDirection:'row', gap:20,width:'100%', height:'auto'}}>
                        //   <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='300px' height='200px'/>

                        //   <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='300px' height='200px'/>

                        //   <ReactPlayer className="playerz" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='300px' height='200px'/>  
                        
                        
                        // </div>
                        }
                </div>  
                
            </div>
            <div>
              
            </div>
          </div>

          {/* Similar video */}
          <div style={{width:"100%",padding:0}}>
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
        </div>  


        </div>
      </div>
    </div>
  )
}


export default Page


