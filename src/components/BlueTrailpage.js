import React from 'react'
import Page1 from './Page1'
class BlueTrailpage extends React.Component{
    render(){
        return(
        <>
      
      {/* Render children pages */}
      {this.props.children}
      
      <Page1/>



        </>
        )
    }
}
export default BlueTrailpage