

import * as React from 'react';
import Hero from "./hero";
import Main from './main';

interface HomepageProps {
    
}
 
interface HomepageState {
    
}
 
class Homepage extends React.Component<HomepageProps, HomepageState> {
    state: HomepageState = {}

    render() { 
        return (
            <React.Fragment>
                <Hero />
                <Main />
            </React.Fragment>
        );
    }
}
 
export default Homepage;