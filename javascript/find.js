const people = [
    { name: "john", age: 20, position: "developer" },
    { name: "anna", age: 30, position: "the boss" },
    { name: "susy", age: 40, position: "intern" },
  ];
  
  const newarray=[
      20,30,40,50
  ]
  const youData = people.find((e) =>  e.age < 30);
  
  const Data=newarray.find((e)=>e==20)
  console.log(Data);
  const data=newarray.find((e)=>e==90)
  console.log(data);
  console.log(youData);
  
  