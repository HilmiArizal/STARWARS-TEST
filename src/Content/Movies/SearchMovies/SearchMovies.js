import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../Context';


export const SearchMovies = () => {

    const { searchMov } = useContext(ItemContext);

    const [searchMovies, setSearchMovies] = useState('');

    const handleChangeSearchMov = (e) => {
        setSearchMovies(e.target.value);
    }

    const handleSubmitSearchMov = (e) => {
        e.preventDefault();
        searchMov(searchMovies);
    }

    return (
        <>
            <form onSubmit={handleSubmitSearchMov}>
                <div className="ui action input mb-3">
                    <input type="text" placeholder="Search Movies..." onChange={handleChangeSearchMov} />
                    <button className="ui icon button">
                        <i className="search icon"></i>
                    </button>
                </div>
            </form>
        </>
    )
}