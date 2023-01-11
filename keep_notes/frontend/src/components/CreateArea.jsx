import React, { useState } from "react";
import axios from "axios";
const url = "http://localhost:5000/";
function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    console.log("click");
    axios
      .post(url, {
        title: data.title,
        content: data.content,
      })
      .then((res) => {
        console.log(res.data);
        // alert("Thanks for Equiring we will shortly contact you :)");
        setData({
          title: "",
          content: "",
        });
      });
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="title"
          type="text"
          onChange={(e) => handle(e)}
          value={data.title}
          placeholder="Title"
        />
        <textarea
          id="content"
          name="content"
          onChange={(e) => handle(e)}
          value={data.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
