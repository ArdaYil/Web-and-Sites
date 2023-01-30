

import * as React from 'react';
import Form from "../common/form";

interface LoginProps {
    
}
 
interface LoginState {
    
}
 
class Login extends Form<LoginProps, LoginState> {
    state: LoginState = {}

    render(): JSX.Element { 
        return (
            <React.Fragment>
                <form>
                    <h1>Logga in</h1>
                    {this.renderInput("Användarnamn", "username")}
                </form>
            </React.Fragment>
        );
    }
}
 
export default Login;