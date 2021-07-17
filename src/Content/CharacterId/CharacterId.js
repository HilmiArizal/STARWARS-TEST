import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import { fetchCharacterId, fetchMoviesId } from '../../Service/ContentService/ContentService';
import './CharacterId.css';

export default function CharacterId(props) {

    let characterId = props.match.params.id;

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchAllCharacterId() {
            fetchCharacterId(characterId).then((res) => {
                setCharacter(res);
                setLoading(true);
            })
        }

        fetchAllCharacterId();
    }, [characterId]);

    return (
        <div className="body-characterId-character">
            {!loading ? (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            ) : (
                    <div>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Name </td>
                                    <td>{character.name}</td>
                                </tr>
                                <tr>
                                    <td>Height </td>
                                    <td>{character.height}</td>
                                </tr>
                                <tr>
                                    <td>Mass </td>
                                    <td>{character.mass}</td>
                                </tr>
                                <tr>
                                    <td>Gender </td>
                                    <td>{character.gender}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-2">
                            <div className="mb-3">Films :</div>
                            {character.films.map((item) => {
                                const filmsUrl = item.split('/').filter(Boolean);
                                const filmsId = filmsUrl[filmsUrl.length - 1];
                                return (<MoviesId id={filmsId} key={filmsId} />);
                            })}
                        </div>
                    </div>
                )}
        </div>
    )

}

function MoviesId(props) {

    const { id } = props;

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        function fetchAllMoviesId() {
            fetchMoviesId(id).then((res) => {
                setMovie(res);
                setLoading(true);
            })
        }

        fetchAllMoviesId();
    }, [id]);

    return (
        <div className="body-movieId">

            {!loading ? (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            ) : (
                    <div>
                        <ul>
                            <li>
                                <Link to={`/movies/${id}`}>{movie.title}</Link>
                            </li>
                        </ul>
                    </div>
                )
            }

        </div>
    )

}