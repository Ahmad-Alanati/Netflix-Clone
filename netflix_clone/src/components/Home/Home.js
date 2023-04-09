import MovieList from "../MovieList/MovieList"
import { useState, useEffect } from "react";

export default function Home() {
    const [movies, setMovies] = useState([]);
    async function getMovies() {
        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        const moviesData = await response.json();
        setMovies(moviesData);
    }
    useEffect(() => {
        getMovies();

    }, []);
    return (
        <>
            <MovieList movies={movies} />
        </>
    )
}