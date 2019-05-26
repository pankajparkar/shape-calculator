import { Shape } from './shape';

export class Square extends Shape {
    constructor () {
        super('Square');
    }
    getParameters () {
        return [
            'width'
        ]
    }

    setDimensions ({width}) {
        this.width = width
    }
    calculateArea () {
        return this.width * this.width;
    }
}