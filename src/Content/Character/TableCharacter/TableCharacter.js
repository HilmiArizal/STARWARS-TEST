import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../Context';
import { Icon, Menu, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const TableCharacter = () => {

    const { character, pageChar } = useContext(ItemContext);

    const [pageCharacter, setPageCharacter] = useState(0);

    const handleSubmitPage = (e, { name }) => {
        setPageCharacter(name);
        if (!(name < 1) && !(name > character.count)) {
            pageChar(name);
        }
    }

    return (
        <>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Height</Table.HeaderCell>
                        <Table.HeaderCell>Mass</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {
                    character.results.map((item, index) => {
                        const characterUrl = item.url.split('/').filter(Boolean);
                        const characterId = characterUrl[characterUrl.length - 1];
                        return (
                            <Table.Body key={index}>
                                <Table.Row>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.height}</Table.Cell>
                                    <Table.Cell>{item.mass}</Table.Cell>
                                    <Table.Cell>{item.gender}</Table.Cell>
                                    <Table.Cell>
                                        <center>

                                        <Link to={`/character/${characterId}`}>
                                            List Films
                                        </Link>
                                        </center>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        )
                    })
                }

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item name={pageCharacter - 1} icon onClick={handleSubmitPage}>
                                    <Icon name='chevron left' />
                                </Menu.Item>

                                <Menu.Item name={1} active={pageCharacter === 1} onClick={handleSubmitPage}>1</Menu.Item>
                                <Menu.Item name={2} active={pageCharacter === 2} onClick={handleSubmitPage}>2</Menu.Item>
                                <Menu.Item name={3} active={pageCharacter === 3} onClick={handleSubmitPage}>3</Menu.Item>
                                <Menu.Item name={4} active={pageCharacter === 4} onClick={handleSubmitPage}>4</Menu.Item>
                                <Menu.Item name={5} active={pageCharacter === 5} onClick={handleSubmitPage}>5</Menu.Item>

                                <Menu.Item name={pageCharacter + 1} icon onClick={handleSubmitPage}>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </>
    )

}