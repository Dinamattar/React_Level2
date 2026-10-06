import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import {useNavigate} from "react-router";

const Signup = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);
    const [firebaseError, setFirebaseError] = useState("");
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
                  navigate("/Signin");
                  console.log("doneeeeeee");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  console.log(errorMessage);
                   setHasError(true);
                  // setFirebaseError(errorCode);
                  switch (errorCode) {
                    case "auth/invalid-email":
                      setFirebaseError("Invalid email address");
                      break;
                    case "auth/missing-password":
                      setFirebaseError("Missing password");
                      break;
                    case "auth/user-not-found":
                      setFirebaseError("User not found");
                      break;
                       case "auth/invalid-credential":
                      setFirebaseError("Invalid email or password");
                      break;
                      case "auth/too-many-requests":
                      setFirebaseError("Too many requests. Please try again later");
                      break;
                    default:
                      setFirebaseError("please check your email and password");
                  }
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            Already have an account <Link to="/Signin">Sign in</Link>
          </p>
                    {hasError && <p>{firebaseError}</p>}

        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
