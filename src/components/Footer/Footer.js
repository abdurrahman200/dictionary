import React from 'react'
import './Footer.css'

const Footer = () => {
   return (
      <div className='footer'>
         <hr style={{ width: '90%', marginTop: 20 }} />
         <span className='name'>
            Made by{' '}
            <a href='https://akaid.netlify.app/' target='__blank'>
               Abdur Rahman Akaid
            </a>
         </span>
         <div className='iconContainer'>
            <a href='https://www.instagram.com/roadsidecoder/' target='__blank'>
               <i class='fab fa-facebook-messenger fa-2x'></i>
            </a>
            <a href='https://www.linkedin.com/in/abdurrahmanakaid/' target='__blank'>
               <i className='fab fa-linkedin fa-2x'></i>
            </a>
            <a href='https://github.com/abdurrahman200' target='__blank'>
               <i class='fab fa-github fa-2x'></i>
            </a>
         </div>
      </div>
   )
}

export default Footer
