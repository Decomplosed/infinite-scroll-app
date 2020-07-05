import React from 'react'
import './App.css'

function App() {
  return (
    <div id='root'>
      <div className='hero is-fullheight is-bold is-info'>
        <div className='hero-body'>
          <div className='container'>
            <div className='header content'>
              <h2 className='subtitle is-6'>Code Challenge #16</h2>
              <h1 className='title is-1'>
                Infinite Scroll Unsplash Code Challenge
              </h1>
            </div>

            <img
              src='https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif'
              alt='loading'
            />

            <div className='images'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
