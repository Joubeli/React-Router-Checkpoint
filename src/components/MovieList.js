import React from 'react'
import '../App.css'
import Moviecard from './Moviecard'


const List = ({movies, input, rateFilter }) => {

    return (
        <>
            <div className='ListMovie'>

                {input  ? movies.filter(el => el.titre.toLowerCase().includes(input.toLowerCase().trim())).map((movie, index) => (
                    <Moviecard movie={movie} />))

                    : (rateFilter ? movies.filter(el => el.rating===rateFilter.toString()).map((movie, index) => (
                    <Moviecard movie={movie} />)) 

                    :(!input && rateFilter !=0 ?  movies.filter(el => el.titre.toLowerCase().includes(input.toLowerCase().trim())&& el.rating===rateFilter.toString()).map((movie, index) => (
                        <Moviecard movie={movie} />))
                    
                    : (movies.map((movie,index)=>(<Moviecard movie={movie}/>)))
                    ))}
            

            </div>


        </>
    )
}

export default List
