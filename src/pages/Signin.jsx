import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Helmet>
        <title>Sign in page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <p>
            Sign in <span>🧡</span>
          </p>
          <input
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            required
            type="email"
          />
          <input
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            required
            type="password"
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                  console.log("sign in ")
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log({errorMessage });
                });
            }}
          >
            Sign in
          </button>
          <p className="account">
            Do not have account <Link to="/Signup">Sign up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;
