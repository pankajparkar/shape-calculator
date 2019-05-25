import { Shape } from './shape';

export class Eclipse extends Shape {
    constructor () {
        super('Eclipse');
    }

    setDimensions (height, width) {
        this.height = height;
        this.width = width
    }
    calculateArea () {
        return 3.14 * this.height * this.width;
    }
}