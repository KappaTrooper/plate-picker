import React from 'react'
import './Homepage.scss';
import Foodbutton from "../foodbutton/Foodbutton.js"


export default function Homepage() {
  return (
    <div className='home'>
        <div className='home__container'>
            <h1 className='home__title'>Today's Option</h1>
            
            <div className='home__random'>
                <img src='https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg' className='home__random-image'/>
                <p className='home__random-text'>Koshari</p>
                
            </div>

            <Foodbutton/>
        </div>
    </div>
  )
}
