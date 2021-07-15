import React, { useState } from 'react';
import StarwarsCard from '../../Asset/Image/starwars-card.jpg';
import './Movies.css';

export default function Movies({ data }) {

    return (
        <div className="body-movies">


            <div className="row">
                {
                    data.results.map((item, index) => {
                        return (
                            <div className="col-md-3">
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img src={StarwarsCard} alt="img-movies" width="100%" />
                                        </div>
                                        <div className="content">
                                            <div className="header">{item.title}</div>
                                            <div className="meta">
                                                <a>Friends</a>
                                            </div>
                                            <div className="description">
                                               {item.opening_crawl}
                                            </div>
                                        </div>
                                        <div className="extra content">
                                            <span className="right floated">
                                                Joined in 2013
                                            </span>
                                            <span>
                                                <i className="user icon"></i>
                                                75 Friends
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    )

}