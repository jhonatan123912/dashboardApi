import axios from "axios";
// import NP from "./pages/NP";
// import React, {useState, useEffect} from "react";


// const baseUrl = process.env.VITE_API_URL_BASEURL;
// const baseImageUrl = process.env.VITE_API_URL_BASEIMAGE;
// const apiKey = process.env.VITE_API_KEY;

// export const getMovieList = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
//     return response.data.results;
//   } catch (error) {
//     console.error("Error getting movie list:", error);
//     return [];
//   }
// };

// export const getImageUrl = (path) => {
//   return `${baseImageUrl}${path}`;
// };



    const apiKey = process.env.VITE_API_KEY;
    const baseUrl = process.env.VITE_API_URL_BASEURL;

    export const getMovieList = async () => {
      const movie = await axios.get(`${baseUrl}/$/movie/nowplaying?api_key= ${apiKey}`);
      return movie.data.response
    };
 





  // const MOVIE_BY_NOW_PLAYING = "/movie/now_playing";

  // const [npMovies, setNpMovies] = useState([]);


  // const axiosGetMovieByNowPlaying = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_API_BASEURL}${MOVIE_BY_NOW_PLAYING}`)
  //   } catch (error) {
  //     console.log(response.data);
  //   }
  // };

  // useEffect(() => {
  //   axiosGetMovieByNowPlaying();
  
  //   return () => {
  //     <div>
  //       <h1>Now Playing</h1>
  //     </div>
  //   }
  // })

export default api;

