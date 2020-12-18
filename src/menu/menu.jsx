import React, {useState, useEffect} from 'react';
import './menu.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
// Funktio vasemmassa laidassa olevan listan luomiseen.
const Menu = () => {
    return ( 
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/avauksienSelaaminen">Erilaisten avauksien selaaminen</Link>
                    </li>
                    <li>
                        <Link to="/avauksienMuokkaaminen">Avauksien muokkaaminen</Link>
                    </li>
                    <li>
                        <Link to="/avauksienLisaaminen">Avauksen lisääminen</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;