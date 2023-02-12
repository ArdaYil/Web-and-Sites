import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
    
}
 
interface HeroState {
    
}
 
class Hero extends React.Component<HeroProps, HeroState> {
    state: HeroState = {}

    render(): JSX.Element { 
        return (
            <article className="hero">
                <section>
                    <h2 className="hero__title">Vi skapar kvalitativa webbsidor som passar dig och ditt företag!</h2>
                    <p className="hero__text">Vårat team, består av profesionella webutvecklare som sätter användaren i fokus. Vi strävar efter att utveckla exklusiva webbsidor som är behagliga för användarna</p>
                    <section className="hero__btn-holder">
                        <Link className="btn--no-bg" to="/">Kontakta Oss</Link>
                        <Link className="btn--black" to="/register">Registrera Konto</Link>
                    </section>
                </section>
                <img className="hero__img" src="../../public/images/computer.jpg"/>
            </article>
        );
    }
}
 
export default Hero;