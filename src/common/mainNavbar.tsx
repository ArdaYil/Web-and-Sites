

import * as React from 'react';
import {Link} from "react-router-dom";

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
                    <article>
                        <Link className="navbar__nav-link" to="/">Designer</Link>
                        <Link className="navbar__nav-link" to="/">Kontakta oss</Link>
                        <Link className="navbar__nav-link" to="/">Priser</Link>
                        <Link className="navbar__nav-link" to="/">Logga in</Link>
                    </article>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default MainNavBar;