function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
}

  Person.prototype.cooper_result = function() {
    cooper_result = new CooperTest();
    cooper_result.cooper_calc(this);
  };
