import React from 'react';
import Head from "next/head"; //like html meta in >head>. give someinfo about website
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>JS Mastery Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout