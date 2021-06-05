import React, { useState, useEffect } from 'react'
import Head from './components/Header'
import List from './components/MovieList'
import Add from './components/Modal'
import { data } from './components/data'
import Moviecard from './components/Moviecard'
import { Button } from 'react-bootstrap'
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movie from './components/Movie'


const App = () => {
  const [movies, setMovies] = useState(data)
  const [input, setInput] = useState('')
  const [titre, setTitre] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [rating, setRating] = useState('')
  const [rateFilter, setRateFilter] = useState('')
  const [starValue, setStarValue] = useState('')


  const addItems = (e) => {
    e.preventDefault()
    let newMovie = {
      titre,
      image,
      desc,
      rating
    }
    setMovies([...movies, newMovie])
  }


  return (




    <div>

      <BrowserRouter>
        <Route exact path='/' render={() => <Head setinput={setInput}  ></Head>} />
        <Route exact path='/' render={() => <Add setTitre={setTitre} setImage={setImage}
          setDesc={setDesc} setRating={setRating} addItems={addItems}
          setRateFilter={setRateFilter} movies={movies} setMovies={setMovies} ></Add>} />
        <Route exact path='/' render={() => <List data={data} movies={movies} input={input} rateFilter={rateFilter}></List>} />
        <Route exact path='/Movie/:id' render={defaultProps => (<Movie movies={movies} defaultProps={defaultProps} />)} />

      </BrowserRouter>
      {/* <Route exact path='/Movie'  component={Movie}/> */}


    </div>

  )
}
export default App


