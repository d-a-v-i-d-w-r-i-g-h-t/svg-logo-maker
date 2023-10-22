const Shapes = require('../shapes.js');

// A testing suite for Shapes is created.
describe('Shapes', () => {
  // A test is created to check that the color matches what has been rendered.
  describe('sum', () => {
    it('should return a shape with color blue', () => {
      // Arrange
      const shapeColor = "blue";
      // Act
      const shape = new Triangle();
      shape.setColor(shapeColor);
      // Assert
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  
});

