const defaultFooter = `
    <button class="next">Next</button>
    <button class="cancel">Cancel</button>
`

const createTemplate = ({header, content, footer = defaultFooter}) => {
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
    constructor (template, currentStep) {
        this.template = createTemplate(template);
        this.next = currentStep.next;
        this.cancel = currentStep.cancel;
    }

    emptyDom (myNode) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }

    attachTemplate () {
        const stepWrapper = document.querySelector('.step-wrapper');
        this.emptyDom(stepWrapper);
        stepWrapper.innerHTML = this.template;
    }

    bindEvent () {
        if(this.next) document.querySelector('.next').addEventListener('click', this.next)
        if(this.cancel) document.querySelector('.cancel').addEventListener('click', this.cancel)
    }

} 