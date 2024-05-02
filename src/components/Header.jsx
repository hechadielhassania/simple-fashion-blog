import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
          <h1>Sartre's List</h1>
          <h5>Better-Dressed People</h5>
        </div>
        <div className='nav'>
          <ul className=''>
            <li><a href="#">Women's</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">On the Street</a></li>
            <li><a href="#">The Catwalk</a></li>
            <li><a href="#">AdWatch</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header