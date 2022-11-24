const staff = [
  { name: "bod", age: 20, developer: "position" },
  { name: "jhon", age: 20, developer: "position" },
  { name: "sunsy", age: 20, developer: "position" },
  { name: "anna", age: 20, developer: "position" },
];

const totalAge = staff.reduce((total, person) => {
  total += person.age;
  return total;
}, 100);

console.log(totalAge);
