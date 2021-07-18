import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { ItemContext } from '../../Context';
import { fetchMovies } from '../../Service/ContentService/ContentService';
import { CardMovies } from './CardMovies/CardMovies';
import { SearchMovies } from './SearchMovies/SearchMovies';
import './Movies.css';

export default function Movies() {

    const [searchMovies, setSearchMovies] = useState('');

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchAllMovies() {
            await fetchMovies(searchMovies).then((res) => {
                setMovies(res);
                setLoading(true);
            })
        }
        fetchAllMovies();
    }, [searchMovies])

    return (
        <div className="body-movies">
            {
                !loading ? (
                    <Dimmer active interved>
                        <Loader interved>Loading</Loader>
                    </Dimmer>
                ) : (
                        <ItemContext.Provider value={{ movies, searchMov: setSearchMovies }}>
                            <div>
                                <SearchMovies />
                            </div>
                            <CardMovies />
                        </ItemContext.Provider>
                    )
            }
        </div>
    )
    
}