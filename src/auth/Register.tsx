

import * as React from 'react';
import Form from "../common/form";
import {Link} from "react-router-dom";


interface RegisterProps {
    
}
 
interface RegisterState {
    
}
 
class Register extends Form<RegisterProps, RegisterState>{
    state: RegisterState = {}

    render() { 
        const inputClass = "auth-form";
        const newsLetterText = "Vill du få nyhetsbrev av oss?";

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <article className="auth-form__btn-holder">
                        <h1 className="auth-form__btn-holder__current-operation">Registrera</h1>
                        <Link className="auth-form__btn-holder__next-operation" to="/register">Registrera</Link>
                    </article>
                    <article className="auth-form__input-holder">
                        {this.renderInput("Användarnamn", "username", inputClass)}
                        {/* {this.renderInput("Email Address", "email", "email")} */}
                        {this.renderInput("Lösenord", "password", inputClass, "password")}
                    </article>
                    {/* {this.renderCheckbox("newsletter", newsLetterText, "auth-form__checkbox")}
                    {this.renderCheckbox("t", newsLetterText, "auth-form__checkbox")} */}
                    {this.renderSubmit("Logga in")}
                </form>
            </React.Fragment>
        );
    }
}
 
export default Register;