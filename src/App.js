import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Content/Home/Home';
import Header from './Component/Header/Header';
import Character from './Content/Character/Character';
import { fetchCharacter, fetchMovies } from './Service/ContentService/ContentService';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import Movies from './Content/Movies/Movies';

function App() {


  const page = useSelector((state) => state.character.page);
  const search = useSelector((state) => state.character.search);
  const [character, setCharacter] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function fetchAllCharacter() {
      fetchCharacter(page, search).then((res) => {
        setCharacter(res);
        setLoading(true);
      })
    }

    function fetchAllMovies() {
      fetchMovies().then((res) => {
        setMovies(res);
        setLoading(true);
      })
    }

    fetchAllCharacter();
    fetchAllMovies();
  }, [page, search]);

  return (
    <div className="App">
      <Header />
      <Route path="/" component={Home} exact />
      {
        !loading ? (
          <Dimmer active interved>
            <Loader interved>Loading</Loader>
          </Dimmer>
        ) : (
          <Switch>
            <Route exact path="/movies"><Movies data={movies} /></Route>
            <Route exact path="/character"><Character data={character} /></Route>
          </Switch>
        )
      }
    </div>
  );
}

export default App;
