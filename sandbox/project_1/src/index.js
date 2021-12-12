import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const defaultFormState = {
  login: "",
  pass: "",
};

const App = () => {
  const [form, setForm] = useState(defaultFormState);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let correct = true;
    let err = [];

    if (form.login.length < 3) {
      correct = false;
      err.push("Zły login");
    }

    if (form.pass.length < 3) {
      correct = false;
      err.push("Złe hasło");
    }

    if (correct) {
      alert("Działa !!!! Formularz wysłany");
      setForm(defaultFormState);
    } else {
      setErrors(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name={"login"}
        value={form.login}
        placeholder="login"
        type={"text"}
      />
      <input
        onChange={handleChange}
        name={"pass"}
        value={form.pass}
        placeholder="pass"
        type="password"
      />
      <button type="submit">Login</button>
      <ul>
        {errors.map((x, i) => {
          return (
            <li style={{ color: "red" }} key={i}>
              {x}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
