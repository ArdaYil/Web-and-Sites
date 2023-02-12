

import * as React from 'react';
import {Link} from "react-router-dom";
import "font-awesome/css/font-awesome.css";

interface MainNavBarProps {
    
}
 
interface MainNavBarState {
    
}
 
class MainNavBar extends React.Component<MainNavBarProps, MainNavBarState> {
    state: MainNavBarState = {}
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar">
                    <Link className="navbar__nav-title" to="/">Web & Sites</Link>
                    <i className="navbar__btn fa fa-bars"/>
                    <article className="navbar__nav-link-container">
                        <Link className="navbar__nav-link" to="/">Designer</Link>
                        <Link className="navbar__nav-link" to="/">Kontakta oss</Link>
                        <Link className="navbar__nav-link" to="/">Priser</Link>
                        <Link className="navbar__nav-link" to="/login">Logga in</Link>
                    </article>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default MainNavBar;