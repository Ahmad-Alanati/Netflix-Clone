import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function ModalFavMovie(props) {
    const userComment = useRef();

    async function submitHandler(e){
        e.preventDefault();
        let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${props.moviedata.id}`
        let comment = userComment.current.value
        const response = await fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(comment),
        })
        if(response.status===201){
            alert(`the movie ${props.moviedata.id} has been updated`);
        }
    }

    return(
        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{props.moviedata.title}</Modal.Title>
            </Modal.Header>
            <img src={props.movieImg} alt={props.moviedata.title} />
            <Modal.Body>
                {props.moviedata.overview}
                <Form>
                    <Form.Group className="mb-3" controlId="comment">
                        <Form.Label>comment</Form.Label>
                        <Form.Control ref={userComment} type="text" placeholder="enter your comment" />
                    </Form.Group>
                    <Button variant="primary" type='submit' onClick={(e)=>submitHandler(e)}>
                        update comment
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}