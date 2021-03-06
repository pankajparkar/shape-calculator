import { Shape } from './shape';

export class Circle extends Shape {
    constructor () {
        super('Circle');
    }
    getParameters () {
        return [
            'diameter'
        ]
    }
    setDimensions ({diameter}) {
        this.diameter = diameter;
    }
    calculateArea () {
        const radius = this.diameter / 2;
        this.area = 3.14 * radius * radius;
    }
}