import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Menu, Table } from 'semantic-ui-react';
import { characterAction } from '../../Redux/Action/index';
import './Character.css';

export default function Character({ data }) {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();
    const { pageCharacter, searchCharacter } = bindActionCreators(characterAction, dispatch);

    function handlePageClick(e, { name }) {
        if (!(name < 1) && !(name > data.count)) {
            setPage(name);
            pageCharacter(name);
            searchCharacter(search)
        }
    }

    function handleSearchClick(e) {
        if (e.key === "Enter") {
            pageCharacter(page);
            searchCharacter(search);
        }
    }

    return (
        <div className="body-character">

            <div className="ui action input mb-3">
                <input type="text" placeholder="Search character..." onKeyPress={handleSearchClick} onChange={(e) => setSearch(e.target.value)} />
                <button className="ui icon button" onClick={handleSearchClick}>
                    <i className="search icon"></i>
                </button>
            </div>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>No. </Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Height</Table.HeaderCell>
                        <Table.HeaderCell>Mass</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {
                    data.results.map((item, index) => {
                        return (
                            <Table.Body key={index}>
                                <Table.Row>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.height}</Table.Cell>
                                    <Table.Cell>{item.mass}</Table.Cell>
                                    <Table.Cell>{item.gender}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        )
                    })
                }

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item name={page - 1} icon onClick={handlePageClick}>
                                    <Icon name='chevron left' />
                                </Menu.Item>

                                <Menu.Item name={1} active={page === 1} onClick={handlePageClick}>1</Menu.Item>
                                <Menu.Item name={2} active={page === 2} onClick={handlePageClick}>2</Menu.Item>
                                <Menu.Item name={3} active={page === 3} onClick={handlePageClick}>3</Menu.Item>
                                <Menu.Item name={4} active={page === 4} onClick={handlePageClick}>4</Menu.Item>
                                <Menu.Item name={5} active={page === 5} onClick={handlePageClick}>5</Menu.Item>

                                <Menu.Item name={page + 1} icon onClick={handlePageClick}>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )

}