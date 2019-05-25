import { Shape } from './shape';

export class Rectangle extends Shape {
    constructor () {
        super('Rectangle');
    }

    setDimensions (width, height) {
        this.width = width
        this.height = height;
    }
    calculateArea () {
        return this.height * this.width;
    }
}