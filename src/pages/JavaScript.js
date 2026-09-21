import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import MainContent from '../comp/MainContent'
import { Helmet } from 'react-helmet-async'

export default function JavaScript() {
  return (
    <div>
      <Helmet>
        <title>Java Script Page</title>
      </Helmet>
      <Header />

      <MainContent NamePage="JavaScript" />
      <Footer />
    </div>
  )
}
