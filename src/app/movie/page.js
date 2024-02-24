"use client"
import React from 'react'
import "../../css/MoviePage/movie.css"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const banner1image = "https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642"

function page() {

  const value = 7.9;

  return (
    <div className='moviePageHeadContainer' style={{backgroundImage:`url(${"https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"})`,backgroundSize:'contain'}}>
      <div className='vghui'>
    <div className='headContainer'>
      <div className='bannerImageHeadContainer' >

          <div className='bannerDiv' style={{maxWidth:350}}>
            <img src={banner1image} />
          </div>

          <div className='' style={{flex:1,flexDirection:'column'}}>
              <div>
                  <p style={{fontSize:34}}>Dune: Part Two (2024)</p>
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
                <div style={{padding:0, display:'flex',flexDirection:'row',gap:20}}>
                  <p style={{textAlign:'left'}}>Status: Released</p>
                  <p style={{textAlign:'left'}}>Release Date: Feb 27, 2024</p>
                  <p style={{textAlign:'left'}}>Runtime: 2h 47m</p>
                </div>
                <br/>
                <br/>
                <div style={{padding:0,display:'flex',flexDirection:'row', gap:20}}>
                  <span>Director: Denis Villeneuve</span>
                  <span>Writer: Denis Villeneuve, Jon Spaihts</span>
                </div>
                
                

              </div>

          </div>


      </div>



          <div>
            <div>
              <p>Top Cast</p>
            </div>
            <div>
              

            </div>
          </div>
          

          <div>
            <div>
              <p>Official Videos</p>
            </div>
            <div>
              
            </div>
          </div>

          <div>
            similir videos
          </div>
        </div>
        </div>
    </div>
  )
}


export default page


