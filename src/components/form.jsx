import { useState, useEffect } from "react";

function UserForm() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
  });

  const updatedata = (e) => {
    const { name, value } = e.target;

    setformdata((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('hname');
    name.innerHTML = `User name: ${formdata.name}`;  

    const email = document.getElementById('hemail');
    email.innerHTML = `User email: ${formdata.email}`;  
  };

 useEffect(()=>{
  console.log("Form Data Submitted:", formdata);
 },[formdata]);

    return (
      <div>
        <h1 id="hname"></h1>
        <h1 id="hemail"></h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formdata.name}
              onChange={updatedata}
              required
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formdata.email}
              onChange={updatedata}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }


export default UserForm;
