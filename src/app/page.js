
"use client"
import { createContext, useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import HomePageCarousals from "./HomePageCarousals";
import HomePageTvCarousals from "./HomePageTvCarousals";
import HomePagePeopleCarousals from "./HomePagePeopleCarousals";
import HomePageBollywoodCarousals from "./HomePageBollywoodCarousals";

export const Context = createContext()


export default function Home() {
  const trendingBollywoodUrl = "https://api.themoviedb.org/3/discover/movie?api_key=87b668cb66199e45015bdd3e19041379&region=IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=hi"
  const trendingBollywoodTvUrl = "https://api.themoviedb.org/3/discover/tv?api_key=87b668cb66199e45015bdd3e19041379&region=IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=hi"

  const trendingDayFilterUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  const trendingWeekFilterUrl = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"

  const trendingTvDayFilterUrl = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
  const trendingTvWeekFilterUrl = "https://api.themoviedb.org/3/trending/tv/week?language=en-US"

  const trendingPeopleDayFilterUrl = "https://api.themoviedb.org/3/trending/person/day?language=en-US"
  const trendingPeopleWeekFilterUrl = "https://api.themoviedb.org/3/trending/person/week?language=en-US"

  const [trendMovies, settrendMovies]=useState({})
  const [trendTv, settrendTv]=useState({})
  const [trendPeople, settrendPeople]=useState({})
  const [trendBollywood, settrendBollywood]=useState({})
  const [trendingSearchKey, settrendingSearchKey]=useState("day")
  const [trendingTvSearchKey, settrendingTvSearchKey]=useState("day")
  const [trendingPeopleSearchKey, settrendingPeopleSearchKey]=useState("day")
  const [trendingBollywoodSearchKey, settrendingBollywoodSearchKey]=useState("day")

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2I2NjhjYjY2MTk5ZTQ1MDE1YmRkM2UxOTA0MTM3OSIsInN1YiI6IjY1ZDYwZGI0OTk3NGVlMDE3YjA1Mzg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BT0VUGWoSFWyWWtjBP11WLA4TvCHL0sscum0UJBaJE8'
    }
    };


    const fetchBollywoodMovieData =async()=>{
      let result = await fetch(trendingBollywoodSearchKey === "day" ? trendingBollywoodUrl : trendingBollywoodTvUrl, options)
      result = await result.json()
      // console.log("resultBollywoodmovie",result);
      settrendBollywood(result)

      }


      const fetchMovieData =async()=>{
            let result = await fetch(trendingSearchKey === "day" ? trendingDayFilterUrl : trendingWeekFilterUrl, options)
            result = await result.json()
            settrendMovies(result)

      }


      const fetchTvData =async()=>{
            let result = await fetch(trendingTvSearchKey === "day" ? trendingTvDayFilterUrl : trendingTvWeekFilterUrl, options)
            result = await result.json()
            settrendTv(result)

      }

      const fetchPeopleData =async()=>{
        let result = await fetch(trendingPeopleSearchKey === "day" ? trendingPeopleDayFilterUrl : trendingPeopleWeekFilterUrl, options)
        result = await result.json()
        settrendPeople(result)

      }


      // const fetchBackgroundImages =async()=>{
      //   let result = await fetch(trendingBollywoodSearchKey === "day" ? trendingBollywoodUrl : trendingBollywoodTvUrl, options)
      //   result = await result.json()
      //   console.log("resultBollywoodmovie",result);
      //   settrendBollywood(result)
  
      // }
      

  useEffect(()=>{
    fetchBollywoodMovieData()
  },[trendingBollywoodSearchKey])


      useEffect(()=>{
        fetchMovieData()
      },[trendingSearchKey])


      useEffect(()=>{
        fetchTvData()
      },[trendingTvSearchKey])

      useEffect(()=>{
        fetchPeopleData()
      },[trendingPeopleSearchKey])
    
      



  const changetrendingSearchKeyDay =()=>{
    settrendingSearchKey("day")
  }

  const changetrendingSearchKeyWeek =()=>{
    settrendingSearchKey("week")
  }

  const changetrendingTvSearchKeyDay =()=>{
    settrendingTvSearchKey("day")
  }

  const changetrendingTvSearchKeyWeek =()=>{
    settrendingTvSearchKey("week")
  }

  const changetrendingPeopleSearchKeyDay =()=>{
    settrendingPeopleSearchKey("day")
  }

  const changetrendingPeopleSearchKeyWeek =()=>{
    settrendingPeopleSearchKey("week")
  }

  const changetrendingBollywoodSearchKeyDay =()=>{
    settrendingBollywoodSearchKey("day")
  }

  const changetrendingBollywoodSearchKeyWeek =()=>{
    settrendingBollywoodSearchKey("week")
  }

  return (
    <Context.Provider value={{trendm:trendMovies, trendTvshows:trendTv, trendPeopleShows:trendPeople, bollywood:trendBollywood}}>
    <HomeBanner />
    <HomePageBollywoodCarousals switchBollywoodDay={changetrendingBollywoodSearchKeyDay} switchBollywoodWeek={changetrendingBollywoodSearchKeyWeek} />
    <HomePageCarousals switchDay={changetrendingSearchKeyDay} switchWeek={changetrendingSearchKeyWeek} />
    <HomePageTvCarousals switchTvDay={changetrendingTvSearchKeyDay} switchTvWeek={changetrendingTvSearchKeyWeek} />
    <HomePagePeopleCarousals switchPeopleDay={changetrendingPeopleSearchKeyDay} switchPeopleWeek={changetrendingPeopleSearchKeyWeek} />
    </Context.Provider>
  );
}
