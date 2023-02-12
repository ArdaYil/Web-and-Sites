

import * as React from 'react';
import Form from "../common/form";
import {Link} from "react-router-dom";
import AppContext from '../context/AppContext';


interface RegisterProps {
    
}
 
interface RegisterState {
    
}
 
class Register extends Form<RegisterProps, RegisterState>{
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>

    state: RegisterState = {}

    render() { 
        const inputClass = "auth-form";
        const newsLetterText = "Vill du få nyhetsbrev av oss?";
        const termsOfUseText = "Jag godkänner användar vilkoren";
        const {username, email, password, newsletter, termsOfUse} = this.context.authInput;

        return ( 
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <article className="auth-form__btn-holder">
                        <Link to="/login" className="auth-form__btn-holder__next-operation">Logga in</Link>
                        <h1 className="auth-form__btn-holder__current-operation">Registrera</h1>
                    </article>
                    <article className="auth-form__input-holder">
                        {this.renderInput("Användarnamn", "username", inputClass, username)}
                        {this.renderInput("Email Address", "email", inputClass, email, "email")}
                        {this.renderInput("Lösenord", "password", inputClass, password, "password")}
                    </article>
                    {this.renderCheckbox("newsletter", newsLetterText, newsletter, "auth-form__checkbox")}
                    {this.renderCheckbox("termsOfUse", termsOfUseText, termsOfUse, "auth-form__checkbox")}
                    {this.renderSubmit("Logga in")}
                </form>
            </React.Fragment>
        );
    }
}
 
export default Register;