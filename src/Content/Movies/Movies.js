import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import StarwarsCard from '../../Asset/Image/starwars-card.jpg';
import { fetchMovies } from '../../Service/ContentService/ContentService';
import './Movies.css';

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    function openingCrawl(value) {
        var cutChar = value.indexOf(' ', 30);
        if (cutChar === -1) return value;
        return value.substring(0, cutChar);
    }

    useEffect(() => {
        async function fetchAllMovies() {
            await fetchMovies().then((res) => {
                console.log(res)
                setMovies(res);
                setLoading(true);
            })
        }

        fetchAllMovies();
    }, [])

    return (
        <div className="body-movies">
            {
                !loading ? (
                    <Dimmer active interved>
                        <Loader interved>Loading</Loader>
                    </Dimmer>
                ) : (
                    <div className="row">
                        {
                            movies.results.map((item, index) => {
                                const moviesUrl = item.url.split("/").filter(Boolean);
                                const moviesId = moviesUrl[moviesUrl.length - 1];
                                return (
                                    <div className="col-md-3" key={index}>
                                        <div className="ui link cards">
                                            <Link to={`/movies/${moviesId}`}>
                                                <div className="card">
                                                    <div className="image">
                                                        <img src={StarwarsCard} alt="img-movies" width="100%" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="header">{item.title}</div>
                                                        <div className="meta">
                                                            <div>{item.director}</div>
                                                        </div>
                                                        <div className="description" style={{ fontSize: "12px" }}>
                                                            {openingCrawl(item.opening_crawl)}...
                                                        </div>
                                                    </div>
                                                    <div className="extra content">
                                                        <span className="right floated">
                                                            {item.release_date}
                                                        </span>
                                                        <span>
                                                            <i className="user icon"></i>
                                                            {item.episode_id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                )
            }
        </div>
    )


}