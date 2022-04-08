import React from "react";
import Form from "../Form";

import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import classes from "../../styles/Signup.module.css";
import Illustration from "./Illustration";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          ></TextInput>
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
          ></TextInput>
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          ></TextInput>
          <Checkbox text=" I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
