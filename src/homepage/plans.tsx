

import * as React from 'react';
import Plan from "../common/plan";
import AppContext from '../context/AppContext';
import PlansInterface from '../interfaces/Plans';

interface PlansProps {
    
}
 
interface PlansState {
    
}
 
class Plans extends React.Component<PlansProps, PlansState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state = {}

    render() {
        const plans: PlansInterface[] = this.context.plans; 
        
        return (
            <section>
                <h2 className="section-title">Välj rätt packet för dig!</h2>
                <div className="plans" data-aos="fade-up">
                    {plans.map((plan: PlansInterface) => <Plan key={plan.title} plan={plan}/>)}
                </div>
            </section>
        );
    }
}
 
export default Plans;