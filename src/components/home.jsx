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
import kreditbanner from '../assets/kreditbanner.webp'
import slideri from '../assets/sliderimg.png'
import adviseimg1 from '../assets/adviseimg1.webp'
import adviseimg2 from '../assets/adviseimg2.webp'
import adviseimg3 from '../assets/adviseimg3.webp'
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'bootstrap/scss/forms'
// import InputGroup from 'react-bootstrap/InputGroup';


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

            <section className='firstsection'>

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

            <section className="secondsection">

                <div className="leftpartss">

                    <h1>Sizə özəl kredit təklifimizi dərhal öyrənin!</h1>
                    <p>40 000 AZN-dək komissiyasız kredit əldə edin</p>

                    <input type="text" name="" id="" placeholder='FİN kod *' />
                    <input type="text" name="" id="" placeholder='Mobil telefon nömrəsi *' />
                    <input type="checkbox" name="checkbox1" id="checkbox1" />
                    <label htmlFor="checkbox1">
                        Kredit tarixçəm haqqında məlumatlarımın <a href="">Azərbaycan Kredit Bürosundan</a> alınmasına və <a href="">ASAN Finans/E-GOV</a> sistemi vasitəsilə şəxsiyyəti təsdiq edən sənəd, iş yeri, əmək haqqı və s. məlumatlarımın ABB-yə təqdim edilməsinə razılıq verirəm
                    </label>

                    <button> Davam edin</button>

                </div>
                <div className="rightpartss">

                    <img src={kreditbanner} className='kreditbanner1' />

                </div>
            </section>


            <section className="thirdsection">

                <h1 className='creditcalculator'>Kredit kalkulyatoru</h1>

                <div className="lowerpartt">

                    <div className="lowerleftpart">

                        <div className="firstdiv">

                            <div className="upone">
                                <p>Kredit məbləği</p>
                                <h1>40 000 AZN</h1>
                            </div>

                            <div className="slidereffect">
                                <div className="bluepart">

                                </div>

                                <div className="imgmid">
                                    <img src={slideri} className='slider' />
                                </div>

                                <div className="graypart">

                                </div>

                            </div>

                            <div className="downnumber1">
                                <p>300</p>
                                <p>40000</p>
                            </div>

                        </div>


                        <div className="seconddiv">

                            <div className="upmid">
                                <p>Kredit müddəti</p>
                                <h1>30 ay</h1>
                            </div>

                            <div className="slidereffect">
                                <div className="bluepart">

                                </div>

                                <div className="imgmid">
                                    <img src={slideri} className='slider' />
                                </div>

                                <div className="graypart">

                                </div>

                            </div>

                            <div className="downnumber1">
                                <p>3 ay</p>
                                <p>60 ay</p>
                            </div>

                        </div>

                        <div className="thirddiv">

                            <div className="updown">
                                <p>Faiz dərəcəsi</p>
                                <h1>19.7 %</h1>
                            </div>

                            <div className="slidereffect">
                                <div className="bluepart">

                                </div>

                                <div className="imgmid">
                                    <img src={slideri} className='slider' />
                                </div>

                                <div className="graypart">

                                </div>

                            </div>

                            <div className="downnumber3">
                                <p>10.9%</p>

                                <p className='firstlook'>İlkin hesablama</p>

                            </div>

                        </div>

                    </div>
                    <div className="lowerrightpart">

                        <div className="uplwrgpartdiv">
                            <div className="uptxt">

                                <h1>860.03 ₼</h1>
                                <p>Aylıq ödəniş</p>

                            </div>
                            <div className="horizontalline">

                            </div>
                            <div className="lwrtxt">

                                <h1>5160.18 ₼</h1>
                                <p>Ümumi məbləğ</p>

                            </div>
                        </div>
                        <div className="lwlwrgpartdiv">

                            <button className='kreditalin'>Kredit Alın</button>

                        </div>

                    </div>

                </div>

            </section>

            <section className='fourthsection'>

                <div className="holder">

                    <div className="advise">
                        <h1>Təkliflərimiz</h1>
                    </div>

                    <div className="cardholder">
                        <div className="card">
                            <div className="upsdpart">
                                <img src={adviseimg1} className='adviseimg1' />
                            </div>
                            <div className="lwsdpart">

                                <h1 className='cards'>Kartlar</h1>

                                <p className='cardsp'>ABB-dən debet və kredit, status və eksklüziv, virtual, taksit və başqa kartlar. Nağdsız ödənişlərin üstünlüklərindən faydalanın.</p>

                                <button className='morenmore'>Daha ətraflı <TbArrowBadgeRightFilled size={20} /> </button>

                            </div>
                        </div>


                        <div className="card">
                            <div className="upsdpart">
                                <img src={adviseimg2} className='adviseimg1' />
                            </div>
                            <div className="lwsdpart">

                                <h1 className='cards'>Kreditlər</h1>

                                <p className='cardsp'>ABB-dən hər kəs üçün sərfəli kreditlər</p>

                                <button className='morenmoree'>Daha ətraflı <TbArrowBadgeRightFilled size={20} /> </button>

                            </div>
                        </div>


                        <div className="card">
                            <div className="upsdpart">
                                <img src={adviseimg3} className='adviseimg1' />
                            </div>
                            <div className="lwsdpart">

                                <h1 className='cards'>Xidmət ofisi və ATM-lər</h1>

                                <p className='cardsp'>ABB 70 filial, 11 şöbə və 900-dən çox ATM-i ilə xidmətinizdədir. Sizə ən yaxın nöqtəmizi rahatlıqla seçin.</p>

                                <button className='morenmore'>Daha ətraflı <TbArrowBadgeRightFilled size={20} /> </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fifthsection">

                <div className="containertextforfifth">

                    <h1 className='exchangerates'>Valyuta məzənnələri</h1>

                    <div className="fifthsecmidpart">

                        <div className="fifthsecmidpartleft">

                            <table>

                                <thead>
                                    <tr className='firstrow'>
                                        <th>Valyuta</th>
                                        <th className='nonn'></th>
                                        <th>Satış</th>
                                        <th className='transparant'><span>.....</span></th>
                                        <th>Alış</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='transparantspan'>
                                        <td><span>.</span></td>
                                        <td><span>.</span></td>
                                        <td><span>.</span></td>
                                        <td><span>.</span></td>
                                    </tr>
                                    <tr className='tbodytr'>
                                        <td className='exchangecurr'>USD</td>
                                        <td></td>
                                        <td>1.7020</td>
                                        <td className='transparant'><span>..</span></td>
                                        <td>1.6970</td>
                                    </tr>
                                    <tr>
                                        <td className='exchangecurr'>EUR</td>
                                        <td></td>
                                        <td>1.8299 <IoMdArrowDropdown color='red' size={20} /> </td>
                                        <td className='transparant'><span>.</span></td>
                                        <td>1.7720 <IoMdArrowDropdown color='red' size={20} /> </td>
                                    </tr>
                                    <tr>
                                        <td className='exchangecurr'>RUB</td>
                                        <td></td>
                                        <td>0.0208<IoMdArrowDropup color='green' size={20} className='grnup' /></td>
                                        <td className='transparant'><span>.</span></td>
                                        <td>0.0154<IoMdArrowDropup color='green' size={20} className='grnup' /></td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>
                        <div className="fifthsecmidpartright">

                            <h1 className='currencyconvertor'>Valyuta konvertoru</h1>
                            <div className="input-group">
                                <input type="text" id='inputnrnrnr' placeholder='Satıram' className='fifthsecinput' />
                            </div>
                            <input type="text" className='fifthsecinput' placeholder='Alıram' />


                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default home