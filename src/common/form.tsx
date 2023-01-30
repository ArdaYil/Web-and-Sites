

import * as React from 'react';
import Input from './input';

interface FormProps {
    
}
 
interface FormState {
    
}
 
class Form<Props, State> extends React.Component<FormProps, FormState> {
    state: FormState = {}

    renderInput = (label: string, name: string): JSX.Element => {
        return <Input 
            label={label}
            name={name}
        />
    }
}
 
export default Form;