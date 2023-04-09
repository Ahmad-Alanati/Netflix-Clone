export default function ModalMovie(props) {
    return (
        <>
        <h3>{props.movieName}</h3>
        <img src={props.movieImg} alt={props.movieOverview} width="200px"/>
        </>
        
    )
}