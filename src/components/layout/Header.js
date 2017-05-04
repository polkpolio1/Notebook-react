import React from 'react'

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand-logo">Notebook application</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/polkpolio1">My github</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header