import './Navbar.scss';
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar__list">
      <li className="navbar__item"><a href="/" className="navbar__link">Home</a></li>
      <li className="navbar__item"><a href="/recipes" className="navbar__link">Random Receipe</a></li>
      <li className="navbar__item"><a href="/grocery-list" className="navbar__link">About Us</a></li>
      <li className="navbar__item"><a href="/meal-planner" className="navbar__link">Don't want to cook?</a></li>
    </ul>
  </nav>
  )
}
