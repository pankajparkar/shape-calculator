import { StepCard } from "./stepCard";

const header = step => `Step ${step} - Select Your Shape`
const content = (step, shapes) => {
    return `<form name="step${step}">
        ${(() => shapes.map(s => `<label>
            <input type="radio" name="shape" value="${s}" required/>
                ${s}
            </label>`).join('')
        )()}
    </form>`
}
const footer = `
    <button class="next">Next</button>
    <button class="cancel">Cancel</button>
`

export class ShapeSelectionComponent extends StepCard {
    constructor (currentStep, shapes) {
        const template = {
            header: header(currentStep.step),
            content: content(currentStep.step, shapes),
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