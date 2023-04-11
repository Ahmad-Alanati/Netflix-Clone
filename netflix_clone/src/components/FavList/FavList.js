import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalFavMovie from './ModalFavMovie/ModalFavMovie'

export default function FavList() {
    const [favMovies, setFavMovies] = useState([]);
    const imgSourse = `https://image.tmdb.org/t/p/w500`;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    async function getFavMovies() {
        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/getMovies`, {
            method: 'GET',
        });
        const moviesData = await response.json();
        setFavMovies(moviesData);
    }

    async function handleDelete(id) {
        const url = process.env.REACT_APP_SERVER_URL;
        console.log(favMovies);
        const response = await fetch(`${url}/DELETE/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (response.status === 204) {
            getFavMovies();
        }
    }
    useEffect(() => {
        getFavMovies();
    }, []);
    return (
        <>
            {
                favMovies.map(movie => {
                    return (
                        <>
                            <Card style={{ width: '400px' }}>
                                <Card.Img variant="top" src={imgSourse + movie.poster_path} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <Card.Text>{`you comment is :${movie.comment}`}</Card.Text>
                                    <Button variant="primary" onClick={()=>handleDelete(movie.id)}>delete from Favorite</Button>
                                    <Button variant="primary" onClick={handleShow}>update comment</Button>
                                </Card.Body>
                            </Card>
                            <ModalFavMovie show={show} handleClose={handleClose} moviedata={movie} movieImg={imgSourse + movie.poster_path} />
                        </>
                    )
                })
            }
        </>
    )
}
