import { StepCard } from "./stepCard";

const header = step => `Step ${step} - Insert your values`
const content = (step, shape) => {
    return `
        <form name="step${step}">
            You have selected a reactagle, please input the required variables
            ${(() => {
                const parameters = shape.getParameters();
                return parameters.map(parameter => `<label>
                    <div class="parameter">${parameter}</div>
                    <input type="number" placeholder="${parameter}" name="${parameter}" required/>
                </label>`).join('')
            })()}
        </form>
    `
}
const footer = `
    <button class="next">Next</button>
    <button class="cancel">Cancel</button>
`

export class ShapeInputsComponent extends StepCard {
    constructor (currentStep, shape) {
        super(header(currentStep.step), content(currentStep.step, shape), footer)
        this.next = currentStep.next;
        this.cancel = currentStep.cancel;
    }

    init () {
        // attach html to DOM
        this.attachTemplate();

        // attach events
        if (this.next) this.bindEvent('next', this.next);
        if (this.cancel) this.bindEvent('cancel', this.cancel);
    }
} 