import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Content/Home/Home';
import Header from './Component/Header/Header';
import Character from './Content/Character/Character';
import Movies from './Content/Movies/Movies';
import MoviesId from './Content/MoviesId/MoviesId';
import CharacterId from './Content/CharacterId/CharacterId';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/" component={Home} exact />
      <Route exact path="/character"><Character/></Route>
      <Route exact path="/character/:id" component={CharacterId} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/:id" component={MoviesId} />
    </div>
  );
}

export default App;
