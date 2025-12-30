import React from 'react'
import Navbar from './components/login/Navbar'
import Footer from './components/login/Footer'
import Form from './components/login/Form'

export default function Login() {
  return (
        <div className="bg-[url(/assets/images/Hero-Auth.png)] bg-cover h-svh">
        {/* NAVBAR */}
            <Navbar/>
        {/* LOGIN SECTION */}
        <Form/>
        {/* FOOTER */}
        <Footer/>
        </div>
  )
}
