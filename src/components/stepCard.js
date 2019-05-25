const createTemplate = (header, content, footer) => {
    return `
        <div class="step">
            <h5>${header}</h5>
            ${content}
            <div class="footer">
                ${footer}
            </div>
        </div>
  `
}

export class StepCard {
    constructor (header, content, footer) {
        this.template = createTemplate(header, content, footer);
    }

} 