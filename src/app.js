
import {Rectangle} from './shape/rectangle'
import {Circle} from './shape/circle'
import {Eclipse} from './shape/eclipse'
import {Square} from './shape/square'

function getShapes () {
  return [
    'Rectangle',
    'Circle',
    'Square',
    'Eclipse'
  ]
}

let step = 1;
let shape;

function getCurrentStep (step) {
  const steps = Array.from(document.getElementsByClassName('step'));
  steps.forEach(s => s.style.display = 'none');
  const currentStep = steps[step-1];
  currentStep.style.display = 'block';
  return currentStep;
}

async function next() {
  const currentStep = getCurrentStep(step);
  const lastStep = step - 1;
  switch (lastStep) {
    case 1:
      const value = document.querySelector("[name=step1]").shape.value;
      const shapePath = './shape/'+ value.toLowerCase();
      // TODO: improve below
      const s = (await import(shapePath))[value];
      shape = new Rectangle();
      console.log(shape)
      break;
    case 2:
      const width = document.querySelector('[name=width]').value,
        height = document.querySelector('[name=height]').value;
      shape.setDimensions(width, height)
      shape.calculateArea();
      break;
  }
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

  const startOverButton = document.querySelector('.start-over');
  startOverButton.addEventListener('click', () => {
    step = 1;
    next()
  })
  next();
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('Html Loaded...');

  init();

  // Options renderer
  // const options = getShapes();
  
  // Ask for parameters

  // Show the result

});
