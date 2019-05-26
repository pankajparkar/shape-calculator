import { StepCard } from "./stepCard";

const header = step => `Step ${step} - Select Your Shape`
const content = (step, getShapes) => {
    return `<form name="step${step}">
        ${(() => {
            const shapes = getShapes();
            return shapes.map(s => `<label>
                <input type="radio" name="shape" value="${s}" />
                ${s}
            </label>`).join('')
        })()}
    </form>`
}
const footer = `
    <button class="next">Next</button>
    <button class="cancel">Cancel</button>
`

export class ShapeSelectionComponent extends StepCard {
    constructor (step, getShapes, next, cancel) {
        super(header(step), content(step, getShapes), footer)
        this.next = next;
        this.cancel = cancel;
    }

    init () {
        // attach html to DOM
        this.attachTemplate();

        // attach events
        this.bindEvent('next', this.next);
        this.bindEvent('cancel', this.cancel);
    }
} 