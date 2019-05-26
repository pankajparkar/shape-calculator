
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

const next = async () => {
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
  // const nextButton = Array.from(document.getElementsByClassName('next'))
  // nextButton.forEach(
  //   button => button.addEventListener('click', () => {
  //     ++step;
  //     next();
  //   })
  // )
  // // TODO: Refactor
  // const cancelButton = Array.from(document.getElementsByClassName('cancel'))
  // cancelButton.forEach(
  //   button => button.addEventListener('click', cancel)
  // )

  // const startOverButton = document.querySelector('.start-over');
  // startOverButton.addEventListener('click', () => {
  //   step = 1;
  //   next()
  // })
  // next();
}

function showSelectionScreen (currentStep) {
  var shapeSelection = new ShapeSelectionComponent(currentStep, getShapes)
  shapeSelection.init();
}

window.addEventListener('DOMContentLoaded', () => {
  let step = 1, shape;

  // TODO: reset all values
  const reset = () => {

  }

  const cancel = () => {
    step = 1;
    next()
  }

  const steps = [
    {
      step: 1, 
      next: () => {
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
        }
        ++step; 
      },
      cancel
    },
    {
      step: 2, 
      next: () => {
        const width = document.querySelector('[name=width]').value,
        height = document.querySelector('[name=height]').value;
        shape.setDimensions(width, height)
        shape.calculateArea();
        ++step; 
      },
      cancel
    },
    {
      step: 3, 
      next: () => {
        step = 1
        const currentStep = steps[step - 1];
        showSelectionScreen(currentStep);
      }
    }
  ]

  init();

  const currentStep = steps[step - 1];

  showSelectionScreen(currentStep);
  
  // Ask for parameters

  // Show the result

});
