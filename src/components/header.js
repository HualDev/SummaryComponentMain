import React from 'react'
import '../stylesheets/header.css'



function Header(){
  return(
    <header>
      <p>Your Result</p>
      <div className='circle'>
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h2 className='great'>Great</h2>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </header>
  )    
}

export default Header