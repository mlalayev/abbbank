import React from 'react'
import '../stylingcss/footpart.css'
import { BsSearch } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import abblogo from '../assets/logo.svg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { TbBrandAppgallery } from "react-icons/tb";
import logo1 from '../assets/logo-infobank.webp'
import logo2 from '../assets/logo-virtual-qarabag.webp'
import logo3 from '../assets/logo-msp.webp'
import logo4 from '../assets/yenilogo.webp'





function footpart() {
    return (
        <footer>
            <div className="container">
                <div className="contup">
                    <img src={abblogo} alt="" className='abblogo1' />
                    <button className='bsarrowrightcircle'>
                        <FaRegArrowAltCircleRight size={25} />İnternet Bankçılıq
                    </button>
                </div>
                <div className="contdown">
                    <div className="clicks">
                        <div className="firstpart">
                            <h1>Fərdi</h1>
                            <a href="№">Kreditlər</a>
                            <a href="№">Sual-cavab</a>
                            <a href="№">İpoteka</a>
                            <a href="№">Əmanətlər</a>
                            <a href="№">Kartlar</a>
                            <a href="№">Faydalı linklər</a>
                            <a href="№">Pul köçürmələri</a>
                            <a href="№">Cari hesab</a>
                            <a href="№">Elektron xidmətlər</a>
                            <a href="№">Bank 24/7</a>
                            <a href="№">Keşbek</a>
                            <a href="№">Kampaniyalar</a>
                        </div>
                        <div className="secondpart">
                            <h1>Haqqımızda</h1>
                            <a href="№">Missiya və strateji baxış</a>
                            <a href="№">Rəhbərlik</a>
                            <a href="№">Məlumatların açıqlanması</a>
                            <a href="№">Brend mərkəzi</a>
                            <a href="№">Törəmə və asılı <br /> müəssisələrdə iştirak payı</a>
                            <a href="№">Müxbir banklar</a>
                            <a href="№">Maliyyə monitorinqi və komplayns</a>
                            <a href="№">İnsan Resursları</a>
                            <a href="№">Korporativ Sosial <br /> Məsuliyyət / Sponsorluq</a>
                            <a href="№">Siyasətlərimiz</a>
                            <a href="№">Mükafatlar</a>
                            <a href="№">Təklif və şikayətlər</a>
                        </div>
                        <div className="thirdpart">
                            <h1>Korporativ</h1>
                            <a href="#">Korporativ kreditlər</a>
                            <a href="#">Məsafədən hesab aç</a>
                            <a href="#">Ödəniş kartları</a>
                            <a href="#">Əməkhaqqı layihəsi</a>
                            <a href="#">Sənədli əməliyyatlar</a>
                            <a href="#">Elektrn bankçılıq</a>
                            <a href="#">Köçürmələr</a>
                            <a href="#">Hesablar</a>
                            <a href="#">Əmanətlər</a>
                        </div>
                        <div className="fourthpart">
                            <h1>KOB</h1>
                            <a href="#">Biznes kreditləri</a>
                            <a href="#">Məsafədən hesab aç</a>
                            <a href="#">ABB Link</a>
                            <a href="#">Xidmət paketləri</a>
                            <a href="#">Ödəniş kartları</a>
                            <a href="#">Sənədli əməliyyatlar</a>
                            <a href="#">Köçürmələr</a>
                            <a href="#">Elektron bankçılıq</a>
                            <a href="#">Hesablar</a>
                            <a href="#">Əmanətlər</a>
                            <a href="#">Sahibkarlar Klubu</a>
                        </div>
                        <div className="fifthpart">
                            <h1>Maliyyə və İnvestisiya</h1>
                            <a href="#">Hesabatlar</a>
                            <a href="#">Səhmdarlar</a>
                            <a href="#">Reytinqlər</a>
                            <a href="#">Korporativ</a>
                            <a href="#">Digər məlumatlar</a>
                        </div>
                        <div className="sixthpart">
                            <h1>Əlaqə</h1>
                            <p>Nizami küç.67,AZ1005 <br />Bakı, Azərbaycan</p>
                            <p>Tel.: <p className="underline">(+994 12) 493 00 91</p> </p>
                            <p>Faks.: <p className="underline">(+994 12) 493 40 <br /> 91</p> </p>
                            <p>E-poçt:info@abb-bank.az</p>
                            <div className="phone">
                                <BsFillTelephoneFill /><span>...</span> <h1>937</h1>
                            </div>
                        </div>
                    </div>
                    <div className="download">
                        <div className="yukle apple">

                            <div className="logo">
                                <FaApple size={27} color='gray' />
                            </div>
                            <div className="downntext">
                                <p>Mobil tətbiqi yüklə</p>
                                <h4>App Store</h4>
                            </div>

                        </div>


                        <div className="yukle googleplay">

                            <div className="logo">
                                <FaGooglePlay size={27} color='gray' />
                            </div>
                            <div className="downntext">
                                <p>Mobil tətbiqi yüklə</p>
                                <h4>Google Play</h4>
                            </div>

                        </div>


                        <div className="yukle appgallery">

                            <div className="logo">
                                <TbBrandAppgallery size={27} color='gray' />
                            </div>
                            <div className="downntext">
                                <p>Mobil tətbiqi yüklə</p>
                                <h4>AppGallery</h4>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="lastpart">
                    <div className="lastcontainer">

                        <div className="lastleft">

                            <p>
                                © ABB - Bütün hüquqlar qorunur
                            </p>

                        </div>
                        <div className="lastmid">
                            <img src={logo1} alt="" className='lastmidlogo' />
                            <img src={logo2} alt="" className='lastmidlogo' />
                            <img src={logo4} alt="" className='lastmidlogo' />
                            <img src={logo3} alt="" className='abit lastmidlogo' />
                        </div>
                        <div className="lastright">

                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default footpart