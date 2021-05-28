import React, { useState,useEffect } from 'react'
import Head from './components/Header'
import List from './components/MovieList'
import Add from './components/Modal'
import { data } from './components/data'
import Moviecard from './components/Moviecard'


const App = () => {

  const [input, setInput] = useState('')
  const [titre, setTitre] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [rating, setRating] = useState('')

  const[rateFilter,setRateFilter]=useState('')


  const [movies, setMovies] = useState(data)
  /*  const rate = (x) => {
   setMovies.filter((el)=>el.rating== x)}; */


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



  useEffect(() => {
    console.log('imen')
    movies.map((movie, index) => (
        <Moviecard movie={movie} />

    ))
    console.log('jb')
},[movies])
 




  return (
    <div>
      <Head setinput={setInput}  ></Head>
      <Add setTitre={setTitre} setImage={setImage}
        setDesc={setDesc} setRating={setRating} addItems={addItems} setRateFilter={setRateFilter} movies={movies} setMovies={setMovies}></Add>

      <List data={data} movies={movies}  input={input} rateFilter={rateFilter}></List>
    </div>
  )
}

export default App


