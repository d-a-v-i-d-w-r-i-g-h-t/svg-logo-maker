
class Shape {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  printInfo() {
    console.log(`This shape has the color ${this.color}`);
    console.log(`This shape has the text ${this.text}`);
  }
}

class Square extends Shape {
  constructor(color, text, shape) {
    super(color, text)
    this.shape = shape;
  }
}

class Triangle extends Shape {
  constructor(color, text, shape) {
    super(color, text)
    this.shape = shape;
  }
}

class Circle extends Shape {
  constructor(color, text, shape) {
    super(color, text)
    this.shape = shape;
  }
}


module.exports = {
  
}