import React, { useState } from 'react'
import { useEffect } from 'react'
import {Button} from 'react-bootstrap'
import '../App.css'
import Head from './Header'
import StarRatingComponent from 'react-star-rating-component';

const Movie = ({defaultProps,movies}) => {

    const[movie,setMovie]=useState({})
    
    useEffect(() => { setMovie(movies.find((el) => el.titre === defaultProps.match.params.id));}, []);
    
    return (
        <>
        <div className='Header'>
            <div className='imageHeader'>
                <p><b>Movie Store</b></p>
            </div>
       </div>
       <div className='filter'>
             <div className='filterrate'>
                 <Button>Download</Button>
             <StarRatingComponent
             className='Star'
                        starCount={5}
                        value={movie.rating} />
                <p className='desc'> {movie.desc}</p>
            <iframe className='film' width="770" height="400" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
                </div>
            </div>
            
           
            
            
         </>
    )
}

export default Movie
 