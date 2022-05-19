import React from "react"

import Navbar from './Navbar'
import Footer from './Footer'


class Layout extends React.Component{
  render() {
    return (
      <>
        <Navbar />
        {/* Render children pages */}
        {this.props.children}
       

       <Footer/>
      </>
    )
  }

}

export default Layout
