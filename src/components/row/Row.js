import React, { useEffect, useState } from 'react';
import instance from '../../api/axios';
import "./Row.css";

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

    // console.table(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row-poster 
                                    ${isLargeImage && "row-large-poster"} 
                                    ${(!movie.poster_path || !movie.backdrop_path) && "row-hidden-poster"}`}
                        src={`${basePosterUrl}${isLargeImage ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row