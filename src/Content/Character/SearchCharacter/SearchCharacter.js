import React, { useContext, useState } from "react";
import { ItemContext } from "../../../Context";


export const SearchCharacter = () => {

    const { searchChar } = useContext(ItemContext);

    const [searchCharacter, setSearchCharacter] = useState('');

    const handleChangeSearchChar = (e) => {
        setSearchCharacter(e.target.value);
    }

    const handleSubmitSearchChar = (e) => {
        e.preventDefault();
        searchChar(searchCharacter);
    }

    return (
        <>
            <form onSubmit={handleSubmitSearchChar}>
                <div className="ui action input mb-3">
                    <input type="text" placeholder="Search character..." onChange={handleChangeSearchChar} />
                    <button className="ui icon button">
                        <i className="search icon"></i>
                    </button>
                </div>
            </form>
        </>
    )

}