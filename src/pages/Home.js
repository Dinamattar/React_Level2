import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import MainContent from '../comp/MainContent'
import { Link } from "react-router-dom";


export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Header />
      {user && <MainContent NamePage="HOME" />}
      {!user && <main><p className='please'>Please <Link style={{fontSize:"30px"}} to="/Signin">Sign in</Link> to continue <span>🧡</span> </p></main>}
      <Footer />
    </div>
  )
}
