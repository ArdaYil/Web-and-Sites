

import * as React from 'react';
import PlanInterface from '../interfaces/Plans';

interface PlanProps {
    plan: PlanInterface;
}
 
interface PlanState {
    
}
 
class Plan extends React.Component<PlanProps, PlanState> {
    state = {}
    benefitCounter = 0;

    getClassName = (): string => {
        const {primary} = this.props.plan;
        const addOn = primary ? "--primary" : "";

        return "plans__plan" + addOn;
    }

    renderPlanBenefits = (): JSX.Element => {
        const {plan} = this.props;

        return (
            <ul>
                {plan.benefits.map(benefit => <li key={this.benefitCounter++}>{benefit}</li>)}
            </ul>
        )
    }

    render(): JSX.Element {
        const {plan} = this.props;

        return (
            <div className={this.getClassName()}>
                <header className="plans__plan__header">
                    <h3 className="plans__plan__heading">{plan.title}</h3>
                    <p className="plans__plan__price">SEK {plan.price}</p>
                </header>
                <div className="plans__plan__content">
                    {this.renderPlanBenefits()}
                </div>
            </div>
        );
    }
}
 
export default Plan;