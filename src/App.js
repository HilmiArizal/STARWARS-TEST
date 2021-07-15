import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Content/Home/Home';
import Header from './Component/Header/Header';
import Character from './Content/Character/Character';
import { fetchCharacter } from './Service/ContentService/ContentService';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

function App() {

  
  const pages = useSelector((state) => state.character.page);
  console.log(pages);
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
    function fetchDefaultCharacter() {
      fetchCharacter(pages).then((res) => {
          setCharacter(res);
          setLoading(true);
      })
    }

    fetchDefaultCharacter();
  }, [pages]);

  return (
    <div className="App">
      <Header />
      <Route path="/" component={Home} exact />
      {
        !loading ? (<Dimmer active interved>
          <Loader interved></Loader>
        </Dimmer>
        )
          :
          (
            <Route path="/character"><Character data={character} /></Route>
          )
      }
    </div>
  );
}

export default App;
