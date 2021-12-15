const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.9,

  calcBMI: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

function result() {
  const markBMI = mark.calcBMI();
  const johnBMI = john.calcBMI();
  if (markBMI > johnBMI) {
    return `Mark's BMI ${markBMI} is higher than John's ${johnBMI}`;
  }
  return `John's BMI ${johnBMI} is higher than Mark's ${markBMI}`;
}

console.log(result());
