import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FilmList from './components/FilmList'
import FilmRank from './components/FilmRank'
import Footer from './components/Footer'
import ContinueWatch from './components/ContinueWatch'

export default function Homepage() {

  // Popular
  const [popularMovie, setPopularMovie] = useState([]);
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);

  const getPopularMovie = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(json => setPopularMovie(json.results))
      .catch(err => console.error(err));
  }

  const getUpcomingMovie = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setUpcomingMovie(res.results))
      .catch(err => console.error(err));
  }

  const getTopRated = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setTopRatedMovie(res.results))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    getPopularMovie();
    getUpcomingMovie();
    getTopRated();
  }, [])


  return (
    <>
      <Navbar/>
      <HeroSection/>
      <section className='relative -top-10'>
        <FilmList heading='Popular' datas={popularMovie}/>
      </section>

      <section className='relative mb-10'>
        <FilmList heading='Upcoming Movie' datas={upcomingMovie}/>
      </section>

      <section className='relative mb-10'>
        <FilmRank heading='Top 10 Movies In The U.S Today' datas={topRatedMovie}/>
      </section>

      <section>
        <ContinueWatch/>
      </section>

      <Footer/>
    </>
  )
}
