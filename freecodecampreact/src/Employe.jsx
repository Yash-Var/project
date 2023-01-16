import React, { useState } from "react";
import femaleImage from "./images/femaleProfile.jpg";
import maleImage from "./images/maleProfile.jpg";
import "./App.css";
const Employe = () => {
  const [data, setData] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {data.map((e) => {
              return (
                <div
                  id={e.id}
                  className="card m-2"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={femaleImage}
                    alt="female"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Full Name:{e.fullName}</h5>
                    <p className="card-text">
                      <b>Designation:</b>
                      {e.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employe;
