
import {Rectangle} from './shape/rectangle'
import {Circle} from './shape/circle'
import {Eclipse} from './shape/eclipse'
import {Square} from './shape/square'
import {ShapeSelectionComponent} from './components/shape-selection'
import { ShapeInputsComponent } from './components/shape-inputs';
import { ShapeResultComponent } from './components/shape-result';

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
  let step = 1, shape, steps;

  // TODO: reset all values
  const reset = () => {

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
        let shapeResult = new ShapeResultComponent(currentStep, shape)
        shapeResult.init();
        break;
    }
  }

  const cancel = () => {
    step = 1;
    let currentStep = steps[step - 1];
    moveToNextStep(currentStep, shape);
  }

  steps = [
    {
      step: 1, 
      next: async () => {
        const value = document.querySelector("[name=step1]").shape.value;
        var SelectedShape = (await import('./shape/'+ value.toLowerCase()))[value]
        shape = new SelectedShape();
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
        moveToNextStep(step, currentStep);
      }
    }
  ];

  let currentStep = steps[step - 1];
  moveToNextStep(step, currentStep);
  
  // Ask for parameters

  // Show the result

});
