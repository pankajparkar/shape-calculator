import { StepCard } from "./step-card";

const header = step => `Step ${step} - Select Your Shape`
const content = (step, shapes) => {
    return `<form name="step${step}">
        ${(() => shapes.map(s => `<label>
            <input type="radio" name="shape" value="${s}" required/>
                ${s}
            </label>`).join('')
        )()}
    </form>`
};

export class ShapeSelectionComponent extends StepCard {
    constructor (currentStep, shapes) {
        const template = {
            header: header(currentStep.step),
            content: content(currentStep.step, shapes)
        };
        super(template, currentStep);
    }

    init () {
        // attach html to DOM
        this.attachTemplate();

        // attach events
        this.bindEvent();
    }
} 