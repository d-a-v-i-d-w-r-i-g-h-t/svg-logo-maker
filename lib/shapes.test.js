const { Circle, Square, Triangle } = require('./shapes.js');

// A testing suite for Shapes - Circle is created.
describe('Shapes - Circle', () => {

  // A test is created to check that the shape color matches what has been specified.
  describe('shape color', () => {
    it('should return a shape with color blue', () => {

      // Arrange
      const shapeColor = "blue";

      // Act
      const shape = new Circle( shapeColor );
      // Assert
      expect(shape.shapeColor).toEqual(shapeColor);

    });
  });

  // A test is created to check that the text matches what has been specified.
  describe('text', () => {
    it('should return a shape with desired text', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";

      // Act
      const shape = new Circle( shapeColor, text );
      // Assert
      expect(shape.text).toEqual(text);

    });
  });

  // A test is created to check that the text color matches what has been specified.
  describe('text color', () => {
    it('should return a shape with desired text color', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";
      const textColor = "red";

      // Act
      const shape = new Circle( shapeColor, text, textColor );
      // Assert
      expect(shape.textColor).toEqual(textColor);

    });
  });

  // A test is created to check that the font matches what has been specified.
  describe('font', () => {
    it('should return a shape with desired font', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";
      const textColor = "red";
      const font = "ABC";

      // Act
      const shape = new Circle( shapeColor, text, textColor, font );
      // Assert
      expect(shape.font).toEqual(font);

    });
  });
});



// A testing suite for Shapes - Square is created.
describe('Shapes - Square', () => {

  // A test is created to check that the shape color matches what has been specified.
  describe('shape color', () => {
    it('should return a shape with color blue', () => {

      // Arrange
      const shapeColor = "blue";

      // Act
      const shape = new Square( shapeColor );
      // Assert
      expect(shape.shapeColor).toEqual(shapeColor);

    });
  });

  // A test is created to check that the text matches what has been specified.
  describe('text', () => {
    it('should return a shape with desired text', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";

      // Act
      const shape = new Square( shapeColor, text );
      // Assert
      expect(shape.text).toEqual(text);

    });
  });

  // A test is created to check that the text color matches what has been specified.
  describe('text color', () => {
    it('should return a shape with desired text color', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";
      const textColor = "red";

      // Act
      const shape = new Square( shapeColor, text, textColor );
      // Assert
      expect(shape.textColor).toEqual(textColor);

    });
  });

  // A test is created to check that the font matches what has been specified.
  describe('font', () => {
    it('should return a shape with desired font', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";
      const textColor = "red";
      const font = "ABC";

      // Act
      const shape = new Square( shapeColor, text, textColor, font );
      // Assert
      expect(shape.font).toEqual(font);

    });
  });
});



// A testing suite for Shapes - Triangle is created.
describe('Shapes - Triangle', () => {

  // A test is created to check that the shape color matches what has been specified.
  describe('shape color', () => {
    it('should return a shape with color blue', () => {

      // Arrange
      const shapeColor = "blue";

      // Act
      const shape = new Triangle( shapeColor );
      // Assert
      expect(shape.shapeColor).toEqual(shapeColor);

    });
  });

  // A test is created to check that the text matches what has been specified.
  describe('text', () => {
    it('should return a shape with desired text', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";

      // Act
      const shape = new Triangle( shapeColor, text );
      // Assert
      expect(shape.text).toEqual(text);

    });
  });

  // A test is created to check that the text color matches what has been specified.
  describe('text color', () => {
    it('should return a shape with desired text color', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";
      const textColor = "red";

      // Act
      const shape = new Triangle( shapeColor, text, textColor );
      // Assert
      expect(shape.textColor).toEqual(textColor);

    });
  });

  // A test is created to check that the font matches what has been specified.
  describe('font', () => {
    it('should return a shape with desired font', () => {

      // Arrange
      const shapeColor = "blue";
      const text = "ABC";
      const textColor = "red";
      const font = "ABC";

      // Act
      const shape = new Triangle( shapeColor, text, textColor, font );
      // Assert
      expect(shape.font).toEqual(font);

    });
  });
});

