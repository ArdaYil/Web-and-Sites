

import * as React from 'react';
import { Link } from 'react-router-dom';
import Form from "../common/form";

interface LoginProps {
    
}
 
interface LoginState {
    
}
 
class Login extends Form<LoginProps, LoginState> {
    state: LoginState = {}

    render(): JSX.Element { 
        const inputClass = "auth-form"
        const newsLetterText = "Vill du få nyhetsbrev av oss?"

        return (
            <React.Fragment>
                <form className="auth-form">
                    <article className="auth-form__btn-holder">
                        <h1 className="auth-form__btn-holder__current-operation">Logga in</h1>
                        <Link className="auth-form__btn-holder__next-operation" to="/register">Registrera</Link>
                    </article>
                    <article className="auth-form__input-holder">
                        {this.renderInput("Användarnamn", "username", inputClass)}
                        {/* {this.renderInput("Email Address", "email", "email")} */}
                        {this.renderInput("Lösenord", "password", inputClass, "password")}
                    </article>
                    {this.renderCheckbox("newsletter", newsLetterText)}
                    {this.renderSubmit("Logga in")}
                </form>
            </React.Fragment>
        );
    }
}
 
export default Login;