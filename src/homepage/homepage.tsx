

import * as React from 'react';
import Hero from "./hero";

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
            </React.Fragment>
        );
    }
}
 
export default Homepage;