import React from 'react';
import './App.css';
import NavBar from "./components/navbar/Navbar.js"
import Searchbar from "./components/searchbar/Searchbar.js"
import Homepage from "./components/homepage/Homepage.js"

function App() {
  return (
<>
<div className="Meal">
<div>
  <NavBar/>
  </div>
  <div className="home">
  <div>
    <Searchbar/>
  </div>
  <div>
    <Homepage/>
    </div>
  </div>
  </div>
</>
  );
}

export default App;
