import React,{useState} from 'react'
import {Form, Button,Modal } from 'react-bootstrap'
import '../App.css'

const Add = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button className='add' variant="info" onClick={handleShow}>Add Movie</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your favorite Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control onChange={(e) => props.setTitre(e.target.value)} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control onChange={(e) => props.setImage(e.target.value)} type="text" placeholder="Image Link" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => props.setDesc(e.target.value)} type="text" placeholder="Description" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Rating ***</Form.Label>
                            <Form.Control onChange={(e) => props.setRating(e.target.value)} type="text" placeholder="Rating" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                            </Button>
                    <Button variant="primary" onClick={props.setMovies} >
                        Save Changes
                            </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Add
