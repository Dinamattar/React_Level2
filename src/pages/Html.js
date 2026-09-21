import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import MainContent from '../comp/MainContent'
import { Helmet } from 'react-helmet-async'

export default function Html() {
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
