import React, { useEffect, useState } from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';
import { ItemContext } from '../../Context';
import { MoviesHome } from './SearchMoviesHome/MoviesHome';
import { CharacterHome } from './SearchCharacterHome/CharacterHome';
import { fetchMovies, fetchSearchCharacter } from '../../Service/ContentService/ContentService';


export default function Home() {

    const [movies, setMovies] = useState('');
    const [character, setCharacter] = useState('');
    const [moviesId, setMoviesId] = useState(0);
    const [characterId, setCharacterId] = useState(0);
    const [redirectMovie, setRedirectMovie] = useState(false);
    const [redirectCharacter, setRedirectCharacter] = useState(false);


    useEffect(() => {
        async function fetchAllMoviesId() {
            if (movies !== '') {
                fetchMovies(movies).then((res) => {
                    if (res.count > 0) {
                        const moviesUrl = res.results[0].url.split('/').filter(Boolean);
                        const moviesUrlId = moviesUrl[moviesUrl.length - 1];
                        setMoviesId(parseInt(moviesUrlId));
                        setRedirectMovie(true);
                    } else {
                        alert('Tidak ada data!')
                    }
                })
            }
        }

        async function fetchAllCharacterId() {
            if (character !== '') {
                fetchSearchCharacter(character).then((res) => {
                    if (res.count > 0) {
                        const characterUrl = res.results[0].url.split('/').filter(Boolean);
                        const characterUrlId = characterUrl[characterUrl.length - 1];
                        setCharacterId(parseInt(characterUrlId));
                        setRedirectCharacter(true);
                    } else {
                        alert('Tidak ada data!')
                    }
                })
            }
        }

        fetchAllMoviesId();
        fetchAllCharacterId();
    }, [movies, character]);

    if (redirectMovie) {
        return (
            <Redirect to={`/movies/${moviesId}`}></Redirect>
        )
    } else if (redirectCharacter) {
        return (
            <Redirect to={`/character/${characterId}`}></Redirect>
        )
    }

    return (
        <div className="body-home">

            <ItemContext.Provider value={{ mov: setMovies, char: setCharacter }}>
                <div className="search-home">
                    <div className="sub-search-home left">
                        <MoviesHome />
                    </div>

                    <div className="sub-search-home right">
                        <CharacterHome />
                    </div>
                </div>
            </ItemContext.Provider>

        </div>
    )

}