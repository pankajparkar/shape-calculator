import { StepCard } from "./step-card";

const header = step => `Step ${step} - Your results`
const content = (shape) => {
    return `You have calculated the area of ${shape.name.toLowerCase()} to ${shape.area}. Below is your result:	
    <h3>	
      The area is ${shape.area}
    </h3>`
}
const footer = `
    <button class="next">Start Over</button>
`

export class ShapeResultComponent extends StepCard {
    constructor (currentStep, shape) {
        const template = {
            header: header(currentStep.step),
            content: content(shape),
            footer
        }
        super(template, currentStep);
    }

    init () {
        // attach html to DOM
        this.attachTemplate();

        // attach events
        this.bindEvent();
    }
} 