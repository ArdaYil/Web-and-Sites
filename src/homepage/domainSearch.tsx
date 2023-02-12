

import * as React from 'react';
import Form from "../common/form";
import AppContext from '../context/AppContext';

interface DomainSearchProps {
    
}
 
interface DomainSearchState {
    
}
 
class DomainSearch extends Form<DomainSearchProps, DomainSearchState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>

    state = {}

    private getDomainInput = () => {
        const inputChanged = (name: string, value: string) => this.context.domainSearch.onChange(value);
        const domainSearch = this.context.domainSearch.value

        return (
            this.renderInput(
                "Sök efter ditt framtida domännamn...", 
                "domainName", 
                "domain",
                domainSearch,
                inputChanged
            )
        )
    }

    render() { 

        return (
            <section className="domain">
                <h2 className="section-title">Sök efter ditt domännamn!</h2>
                <div className="domain__input-wrapper">
                    {this.getDomainInput()}
                    {this.renderSubmit("Sök")}
                </div>
            </section>
        );
    }
}
 
export default DomainSearch;