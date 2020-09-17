import { useState } from "react";

/* a custom react hook starts with use in its name, in this useFormFields
Our hook takes the initial state of our form fields as an object and saves
it as a state variable called fields. It returns an array with fields and
a function that sets new states based on event object. on login.js the controlId
is the event.target.id */

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}
