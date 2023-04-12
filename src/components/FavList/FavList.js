import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function FavList() {
    const [favMovies, setFavMovies] = useState([]);
    const imgSourse = `https://image.tmdb.org/t/p/w500`;

    async function getFavMovies() {
        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/getMovies`, {
            method: 'GET',
        });
        const moviesData = await response.json();
        setFavMovies(moviesData);
    }

    async function updateHandler(id){
        let newComment = prompt("enter your comment");
        let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
        let data ={
            id:favMovies.id,
            title:favMovies.title,
            release_date:favMovies.release_date,
            poster_path:`${imgSourse}${favMovies.poster_path}`,
            overview:favMovies.overview,
            comment:newComment,
        }
        console.log(id);
        const response = await fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
        })
        .then(()=>{
            getFavMovies();
        })
        .catch((error)=>{
            alert(error);
        })
    }

    async function handleDelete(id) {
        const url = process.env.REACT_APP_SERVER_URL;
        console.log(favMovies);
        const response = await fetch(`${url}/DELETE/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(()=>{
            getFavMovies();
        })
        .catch((error)=>{
            alert(error);
        })
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
                                    <Button variant="primary" onClick={()=>updateHandler(movie.id)}>update comment</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })
            }
        </>
    )
}
