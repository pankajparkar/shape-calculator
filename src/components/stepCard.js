const createTemplate = (header, content, footer) => {
    return `
        <div class="step">
            <h3 class="step-header"><b>${header}</b></h3>
            <div class="step-content">${content}</div>
            <div class="step-footer">
                ${footer}
            </div>
        </div>
  `
}

export class StepCard {
    constructor (header, content, footer) {
        this.template = createTemplate(header, content, footer);
    }

    emptyDom (myNode) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }

    bindEvent (className, callback) {
        document.querySelector(`.${className}`)
            .addEventListener('click', callback)
    }

    attachTemplate () {
        const stepWrapper = document.querySelector('.step-wrapper');
        this.emptyDom(stepWrapper);
        stepWrapper.innerHTML = this.template;
    }

} 