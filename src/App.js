import './App.css';
import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import MoviesJson from './movies.json';
import Pagination from "./Pagination";
import {useState} from "react";

function App() {

    const [currentPage, setCurrentPage] = useState(1);
    const MOVIES_PER_PAGE = 4;
    let movies = MoviesJson;

    const loadMovies = () => {
        movies = movies.slice((currentPage - 1) * MOVIES_PER_PAGE, currentPage * MOVIES_PER_PAGE);
    };

    const getTotalPages = () => {
        let amountMovies = MoviesJson.length;
        return Math.ceil( amountMovies / MOVIES_PER_PAGE);
    }

    loadMovies();

  return (
      <PageWrapper>

          {movies.map(movie =>
             <Movie title={movie.title} rating={movie.rating}
                    director={movie.director} actors={movie.actors}
                    year={movie.year} duration={movie.duration} img={movie.img}>
                 {movie.desc}
              </Movie>
          )}

          <Pagination currentPage={currentPage} total={getTotalPages()} onChange={(page) => {
              setCurrentPage(page);
          }}>

          </Pagination>

      </PageWrapper>
      );
}

export default App;
