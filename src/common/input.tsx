

import * as React from 'react';
import AppContext from '../context/AppContext';

interface InputProps {
    label: string;
    value: string;
    name: string;
    type: string;
    onChange: Function,
    className: string;
}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state: InputState = {}

    render() { 
        const {label, type, name, className, value, onChange} = this.props;
       
        return (
            <input
                onChange={e => onChange(name, e.target.value)}
                value={value}
                className={className} 
                type={name}
                placeholder={label} 
            />
        );
    }
}
 
export default Input;