import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import MainContent from '../comp/MainContent'
import { Helmet } from 'react-helmet-async'
export default function Css() {
  return (
    <div>
      <Helmet>
        <title>Css Page</title>
      </Helmet>
      <Header />
      <MainContent NamePage="CSS" />
      <Footer />
    </div>
  )
}
