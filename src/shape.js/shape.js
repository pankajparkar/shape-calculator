export class Shape {
    constructor(name) {
        if (this.constructor == Shape) {
          throw new Error("Abstract classes can't be instantiated.");
        }
        this.name = name;
    }

    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}