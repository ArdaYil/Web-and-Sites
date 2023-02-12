

import * as React from 'react';
import { Link } from 'react-router-dom';
import Form from "../common/form";
import AppContext from '../context/AppContext';

interface LoginProps {
    
}
 
interface LoginState {
    
}
 
class Login extends Form<LoginProps, LoginState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state: LoginState = {}

    render(): JSX.Element { 
        const inputClass = "auth-form"
        const newsLetterText = "Vill du få nyhetsbrev av oss?"
        const {username, password} = this.context.authInput;
        const inputChanged = (name: string, value: string) => this.context.authInput.onChange(name, value);

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <article className="auth-form__btn-holder">
                        <h1 className="auth-form__btn-holder__current-operation">Logga in</h1>
                        <Link className="auth-form__btn-holder__next-operation" to="/register">Registrera</Link>
                    </article>
                    <article className="auth-form__input-holder">
                        {this.renderInput("Användarnamn", "username", inputClass, username, inputChanged)}
                        {this.renderInput("Lösenord", "password", inputClass, password, inputChanged, "password")}
                    </article>
                    {this.renderSubmit("Logga in")}
                </form>
            </React.Fragment>
        );
    }
}
 
export default Login;