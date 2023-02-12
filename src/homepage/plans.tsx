

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
            <div className="plans">
                {plans.map((plan: PlansInterface) => <Plan key={plan.title} plan={plan}/>)}
            </div>
        );
    }
}
 
export default Plans;