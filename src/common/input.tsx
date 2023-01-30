

import * as React from 'react';

interface InputProps {
    label: string;
    name: string;
}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {
    state: InputState = {}

    render() { 
        const {label} = this.props;

        return (
            <label>
                <input 
                    type="text" placeholder={label} 
                />
            </label>
        );
    }
}
 
export default Input;