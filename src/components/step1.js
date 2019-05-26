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
    constructor (step, getShapes) {
        super(header(step), content(step, getShapes), footer)
        console.log(this.template);
    }

    init () {
        // attach html to DOM
        // attach events
    }
} 