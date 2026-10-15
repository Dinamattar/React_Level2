import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import MainContent from '../comp/MainContent'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sendEmailVerification } from "firebase/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)

  const sendEmail = (params) => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
        console.log("we send you an  email to verify your account")
      });
  }

  if (loading) {
    return (
      <div>
        <Header />
        <main>
          {" "}
          <p className="load">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    if (user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>Home page</title>
          </Helmet>
          <Header />
          <main>
            <p className='profile-data'> Welcome : {user.displayName}  <span>🧡</span></p>

          </main>
          <Footer />
        </div>
      );

    }

    if (!user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>Home page</title>
          </Helmet>
          <Header />
          <main>
            <p className='profile-data'> Welcome : {user.displayName}  <span>🧡</span></p>
            <p className='profile-data'> Please verify your email to continue</p>
            <button className="delete" onClick={() => {
              sendEmail();
            }}>Send Email</button>

          </main>
          <Footer />
        </div>
      );
    }
  }
  if (!user) {
    return (
      <div>
        <Header />
        {user && <MainContent NamePage="HOME" />}
        <main><p className='please'>Please <Link style={{ fontSize: "30px" }} to="/Signin">Sign in</Link> to continue <span>🧡</span> </p></main>
        <Footer />
      </div>
    );
  }


}
