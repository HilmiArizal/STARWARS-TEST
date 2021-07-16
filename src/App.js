import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Content/Home/Home';
import Header from './Component/Header/Header';
import Character from './Content/Character/Character';
import { fetchCharacter } from './Service/ContentService/ContentService';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import Movies from './Content/Movies/Movies';
import MoviesId from './Content/MoviesId/MoviesId';
import CharacterId from './Content/CharacterId/CharacterId';

function App() {

  const page = useSelector((state) => state.character.page);
  const search = useSelector((state) => state.character.search);

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllCharacter() {
      await fetchCharacter(page, search).then((res) => {
        setCharacter(res);
        setLoading(true);
      })
    }

    fetchAllCharacter();
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
            <Route exact path="/character"><Character data={character} /></Route>
            <Route exact path="/character/:id" component={CharacterId}/>
            <Route exact path="/movies" component={Movies}/>
            <Route exact path="/movies/:id" component={MoviesId}/>
          </Switch>
        )
      }
    </div>
  );
}

export default App;
