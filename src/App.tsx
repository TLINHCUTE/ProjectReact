import React from 'react'
import Header from './layouts/user/Header'

import "./main.css"
import Footer from './layouts/user/Footer'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'

export default function App() {
  return (
    <>
      {/* <Signup/> */}
      <Signin/>
    </>
  )
}
