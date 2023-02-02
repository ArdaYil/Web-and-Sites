

import * as React from 'react';

interface CheckboxProps {
    name: string,
    label: string,
    className: string
}
 
interface CheckboxState {
    
}
 
class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    state: CheckboxState = {}

    render() { 
        const {name, label, className} = this.props;
        
        return (
            <label htmlFor={name}>
                <input
                    type="checkbox"
                    id={name}
                    className={className}
                />
                {label}
            </label>
        );
    }
}
 
export default Checkbox;