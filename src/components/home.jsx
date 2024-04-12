import React from 'react'
import '../stylingcss/home.css'
import slider1 from '../assets/slider1.webp'
import slider2 from '../assets/slider2.webp'
import slider3 from '../assets/slider3.webp'
import slider4 from '../assets/slider4.webp'
import slider5 from '../assets/slider5.webp'
import slider6 from '../assets/slider6.webp'

function home() {
    return (
        <div className='sliderholder'>


            <div className="slideleft">

                <h1>Bayramda xidmətinizdəyik!</h1>
                <p>13 aprel 2024-cü il tarixində</p>

                <button className='more'>Ətraflı</button>
            </div>

            <div className="slideright">

            </div>

        </div>
    )
}

export default home