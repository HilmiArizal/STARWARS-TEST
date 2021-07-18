import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../Context';


export const CharacterHome = () => {

    const { char } = useContext(ItemContext);

    const [searchCharacter, setSearchCharacter] = useState('');

    const handleChangeSearchChar = (e) => {
        setSearchCharacter(e.target.value);
    }

    const handleSubmitSearchChar = (e) => {
        e.preventDefault();
        char(searchCharacter);

        setSearchCharacter('');
    }

    return (
        <>
            <form onSubmit={handleSubmitSearchChar}>
                <div className="ui action input mb-3">
                    <input type="text" value={searchCharacter} placeholder="Character By Movies..." onChange={handleChangeSearchChar} />
                    <button className="ui icon button">
                        <i className="search icon"></i>
                    </button>
                </div>
            </form>
        </>
    )

}