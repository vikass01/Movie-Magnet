

import HomeBanner from "./HomeBanner";
import HomePageCarousals from "./HomePageCarousals";


export default function Home() {
  return (
    <>
    <HomeBanner/>
    <HomePageCarousals title={"Trendings"} filterFirst={"Day"} filterSecond={"Week"}/>
    <HomePageCarousals title={"What's Popular"} filterFirst={"Movies"} filterSecond={"Tvshows"}/>
    <HomePageCarousals title={"Top Rated"} filterFirst={"Movies"} filterSecond={"Tvshows"}/>
    </>
  );
}
