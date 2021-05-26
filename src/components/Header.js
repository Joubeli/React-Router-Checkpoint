import React, { useState } from 'react'
import { nav, Form, Button, Row, Col, Modal } from 'react-bootstrap'
import '../App.css'

const Head = (props) => {

    const[srate,setSrate]=useState('')

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand"> <img width='84px' height='40px' src='./movie.gif' alt='logo' />Movie Store</a>
                <div className='nav-search'>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control className='search' onChange={(e) => props.setinput(e.target.value)} type="text" placeholder="Search Film" />
                                 {/*    <Form.Control className='search' onChange={(e) => setSrate(e.target.value)} type="text" placeholder="Search Film" value={srate}/>
                                    <Button onClick={(srate)=>props.rate(srate)}/>
                                */}
                                </Form.Group>
                            </Col>
                            
                        </Row>
                      
                    </Form>
                  
                </div>
            </nav>

        </div>
    )
}

export default Head
