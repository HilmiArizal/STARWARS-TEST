import React from 'react';
import './Home.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <div className="body-home">
            <div className="search-home">
                <div className="search-movies">
                    <Link to="/movies">
                        <Button primary style={{ width: '150px' }}>Movie</Button>
                    </Link>
                </div>

                <div className="search-movies">
                    <Link to="/character">
                        <Button primary style={{ width: '150px' }}>Character</Button>
                    </Link>
                </div>
            </div>

        </div>
    )

}