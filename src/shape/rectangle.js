import { Shape } from "./shape";

export class Rectangle extends Shape {
    constructor () {
        super('Rectangle');
    }
    getParameters () {
        return [
            'width',
            'height'
        ]
    }

    setDimensions ({width, height}) {
        this.width = width
        this.height = height;
    }
    calculateArea () {
        this.area = this.height * this.width;
    }
}