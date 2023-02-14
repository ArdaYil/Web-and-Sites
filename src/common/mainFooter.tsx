

import * as React from 'react';

interface MainFooterProps {
    
}
 
interface MainFooterState {
    
}
 
class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
    state: MainFooterState = {}

    render() { 
        return (
            <footer className="footer">
                <div className="footer__container">
                    <header className="footer__header">
                        <section>
                            <h2 className="footer__logo">Web & Sites</h2>
                            <p className="footer__copyright">Copyright &copy; 2023 Web & Sites UF, All rights reserved</p>
                        </section>
                    </header>
                    <div className="footer__content">
                        <section>
                            <h2 className="footer__section-heading">Om oss</h2>
                            <article>
                                <p className="footer__section-item">Vi på Web & Sites</p>
                                <p className="footer__section-item">Plats</p>
                                <p className="footer__section-item">Hållbarhet</p>
                                <p className="footer__section-item">Våra värderingar</p>
                            </article>
                        </section>
                        <section>
                            <h2 className="footer__section-heading">Policy</h2>
                            <article>
                                <p className="footer__section-item">Integritets Policy</p>
                                <p className="footer__section-item">Användarvilkår</p>
                                <p className="footer__section-item">Hur vi jobbar med GDPR</p>
                                <p className="footer__section-item">Cookies</p>
                            </article>
                        </section>
                        <section>
                            <h2 className="footer__section-heading">Kundservice</h2>
                            <article>
                                <p className="footer__section-item">Kontakta Oss</p>
                                <p className="footer__section-item">Frekvent ställda frågor</p>
                                <p className="footer__section-item">Ångerrätt</p>
                                <p className="footer__section-item">Fel i tjänster</p>
                            </article>
                        </section>
                        <section>
                            <h2 className="footer__section-heading">Sociala Medier</h2>
                            <article>
                                <a href="https://www.instagram.com/webandsitesuf/"><img className="footer__social-icon" src="./dist/images/instagram.webp" /></a>
                                <a href="/"><img className="footer__social-icon" src="./dist/images/facebook.webp" /></a>
                            </article>
                        </section>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default MainFooter;