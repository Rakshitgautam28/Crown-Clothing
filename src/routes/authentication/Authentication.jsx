import React from "react";
import SignIn from "../../components/sign-in/Sign-In";
import SignUp from "../../components/sign-up/Sign-Up";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
