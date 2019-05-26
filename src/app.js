
import {Rectangle} from './shape/rectangle'
import {Circle} from './shape/circle'
import {Eclipse} from './shape/eclipse'
import {Square} from './shape/square'
import {ShapeSelectionComponent} from './components/step1'

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
  const prevStep = step - 1;
  switch (prevStep) {
    case 1:
      const value = document.querySelector("[name=step1]").shape.value;
      // TODO: improve below
      switch (value) {
        case 'Rectangle':
          shape = new Rectangle();
            break;
        case 'Circle':
          shape = new Circle();
          break;
        case 'Square':
          shape = new Square();
          break;
        case 'Eclipse':
          shape = new Eclipse();
          break;
        default:
          break;
      }
      console.log(shape)
      break;
    case 2:
      const width = document.querySelector('[name=width]').value,
        height = document.querySelector('[name=height]').value;
      shape.setDimensions(width, height)
      shape.calculateArea();
      break;
  }
  if (step === 3) {
    document.querySelector('.result').innerText = shape.area;
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

  var test = new ShapeSelectionComponent(1, getShapes)
  
  // Ask for parameters

  // Show the result

});
