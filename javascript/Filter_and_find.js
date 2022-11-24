const people = [
  { name: "john", age: 20, position: "developer" },
  { name: "anna", age: 30, position: "the boss" },
  { name: "susy", age: 40, position: "intern" },
];

const newarray=[
    20,30,40,50
]
const youData = people.filter((e) =>  e.age < 30);

const Data=newarray.filter((e)=>e==20)
console.log(Data);
console.log(youData);

