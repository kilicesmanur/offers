import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
            <a className="navbar-brand cl-red" href="/">OFFERS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse cl-red" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link cl-red" href="#"><Link to={"/case1"} > Case1</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cl-red " href="#"><Link to={"/case2"} > Case2</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cl-red" href="#"><Link to={"/case3"} > Case3</Link></a>
                    </li>
                </ul>
                <span className="navbar-text cl-red">
                    Dilediğiniz tüm tekliflere buradan ulaşabilirsiniz.
                </span>
            </div>
        </nav>
    );
}

export default Header;
