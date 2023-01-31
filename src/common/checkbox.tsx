

import * as React from 'react';

interface CheckboxProps {
    name: string,
    label: string
}
 
interface CheckboxState {
    
}
 
class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    state: CheckboxState = {}

    render() { 
        const {name, label} = this.props;
        
        return (
            <label htmlFor={name}>
                <input
                    type="checkbox"
                    id={name}
                />
                {label}
            </label>
        );
    }
}
 
export default Checkbox;