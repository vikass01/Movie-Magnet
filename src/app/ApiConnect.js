const API_URL = "https://api.themoviedb.org/3/movie/11?api_key=87b668cb66199e45015bdd3e19041379"
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2I2NjhjYjY2MTk5ZTQ1MDE1YmRkM2UxOTA0MTM3OSIsInN1YiI6IjY1ZDYwZGI0OTk3NGVlMDE3YjA1Mzg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BT0VUGWoSFWyWWtjBP11WLA4TvCHL0sscum0UJBaJE8"

export const getApiData =(props)=>{

    const options = {
		method: 'GET',
		headers: {
		  accept: 'application/json',
		  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2I2NjhjYjY2MTk5ZTQ1MDE1YmRkM2UxOTA0MTM3OSIsInN1YiI6IjY1ZDYwZGI0OTk3NGVlMDE3YjA1Mzg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BT0VUGWoSFWyWWtjBP11WLA4TvCHL0sscum0UJBaJE8'
		}
	  };
	  
	  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
		.then(response => response.json())
		.then((response) => {()=>props.trendingMovies(response)
		})
		.catch(err => console.error(err));

}