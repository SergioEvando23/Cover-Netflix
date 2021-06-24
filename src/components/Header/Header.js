import React from 'react';
import './Header.css';

const Header = ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="hearder--container--logo"> 
                <div className="header--logo">
                    <a href="/">
                        <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix-logo" />
                    </a>
                </div>
                <dl className="header--list">
                    <dd className="header--list--item"> Início </dd>
                    <dd className="header--list--item"> Assistir de novo </dd>
                    <dd className="header--list--item"> Séries </dd>
                    <dd className="header--list--item"> Filmes </dd>
                    <dd className="header--list--item"> Bombando </dd>
                    <dd className="header--list--item"> Minha lista </dd>
                </dl>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" alt="User" />
                </a>
            </div>
        </header>
    )
}

export default Header
