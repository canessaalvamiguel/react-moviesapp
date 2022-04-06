import './App.css';
import MovieList from "./components/MovieList";
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Blog from "./components/Blog";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<MovieList/>}/>
              <Route path="/blog" element={<Blog/>}/>
          </Routes>
      </Router>
      );
}

export default App;
