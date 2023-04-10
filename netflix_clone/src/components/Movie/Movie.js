import ModalMovie from '../modalMovie/ModalMovie'
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useState } from 'react';

export default function Movie(props) {
    const imgSourse = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '400px' }}>
                <Card.Img variant="top" src={imgSourse} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>{props.movie.overview}</Card.Text>
                    <Button variant="primary" onClick={handleShow}>add to favorite</Button>
                </Card.Body>
            </Card>
            <ModalMovie show={show} handleClose={handleClose} moviedata={props.movie} movieImg={imgSourse} />
        </>
    )
}