const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {
  let area = 0.0;
  switch (choice) {
    case "square":
      if (typeof side == "undefined") {
        area = -1;
      } else {
        area = side * side;
      }
      break;
    case "rectangle":
      if (typeof length == "undefined") {
        area = -1;
      } else {
        area = length * breadth;
      }
      break;
    case "circle":
      if (typeof radius == "undefined") {
        area = -1;
      } else {
        area = pi * radius * radius;
      }
      break;
    default:
      area = -1;
  }

  // write logic here
  // note that you check the values passed are not null before performing any operation on them
  return area;
};
calculateArea("square", 4);
calculateArea("rectangle", 3, 4);
calculateArea("circle", 2);

module.exports = { calculateArea };
