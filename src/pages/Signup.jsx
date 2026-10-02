import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Helmet>
        <title>Sign up page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <p>
            Create a new account <span>🧡</span>
          </p>
          <input
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            required
            placeholder="E-mail"
            type="email"
          />
          <input
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            required
            placeholder="Password"
            type="password"
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  // ...
                  console.log("doneeeeeee");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  console.log(errorMessage);
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            Already have an account <Link to="/Signin">Sign in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
