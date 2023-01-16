import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [rollno, setRollno] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState([]);
const [count,setCount]=useState(0);
 
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setCount(count+1)
    if (firstName && rollno && checkIn) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        rollno,
        checkIn,
        checkOut
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setRollno("");
      setCheckIn("");
      setCheckOut("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article className="App">
        <form className="form" onSubmit={handleSubmit}>
        <h2>Attendance Register</h2>
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
            <label htmlFor="number">Roll No : </label>
            <input
              type="number"
              id="number"
              name="number"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="appt">Check In Time: </label>
            <input
              type="time"
              id="appt"
              name="appt"
              value={checkIn}
              min="09:00"
              max="12:00"
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
          <ul className="yash">
            <li>Check-In time must be after 9:00 </li>
          </ul>
          <div className="form-control">
            <label htmlFor="appt">Check Out Time: </label>
            <input
              type="time"
              id="appt"
              name="appt"
              value={checkOut}
              min="9:00"
              max="20:00"
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>
          <ul className="yash">
            <li>Check-Out time must be before 20:00</li>
          </ul>
          <button type="submit" >add student</button>
        </form>
        {
          count!=0
          ?(
            <>
        <h2 className="kush">Total Number of Student {count}</h2>
        <div className="item">
              <h4>Name</h4>
              <h4>Roll No</h4>
              <h4>checkIn</h4>
              <h4>checkOut</h4>
            </div>
            </>
        ):" "}

        {people.map((person, index) => {
          const { id, firstName, rollno, checkIn,checkOut} = person;
          return (
            <>
            
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{rollno}</p>
              <h5>{checkIn}</h5>
              <h5>{checkOut}</h5>
            </div>
            </>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
