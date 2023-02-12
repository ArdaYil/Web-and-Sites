

import * as React from 'react';

interface DomainPricesProps {
    
}
 
interface DomainPricesState {
    
}
 
class DomainPrices extends React.Component<DomainPricesProps, DomainPricesState> {
    state = {}
    render() { 
        return (
            <div className="domain-prices">
                <div className="domain-prices__price badge">.com SEK 100</div>
                <div className="domain-prices__price badge">.se SEK 120</div>
                <div className="domain-prices__price badge">.net SEK 70</div>
                <div className="domain-prices__price badge">.edu SEK 90</div>
                <div className="domain-prices__price badge">.org SEK 80</div>
                <div className="domain-prices__price badge">.gov SEK 100</div>
            </div>
        );
    }
}
 
export default DomainPrices;