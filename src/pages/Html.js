import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import MainContent from '../comp/MainContent'
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";

export default function Html() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  })
  return (
    <div>
      <Helmet>
        <title>HTML Page</title>
      </Helmet>
      <Header />
      <MainContent NamePage="HTML" />

      <Footer />
    </div>
  )
}
