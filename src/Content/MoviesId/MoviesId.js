import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { fetchCharacterId, fetchMoviesId } from '../../Service/ContentService/ContentService';
import StarwarsCard from '../../Asset/Image/starwars-card.jpg';
import './MoviesId.css';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function MoviesId(props) {

    let moviesId = props.match.params.id;

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchAllMoviesId() {
            await fetchMoviesId(moviesId).then((res) => {
                setMovies(res);
                setLoading(true);
            })
        }

        fetchAllMoviesId();
    }, [moviesId]);

    return (
        <div className="body-moviesId">
            {
                !loading ? (
                    <Dimmer active interved>
                        <Loader interved>Loading</Loader>
                    </Dimmer>
                ) : (
                    <div>
                        <div className="image">
                            <img src={StarwarsCard} alt="img-starwars" />
                        </div>

                        <div className="title mt-5">
                            <div>{movies.title}</div>
                        </div>

                        <div className="release mt-2">
                            <div>{movies.release_date}</div>
                        </div>

                        <div className="opening mt-3">
                            <p>{movies.opening_crawl}</p>
                        </div>

                        <div className="actor mt-3">
                            <div className="mb-3">Character :</div>
                            {
                                movies.characters.map((item) => {
                                    const characterUrl = item.split('/').filter(Boolean);
                                    const characterId = characterUrl[characterUrl.length - 1];
                                    return (<CharacterId id={characterId} key={characterId} />);
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

function CharacterId(props) {

    let { id } = props;

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function fetchAllCharacterId() {
            fetchCharacterId(id).then((res) => {
                setCharacter(res);
            })
        }

        fetchAllCharacterId();
    }, [id]);

    return (
        <div className="body-characterId-movie">
            <ul>
                <li>
                    <Link to={`/character/${id}`}>{character.name}</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(MoviesId);