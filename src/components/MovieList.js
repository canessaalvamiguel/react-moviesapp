import '../App.css';
import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import Pagination from "./Pagination";
import {useEffect, useState} from "react";

function MovieList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const MOVIES_PER_PAGE = 4;

    useEffect( () => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        let url = "https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json";
        let response = await fetch(url, {
            "method" : "GET",
            //"mode" : "no-cors",
            "headers" : {
                "Access-Control-Allow-Origin": "*",
                "Accept" : 'application/json',
                "Content-Type": 'application/json',
                "Origin": 'https://lucasmoy.dev'
            }
        });
        let json = await response.json();
        setMovies(json);
    };

    const getTotalPages = () => {
        let amountMovies = movies.length;
        return Math.ceil( amountMovies / MOVIES_PER_PAGE);
    };

    let moviesInPage = movies.slice((currentPage - 1) * MOVIES_PER_PAGE, currentPage * MOVIES_PER_PAGE);

    return (
        <PageWrapper>
            {moviesInPage.map(movie =>
                <Movie title={movie.titulo} rating={movie.calificacion}
                       director={movie.director} actors={movie.actores}
                       year={movie.fecha} duration={movie.duracion} img={movie.img}>
                    {movie.descripcion}
                </Movie>
            )}

            <Pagination currentPage={currentPage} total={getTotalPages()} onChange={(page) => {
                setCurrentPage(page);
            }}>

            </Pagination>

        </PageWrapper>
    );
}

export default MovieList;
