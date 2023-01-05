import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [rollno, setRollno] = useState("");
  const [people, setPeople] = useState([]);

  const [stud, setStud] = useState([
    {
      rollNo: " ",
      name: " ",
      present: false,
    },
    {
      rollNo: " ",
      name: " ",
      present: false,
    },
    {
      rollNo: " ",
      name: " ",
      present: false,
    },
    {
      rollNo: " ",
      name: " ",
      present: false,
    },
  ]);

  const Clicker=()=>{
    console.log("yash varshney");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && rollno) {
      const person = { id: new Date().getTime().toString(), firstName, rollno };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setRollno("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Roll No : </label>
            <input
              type="number"
              id="number"
              name="number"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
            />
          </div>
          <button type="submit">add student</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, rollno } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <i class="fa-solid fa-plus" onClick={Clicker}></i>
              <p>{rollno}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
