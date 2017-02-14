function wichSchool (age) {
  if (age < 13){
  return 'Elementary School'
  }else if (age >= 13 && age <= 18 ){
  return 'Secondary School'
  }else{
    return 'Lighthouse Labs'
  }
}

console.log(wichSchool(11));
console.log(wichSchool(15));
console.log(wichSchool(22));
