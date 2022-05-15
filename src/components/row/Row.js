import React, { useEffect, useState } from 'react';
import instance from '../../api/axios';
import "./Row.css";
import { FaPlay, FaThumbsUp, FaThumbsDown, FaPlus } from "react-icons/fa";


const basePosterUrl = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeImage }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters">

                {movies.map(movie => (
                    <div key={movie.id} className='each-movie'>
                        <img

                            className={`row-poster 
                        ${(!movie.poster_path || !movie.backdrop_path) && "row-hidden-poster"}`}
                            src={`${basePosterUrl}${movie.backdrop_path}`}
                            alt={movie.name} />

                        <div className="poster-info">
                            <div className="icons">
                                <FaPlay />
                                <FaPlus />
                                <FaThumbsUp />
                                <FaThumbsDown />
                            </div>
                            <h2>{movie.title || movie.name}</h2>
                            <div className="vote-year">
                                <p>{movie?.vote_average}</p>
                                <p>{movie?.release_date}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row