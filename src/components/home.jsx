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
import simplelink1 from '../assets/sadekecid1.webp'
import simplelink2 from '../assets/sadekecid2.webp'
import simplelink3 from '../assets/sadekecid3.webp'


function home() {

    const [slider, setSlider] = useState("Bayramda xidmətinizdəyik!");

    const [sliderp, setSliderp] = useState('13 aprel 2024-cü il tarixində');

    const [sliderimg, setSliderimg] = useState(slider1);
    // const [color, setColor] = useState(color)

    return (
        <>
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

            <section>

                <div className="simplelinks">

                    <h1>Sadə keçidlər</h1>

                    <div className="links">

                        <div className="firstlink">

                            <div className="lefttext1">

                                <h1>Nağd pul krediti</h1>
                                <p>Bütün ehtiyaclarınız üçün 40 000 AZN-dək nağd pul krediti</p>
                                <button>Kredit alın</button>

                            </div>

                            <img src={simplelink1} className='firstsimplelink' />

                        </div>
                        <div className="secondlink">

                            <div className="lefttext2">

                                <h1>TamKart</h1>
                                <p>Hər kəs üçün 30 ayadək hissəli ödəniş imkanı olan faizsiz taksit kartı</p>
                                <button>Sifariş edin</button>

                            </div>

                            <img src={simplelink2} className='secondsimplelink' />


                        </div>
                        <div className="thirdlink">

                            <div className="lefttext3">

                                <h1>ABB mobile</h1>
                                <p>İstədiyin yerdən bank xidmətlərini rahatlıqla idarə edə bildiyin sadə və sürətli mobil tətbiq</p>
                                <button>Tətbiqi yükləyin</button>

                            </div>

                            <img src={simplelink3} className='thirdsimplelink' />


                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default home