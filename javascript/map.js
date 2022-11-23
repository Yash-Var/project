const Person = [
  {
    name: "yash",
    age: 20,
    Gender: "male",
  },
  {
    name: "kushagra",
    age: 20,
    Gender: "male",
  },
  {
    name: "dev",
    age: 20,
    Gender: "male",
  },
  {
    name: "anmol",
    age: 20,
    Gender: "male",
  },
];

const data=Person.map((e)=>{
return e.age;
})

const newArray=Person.map((e)=>{
    return {
        first:e.name.toUpperCase(),
        age:e.age+20
    }
})

console.log(newArray);
console.log(data);