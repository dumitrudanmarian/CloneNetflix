import React, { useEffect, useState } from 'react'
import instance from '../../api/axios';
import requests from '../../api/requests';
import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([]);
    let styles = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            let randomNumber = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[randomNumber]);
            return request
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner' style={styles}>
            <div className="banner-content">
                <h1 className='banner-title '>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-btns">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>

                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            {/* Div for the fade-effect between banner & row-component */}
            <div className="banner-fade"></div>
        </header>
    )
}

export default Banner