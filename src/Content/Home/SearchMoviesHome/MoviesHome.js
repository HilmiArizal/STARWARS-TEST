import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../Context';


export const MoviesHome = () => {

    const { mov } = useContext(ItemContext);

    const [searchMovies, setSearchMovies] = useState('');

    const handleChangeSearchMov = (e) => {
        setSearchMovies(e.target.value);
    }

    const handleSubmitSearchMov = (e) => {
        e.preventDefault();
        mov(searchMovies);

        setSearchMovies('');
    }

    return (
        <>
            <form onSubmit={handleSubmitSearchMov}>
                <div className="ui action input mb-3">
                    <input type="text" value={searchMovies} placeholder="Movies By Character..." onChange={handleChangeSearchMov} />
                    <button className="ui icon button" onClick={handleSubmitSearchMov}>
                        <i className="search icon"></i>
                    </button>
                </div>
            </form>
        </>
    )

}