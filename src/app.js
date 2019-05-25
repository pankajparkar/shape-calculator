function getShapes () {
  return [
    'Rectangle',
    'Circle',
    'Square',
    'Eclipse'
  ]
}

let step = 1;

function getCurrentStep (step) {
  const steps = Array.from(document.getElementsByClassName('step'));
  steps.forEach(s => s.style.display = 'none');
  const currentStep = steps[step-1];
  currentStep.style.display = 'block';
  return currentStep;
}

function next() {
  const currentStep = getCurrentStep(step);
}

function init () {
  // TODO: Refactor
  const nextButton = Array.from(document.getElementsByClassName('next'))
  nextButton.forEach(
    button => button.addEventListener('click', () => {
      ++step;
      next();
    })
  )
  // TODO: Refactor
  const cancelButton = Array.from(document.getElementsByClassName('cancel'))
  cancelButton.forEach(
    button => button.addEventListener('click', () => {
      step = 1;
      next()
    })
  )
  next();
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('Html Loaded...');

  // Options renderer
  // const options = getShapes();
  init();
  
  // Ask for parameters

  // Show the result

});
