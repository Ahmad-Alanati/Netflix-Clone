import ModalMovie from '../modalMovie/ModalMovie'
import { Button } from 'bootstrap'
import Card from "react-bootstrap/Card";
import { useState } from 'react';

export default function Movie(props) {

    /*const [movie, setMovie] = useState({});

    const AddToFav =()=>{
        setMovie(props.movie) 
    }
    <Button variant="primary" onClick={AddToFav}>show details</Button>
*/
    return (
        <>
            <Card>
                <ModalMovie movieName={props.movie.title} movieImg={props.movie.poster_path} movieOverview={props.movie.overview}/>
            </Card>


        </>
    )
}