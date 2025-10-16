import React from 'react'
import type { NextPage } from 'next'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import Main from '@components/main/Main'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home