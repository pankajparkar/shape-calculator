import { StepCard } from "./stepCard";

const header = step => `Step ${step} - Your results`
const content = (shape) => {
    return `You have calculated the area of reactagle to ${shape.area}. Below is your result:	
    <h6>	
      The area is ${shape.area}
    </h6>`
}
const footer = `
    <button class="next">Start Over</button>
`

export class ShapeResultComponent extends StepCard {
    constructor (currentStep, shape) {
        super(header(currentStep.step), content(shape), footer)
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