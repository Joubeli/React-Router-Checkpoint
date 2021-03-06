import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
    return (
        <div>
            <div className='Movie'>
                <img className='ImageMovie' src={movie.image} alt='Movie' />
                <div className='Title-rating'>
                    <h6>{movie.titre}</h6>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={movie.rating} />
                </div>
                <div className='MovieOver'>
                    <h2 style={{ color: 'blue' }}>Overview</h2>
                    <p>{movie.desc}</p>
                    <Link to={`/Movie/${movie.titre}`} rel="noopener noreferrer">Trailer</Link>
                </div>
            </div>

           {/*<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='trailer'>
                        <span >Film Rate</span>
                        <StarRatingComponent
                            starCount={5}
                            value={movie.rating}/>
                    </div>
                    <div className='trailer'>
                        <span >Film Type</span>
                        <span className='movietype'>{movie.filmtype}</span>
                    </div>
                    <iframe width="470" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}

export default Moviecard
