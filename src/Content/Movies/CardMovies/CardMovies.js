import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../../Context';
import StarwarsCard from '../../../Asset/Image/starwars-card.jpg';


export const CardMovies = () => {

    const { movies } = useContext(ItemContext);

    const openingCrawl = (value) => {
        var cutChar = value.indexOf(' ', 30);
        if (cutChar === -1) return value;
        return value.substring(0, cutChar);
    }

    return (
        <>
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
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </>
    )

}