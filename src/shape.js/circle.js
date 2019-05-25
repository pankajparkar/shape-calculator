import { Shape } from './shape';

export class Circle extends Shape {
    constructor () {
        super('Circle');
    }
    setDimensions (diameter) {
        this.radius = diameter / 2;
    }
    calculateArea () {
        return 3.14 * this.radius * this.radius;
    }
}