import React from 'react'
import '../stylingcss/home.css'
import { useState } from 'react'
import { useEffect } from 'react'
import slider1 from '../assets/slider1.webp'
import slider2 from '../assets/slider2.webp'
import slider3 from '../assets/slider3.webp'
import slider4 from '../assets/slider4.webp'
import slider5 from '../assets/slider5.webp'
import slider6 from '../assets/slider6.webp'
import slider7 from '../assets/slider7.webp'

function home() {

    const [slider, setSlider] = useState("Bayramda xidmətinizdəyik!");

    const [sliderp, setSliderp] = useState('13 aprel 2024-cü il tarixində');
   
    const [sliderimg, setSliderimg] = useState(slider1);
    // const [color, setColor] = useState(color)

    return (
        <div className='sliderholder'>

            <div className="slidetextandphotoholder">

                <div className="slideleft">

                    <h1>{slider}</h1>
                    <p>{sliderp}</p>

                    <button className='more'>Ətraflı</button>

                </div>

                <div className="slideright">

                    <img src={sliderimg} />

                </div>

            </div>

            <div className="sliderbtns">


                <button
                    onClick={() => {
                        setSliderp('13 aprel 2024-cü il tarixində')
                        setSlider('Bayramda xidmətinizdəyik!');
                        setSliderimg(slider1)
                    }}>
                </button>

                <button
                    onClick={() => {
                        setSliderp('ABB mobile-la xərclədikcə daha çox qazanın')
                        setSlider('Fayda Max oyunun qaydalarını dəyişir!');
                        setSliderimg(slider2)
                    }}>
                </button>

                <button
                    onClick={() => {
                        setSlider('ABB-də Kredit Baharı Başladı!');
                        setSliderp('Digər kreditlərinizi ABB-yə gətirin, 5%-dək güzəşt qazanın!')
                        setSliderimg(slider3)
                    }}>
                </button>

                <button
                    onClick={() => {
                        setSliderp('Gələcəyinizi təminat altına alın')
                        setSlider('ABB mobile ilə icbari əmlak sığortası!');
                        setSliderimg(slider4)
                    }}>
                </button>

                <button
                    onClick={() => {
                        setSlider('DigiDepozit');
                        setSliderimg(slider5)
                        setSliderp('ABB mobile vasitəsilə olduğunuz yerdən tamamilə onlayn şəkildə əmanət hesabı yaradın!')
                    }}>
                </button>

                <button
                    onClick={() => {
                        setSlider('Yeni müştərilərə möhtəşəm təklif!');
                        setSliderp('6 AZN hədiyyə, 20-dən çox kateqoriya üzrə 10%-dək keşbek')
                        setSliderimg(slider6)
                    }}>
                </button>

                <button
                    onClick={() => {
                        setSliderp('İllik 9%-dən başlayaraq 500 000 AZN-dək ipoteka krediti')
                        setSlider('İpoteka Krediti');
                        setSliderimg(slider7)
                    }}>
                </button>

            </div>

        </div>
    )
}

export default home