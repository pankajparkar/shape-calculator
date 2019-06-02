
import {ShapeSelectionComponent} from './components/shape-selection';
import { ShapeInputsComponent } from './components/shape-inputs';
import { ShapeResultComponent } from './components/shape-result';

function getShapes () {
  return [
    'Rectangle',
    'Circle',
    'Square',
    'Eclipse'
  ];
}

function checkFormValidity () {
  const form = document.querySelector('.step form');
  return form && form.checkValidity();
}

window.addEventListener('DOMContentLoaded', () => {
  let step = 1, shape, steps;

  const moveToNextStep = (step) => {
    let currentStep = steps[step - 1];
    switch (step) {
      case 1:
        let shapeSelection = new ShapeSelectionComponent(currentStep, getShapes());
        shapeSelection.init();
        break;
      case 2:
        let shapeInputs = new ShapeInputsComponent(currentStep, shape);
        shapeInputs.init();
        break;
      case 3:
        let shapeResult = new ShapeResultComponent(currentStep, shape);
        shapeResult.init();
        break;
    }
  }

  const cancel = () => {
    moveToNextStep(step = 1);
  }

  steps = [
    {
      step: 1, 
      next: async () => {
        if (!checkFormValidity()) return;
        const value = document.querySelector("[name=step1]").shape.value;
        var SelectedShape = (await require('./shape/'+ value.toLowerCase()))[value]
        shape = new SelectedShape();
        moveToNextStep(++step);
      },
      cancel
    },
    {
      step: 2, 
      next: () => {
        if (!checkFormValidity()) return;
        const parameters = shape.getParameters().reduce((a, b) => {
          a[b] = document.querySelector(`[name=${b}]`).value;
          return a;
        }, {})
        shape.setDimensions(parameters)
        shape.calculateArea();
        moveToNextStep(++step);
      },
      cancel
    },
    {
      step: 3, 
      next: () => {
        moveToNextStep(step = 1);
      }
    }
  ];
  moveToNextStep(step = 1);
});
