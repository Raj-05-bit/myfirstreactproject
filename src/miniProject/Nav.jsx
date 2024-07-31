import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div>
            <Link to={"/"}>Home</Link>
        </div>
      <div>
        <Link to={"/addproduct"}>Addproduct</Link>
      </div>
      <div>
        <Link to={"/viewproduct"}>Productview</Link>
      </div>
    </div>
  )
}

export default Nav
