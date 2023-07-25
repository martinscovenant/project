import React from 'react'
// import logo from '../logo2.png'

const Search = () => {
  return (
    <>
        <section className='search'>
          <div className="container c_flex">
          <div className="logo width">
            {/* <img src={logo} alt="logo" /> */}
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type="text"placeholder='Search and hit enter...'/>
          <span>All category</span>
          </div>

          <div className="icion f_flex width">
            <i className='fa fa-user icon_circle'></i>
          </div>
          </div>
        </section>
    </>
  )
}

export default Search