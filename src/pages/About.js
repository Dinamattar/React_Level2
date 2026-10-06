import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
// import MainContent from '../comp/MainContent'
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function About() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[]);
  return (
    <div>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <Header />
{user && <main>
  Welcome : {user.displayName}
  </main>}
    {!user && <main><p className='please'>Please <Link style={{fontSize:"30px"}} to="/Signin">Sign in</Link> to continue <span>🧡</span> </p></main>}
      <Footer />
    </div>
  )
}
