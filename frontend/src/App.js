import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

export default function App() {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();

      try {
        // console.log(data);
        setLoading(false);
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAPI();
  }, []);

  return (
    <Router>
      <NavBar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Switch>
          <Route
            path='/'
            exact
            component={() => <MoviesList movies={movies} />}
          />
          <Route path='/add-movie' exact component={AddMovie} />
        </Switch>
      )}
    </Router>
  );
}
