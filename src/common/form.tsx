

import * as React from 'react';
import Input from './input';
import Checkbox from './checkbox';

interface FormProps {
    
}
 
interface FormState {
    
}
 
class Form<Props, State> extends React.Component<FormProps, FormState> {
    state: FormState = {}

    private inputClassName = (className: string) => className + "__input"

    handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    renderInput = (label: string, name: string, className: string, value: string, onChange: Function, type: string = "text"): JSX.Element => {
        return <Input
            className={this.inputClassName(className)}
            value={value}
            label={label}
            name={name}
            onChange={onChange}
            type={type}
        />
    }

    renderSubmit = (text: string): JSX.Element => {
        return (
            <button type="submit">
                {text}
            </button>
        )
    }

    renderCheckbox = (name: string, text: string, value: string, className: string): JSX.Element => {
        return <Checkbox
            name={name}
            label={text}
            className={className}
         />
    }
}
 
export default Form;