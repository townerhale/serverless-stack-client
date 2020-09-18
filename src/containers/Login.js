import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";

export default function Login() {
  const { userHasAuthenticated } = useAppContext(); //we want our context here and to use the userHasAuthneticated fuction
  const [isLoading, setIsLoading] = useState(false); //used to give feedback while we are logging in
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  //check if email is empty
  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }
  //for now prevents function's default behavior
  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
    } catch (e) {
      onError(e); //from the onError function in /libs/errorLib
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          {" "}
          Login
        </LoaderButton>
      </form>
    </div>
  );
}
