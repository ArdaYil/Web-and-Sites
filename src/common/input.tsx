

import * as React from 'react';

interface InputProps {
    label: string;
    name: string;
    type: string;
    className: string;
}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {
    state: InputState = {}

    render() { 
        const {label, type, className} = this.props;

        return (
            <label>
                <input
                    className={className} 
                    type={type}
                    placeholder={label} 
                />
            </label>
        );
    }
}
 
export default Input;