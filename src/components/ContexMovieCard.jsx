import React, { useEffect, useState } from 'react';
import {get} from "../data/httpClient"
import {MovieCard} from "./MovieCard"
import '../components/ContexMovieCard.css'

export function ContexMovieCard () {
const [movies, SetMovie] = useState ([])
useEffect (() => {
    get("/discover/movie").then((data=>{
            SetMovie(data.results);
            console.log(data)
    }))
}, [])

    return (

        
       <ul className='container'>
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>


        ))}




       </ul>
    )
}