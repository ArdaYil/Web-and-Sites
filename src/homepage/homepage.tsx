

import * as React from 'react';

interface HomepageProps {
    
}
 
interface HomepageState {
    
}
 
class Homepage extends React.Component<HomepageProps, HomepageState> {
    state: HomepageState = {}

    render() { 
        return (
            <React.Fragment>
                <h1>Homepage</h1>
            </React.Fragment>
        );
    }
}
 
export default Homepage;