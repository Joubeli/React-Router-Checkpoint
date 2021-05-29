import React, { useState,useEffect } from 'react'
import Head from './components/Header'
import List from './components/MovieList'
import Add from './components/Modal'
import { data } from './components/data'
import Moviecard from './components/Moviecard'


const App = () => {
  const [movies, setMovies] = useState(data)
  const [input, setInput] = useState('')
  const [titre, setTitre] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [rating, setRating] = useState('')
  const[rateFilter,setRateFilter]=useState('')
  
  
  const addItems = (e) => {
    e.preventDefault()
    let newMovie={
      titre,
      image,
      desc,
      rating
    }
    setMovies([...movies,newMovie])
  } 

  return (
    <div>
      <Head setinput={setInput}  ></Head>

      <Add setTitre={setTitre} setImage={setImage}
        setDesc={setDesc} setRating={setRating} addItems={addItems}
        setRateFilter={setRateFilter} movies={movies} setMovies={setMovies}></Add>

      <List data={data} movies={movies} input={input} rateFilter={rateFilter}></List>

    </div>
  )
}
export default App


