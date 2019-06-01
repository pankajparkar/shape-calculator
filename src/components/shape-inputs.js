import { StepCard } from "./stepCard";

const header = step => `Step ${step} - Insert your values`
const content = (step, shape) => {
    return `
        <form name="step${step}">
            You have selected a reactagle, please input the required variables
            ${(() => {
                const parameters = shape.getParameters();
                return parameters.map(parameter => `<label>
                    <div class="parameter">${parameter}:</div>
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
        const template = {
            header: header(currentStep.step),
            content: content(currentStep.step, shape),
            footer: footer
        }
        super(template, currentStep)
    }

    init () {
        // attach html to DOM
        this.attachTemplate();

        // attach events
        this.bindEvent();
    }
} 