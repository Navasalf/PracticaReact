import {React} from 'react';
import styles from "../components/MovieCard.module.css"
import { NavLink } from 'react-router-dom';

export function MovieCard ({movie}) {
const imageUrl ="https://image.tmdb.org/t/p/w300"+movie.poster_path;

    return (
       <li className={styles.movieCard}>
        <NavLink to={"/movies/"+movie.id}>
            <img width={230}
                height={345}
                src={imageUrl}
                alt={movie.title}
                className='movieImage'/>
                
        </NavLink>

        <div className={styles.title}> {movie.title} </div>
       </li>
    )
}