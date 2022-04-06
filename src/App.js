import './App.css';
import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import PeliculasJson from './movies.json';

function App() {

    let movies = PeliculasJson;

  return (
      <PageWrapper>

          {movies.map(movie =>
             <Movie title={movie.title} rating={movie.rating}
                    director={movie.director} actors={movie.actors}
                    year={movie.year} duration={movie.duration} img={movie.img}>
                 {movie.desc}
              </Movie>
          )}
      </PageWrapper>
      );
}

export default App;
