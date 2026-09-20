import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import MainContent from '../comp/MainContent'

export default function Html() {
  return (
    <div>
      <Header/>
          <MainContent NamePage="HTML" />
    
      <Footer/>
    </div>
  )
}
