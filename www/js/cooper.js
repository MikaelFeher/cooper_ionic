function CooperTest() {
};

  CooperTest.prototype.cooper_calc = function (obj) {
    var gender = obj.gender;
    var age = obj.age;
    var distance = obj.distance;

    if(obj.gender === 'male'){
      resultMale(obj);
    }else {
      resultFemale(obj);
    }
  };

function resultMale (obj) {
  if(obj.age >= 13 && obj.age <= 14) {
    if(obj.distance >= 2700){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2400 && obj.distance <= 2699){
      obj.message = "Above Average"
    }
    if(obj.distance >= 2200 && obj.distance <=2399){
      obj.message = "Average"
    }
    if(obj.distance >= 2100 && obj.distance <=2199){
      obj.message = "Below Average"
    }
    if(obj.distance < 2100){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 15 && obj.age <= 16) {
    if(obj.distance >= 2800){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2500 && obj.distance <= 2799){
      obj.message = "Above Average"
    }
    if(obj.distance >= 2300 && obj.distance <=2499){
      obj.message = "Average"
    }
    if(obj.distance >= 2200 && obj.distance <=2299){
      obj.message = "Below Average"
    }
    if(obj.distance < 2200){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 17 && obj.age <= 19) {
    if(obj.distance >= 3000){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2700 && obj.distance <= 2999){
      obj.message = "Above Average"
    }
    if(obj.distance >= 2500 && obj.distance <=2699){
      obj.message = "Average"
    }
    if(obj.distance >= 2300 && obj.distance <=2499){
      obj.message = "Below Average"
    }
    if(obj.distance < 2300){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 20 && obj.age <= 29) {
    if(obj.distance >= 2800){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2700 && obj.distance <= 2999){
      obj.message = "Above Average"
    }
    if(obj.distance >= 2500 && obj.distance <=2699){
      obj.message = "Average"
    }
    if(obj.distance >= 2300 && obj.distance <=2499){
      obj.message = "Below Average"
    }
    if(obj.distance < 2300){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 30 && obj.age <= 39) {
    if(obj.distance >= 2700){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2300 && obj.distance <= 2699){
      obj.message = "Above Average";
    }
    if(obj.distance >= 1900 && obj.distance <=2299){
      obj.message = "Average"
    }
    if(obj.distance >= 1500 && obj.distance <=1999){
      obj.message = "Below Average"
    }
    if(obj.distance < 1500){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 40 && obj.age <= 49) {
    if(obj.distance >= 2500){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2100 && obj.distance <= 2499){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1700 && obj.distance <=2099){
      obj.message = "Average"
    }
    if(obj.distance >= 1400 && obj.distance <=1699){
      obj.message = "Below Average"
    }
    if(obj.distance < 1400){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 50) {
    if(obj.distance >= 2400){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2000 && obj.distance <= 2399){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1600 && obj.distance <=1999){
      obj.message = "Average"
    }
    if(obj.distance >= 1300 && obj.distance <=1599){
      obj.message = "Below Average"
    }
    if(obj.distance < 1300){
      obj.message = "Poor"
    }
  }
};

function resultFemale (obj) {
  if(obj.age >= 13 && obj.age <= 14) {
    if(obj.distance >= 2000){
      obj.message = "Excellent"
    }
    if(obj.distance >= 1900 && obj.distance <= 1999){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1600 && obj.distance <=1899){
      obj.message = "Average"
    }
    if(obj.distance >= 1500 && obj.distance <=1599){
      obj.message = "Below Average"
    }
    if(obj.distance < 1500){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 15 && obj.age <= 16) {
    if(obj.distance >= 2100){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2000 && obj.distance <= 2099){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1700 && obj.distance <=1999){
      obj.message = "Average"
    }
    if(obj.distance >= 1600 && obj.distance <=1699){
      obj.message = "Below Average"
    }
    if(obj.distance < 1600){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 17 && obj.age <= 19) {
    if(obj.distance >= 2300){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2100 && obj.distance <= 2299){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1800 && obj.distance <=2099){
      obj.message = "Average"
    }
    if(obj.distance >= 1700 && obj.distance <=1799){
      obj.message = "Below Average"
    }
    if(obj.distance < 1700){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 20 && obj.age <= 29) {
    if(obj.distance >= 2700){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2200 && obj.distance <= 2699){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1800 && obj.distance <=2199){
      obj.message = "Average"
    }
    if(obj.distance >= 1500 && obj.distance <=1799){
      obj.message = "Below Average"
    }
    if(obj.distance < 1500){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 30 && obj.age <= 39) {
    if(obj.distance >= 2500){
      obj.message = "Excellent"
    }
    if(obj.distance >= 2000 && obj.distance <= 2499){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1700 && obj.distance <=1999){
      obj.message = "Average"
    }
    if(obj.distance >= 1400 && obj.distance <=1699){
      obj.message = "Below Average"
    }
    if(obj.distance < 1400){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 40 && obj.age <= 49) {
    if(obj.distance >= 2300){
      obj.message = "Excellent"
    }
    if(obj.distance >= 1900 && obj.distance <= 2299){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1500 && obj.distance <=1899){
      obj.message = "Average"
    }
    if(obj.distance >= 1200 && obj.distance <=1499){
      obj.message = "Below Average"
    }
    if(obj.distance < 1200){
      obj.message = "Poor"
    }
  }
  if(obj.age >= 50) {
    if(obj.distance >= 2200){
      obj.message = "Excellent"
    }
    if(obj.distance >= 1700 && obj.distance <= 2199){
      obj.message = "Above Average"
    }
    if(obj.distance >= 1400 && obj.distance <=1699){
      obj.message = "Average"
    }
    if(obj.distance >= 1100 && obj.distance <=1399){
      obj.message = "Below Average"
    }
    if(obj.distance < 1100){
      obj.message = "Poor"
    }
  }
};
