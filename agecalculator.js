function ageCalculator(name,dateOfBirth,currentYear){
  var age = currentYear - dateOfBirth;
  return name + " is " + age + " years old.";
}

ageCalculator("Suzie", 1984, 2016);