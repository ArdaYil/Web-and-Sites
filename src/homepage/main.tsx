

import * as React from 'react';

interface MainProps {
    
}
 
interface MainState {
    
}
 
class Main extends React.Component<MainProps, MainState> {
    state: MainState = {}

    render() { 
        return (
            <article className="main">
                <section className="main__card-holder">
                    <div className="main__card-holder__card">
                        <h3>Företagande</h3>
                        <p>Har du företag? Då är vi ett perfekta alternativet!</p>
                    </div>
                    <div className="main__card-holder__card">
                        <h3>Design</h3>
                        <p>Vi utvekclar sidor med exklusiv design</p>
                    </div>
                    <div className="main__card-holder__card">
                        <h3>Smidigt</h3>
                        <p>En webbsida behöver inte vara svår att få tag på!</p>
                    </div>
                </section>
                <h2 className="main__title">
                    Vi är ett UF företag, bestående av 
                    professionella webutvecklare, med kompetens 
                    inom digital tech, design, och användar vänlighet
                </h2>
            </article>
        );
    }
}
 
export default Main;