import React, { useRef } from "react";

function Signup() {
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let emailRef = useRef();
  let ageRef = useRef();
  let passwordRef = useRef();
  let ProfileRef = useRef();

  let onSignUpJSON = async () => {
    let myHeader = new Headers();
    myHeader.append("content-type", "application/json");

    let dataToSend = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    let reqOption = {
      method: "POST",
      headers: myHeader,
      body: JSON.stringify(dataToSend),
    };

    let JSONData = await fetch("http://localhost:1919/signUp", reqOption);
    let JSOData = await JSONData.json();
    console.log(JSOData);
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="string" ref={firstNameRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="string" ref={lastNameRef}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="number" ref={ageRef}></input>
        </div>
        <div>
          <label>email</label>
          <input type="email" ref={emailRef}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="string" ref={passwordRef}></input>
        </div>
        <div>
          <label>Profile Pic</label>
          <input type="file" ref={ProfileRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              onSignUpJSON();
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
