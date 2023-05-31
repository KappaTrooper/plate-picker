import React from 'react'
import './Searchbar.scss';

export default function Searchbar() {
  return (
    <div className='searchbar'>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit">Submit</button>
    </form>
  </div>

    </div>
  )
}
