import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [MobileMenu , setMobileMenu] = useState(false)
  return (
    <>
        <header className='header'>
    <div className='container d_flex'>
    <div className="categories d_flex">
      <span className="fa fa-th-large"></span>
      <h4>categories<i className='fa fa-chevron-down'></i>
      </h4>
    </div>

    <div className="navlink">
      <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={()=> setMobileMenu(false)}>

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pages'>Pages</Link>
        </li>
        <li>
          <Link to='/users'>Users account</Link>
        </li>
        <li>
          <Link to='/vendor'>Vendor account</Link>
        </li>
        <li>
          <Link to='/track'>Track my order</Link>
        </li>
        <li>
          <Link to='/contact'>contact</Link>
        </li>
      </ul>

      <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
        {
          MobileMenu? <i className='fas fa-times close home-btn'></i> : 
          <i className='fas fa-bars open'></i>}
      </button>
    </div>
    </div>
        </header>
    </>
  )
}

export default Navbar