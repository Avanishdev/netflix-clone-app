import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../requests';
import axios from '../axios'

const Banner = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response=await axios.get(requests.fetchNetflixOriginals);
            // console.log(response.data.results)
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
            return response;
        }
        fetchData();
    },[])
    console.log(movie);

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
    }}>
        <div className="banner_contents">
            <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <div className="banner_desc">
                <p>{truncate(movie?.overview,150)}</p>
            </div>
        <div className="banner_fadeBottom"></div>
        </div>
    </header>
)
}

export default Banner