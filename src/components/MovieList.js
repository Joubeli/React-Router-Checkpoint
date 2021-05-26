import React, { useState } from 'react'
import '../App.css'
import Moviecard from './Moviecard'
import StarRatingComponent from 'react-star-rating-component';

const List = ({ movies }) => {


    return (
        <>
            <div className='filterrate'>
                <h4 className="mb-0"> Filter By rate</h4>
                <StarRatingComponent className='rating'
                    name="rate1"
                    starCount={5}
                />
            </div>
            <div className='ListMovie'>
                {movies.map((movie, index) => (
                    <Moviecard movie={movie} />
                ))}


            </div>
        </>
    )
}

export default List
