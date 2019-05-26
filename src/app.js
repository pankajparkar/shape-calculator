
import {Rectangle} from './shape/rectangle'
import {Circle} from './shape/circle'
import {Eclipse} from './shape/eclipse'
import {Square} from './shape/square'
import {ShapeSelectionComponent} from './components/step1'
import { ShapeInputsComponent } from './components/step2';

function getShapes () {
  return [
    'Rectangle',
    'Circle',
    'Square',
    'Eclipse'
  ]
}

const next = async () => {
  if (step === 3) {
    document.querySelector('.result').innerText = shape.area;
  }
}

function showSelectionScreen (currentStep) {
  
}

window.addEventListener('DOMContentLoaded', () => {
  let step = 1, shape;

  // TODO: reset all values
  const reset = () => {

  }

  const cancel = () => {
    step = 1;
    next();
  }

  const moveToNextStep = (step, currentStep) => {
    switch (step) {
      case 1:
        let shapeSelection = new ShapeSelectionComponent(currentStep, getShapes)
        shapeSelection.init();
        break;
      case 2:
        let shapeInputs = new ShapeInputsComponent(currentStep, shape)
        shapeInputs.init();
        break;
      case 3:
        // let shapeSelection = new ShapeSelectionComponent(currentStep, getShapes)
        // shapeSelection.init();
        break;
    }
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
        let currentStep = steps[step - 1];
        moveToNextStep(step, currentStep);
      },
      cancel
    },
    {
      step: 2, 
      next: () => {
        const parameters = shape.getParameters().reduce((a, b) => {
          a[b] = document.querySelector(`[name=${b}]`).value;
          return a;
        }, {})
        console.log('parameters', parameters);
        shape.setDimensions(parameters)
        shape.calculateArea();
        ++step;
        let currentStep = steps[step - 1];
        moveToNextStep(step, currentStep);
      },
      cancel
    },
    {
      step: 3, 
      next: () => {
        step = 1
        let currentStep = steps[step - 1];
        showSelectionScreen(currentStep);
      }
    }
  ];

  let currentStep = steps[step - 1];
  moveToNextStep(step, currentStep);
  
  // Ask for parameters

  // Show the result

});
