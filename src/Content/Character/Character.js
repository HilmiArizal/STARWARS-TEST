import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { ItemContext } from '../../Context';
import { fetchCharacter } from '../../Service/ContentService/ContentService';
import { TableCharacter } from './TableCharacter/TableCharacter';
import { SearchCharacter } from './SearchCharacter/SearchCharacter';
import './Character.css';

// USING REDUX
// import { bindActionCreators } from 'redux';
// import { useDispatch } from 'react-redux';
// import { characterAction } from '../../Redux/Action/index';

export default function Character() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

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
        <div className="body-character">
            {
                !loading ? (
                    <Dimmer inverted>
                        <Loader active inverted></Loader>
                    </Dimmer>
                ) : (
                        <ItemContext.Provider value={{ character, pageChar: setPage, searchChar: setSearch }}>
                            <SearchCharacter />
                            <TableCharacter />
                        </ItemContext.Provider>
                    )
            }
        </div>
    )

}