import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import './App.scss';
import MovieList from "./components/movieList/MovieList";
import Movie from "./pages/movieDetail/movie";

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movie/:id" element={ <Movie /> } />
          <Route path="/movies/:type" element={ <MovieList /> } />
          <Route path="/*" element={ <h1>Error page</h1> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
