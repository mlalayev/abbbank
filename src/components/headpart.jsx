import '../stylingcss/headpart.css'
import Headroom from 'react-headroom'
import abblogo from '../assets/logo.svg'
import { BsSearch } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import React, { useState, useEffect } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import kreditlogo from '../assets/Kredit_sub_iba.webp'
import { FaRegArrowAltCircleRight } from "react-icons/fa";



function currency() {


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) { 
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    if (!isScrollUp) {

      //when scrolling down

      const stickyheader = document.querySelector('stickyheader');
      if (stickyheader) {
        stickyheader.style.top = '50px'; 
      }
    }
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <header>
      <div className='totalparts'>

        <Headroom>
          <div className="upperpart">
            <div className="upperpartleft">
              <ul className='upleftul'>
                <li className='firstli'><a href="#">Haqqımızda</a></li>
                <li className='secondli'><a href='#'>Tariflər və Standart şərtlər</a></li>
                <li className='thirdli' ><a href="#">Xəbərlər</a></li>
                <li className='fourthtli' ><a href="#">Xidmət şəbəkəsi</a></li>
                <li className='fifthli' ><a href="#">Satınalmalar</a></li>
                <li className='sixthli' ><a href="#">Dayanıqlı İnkişaf Hesabatları</a></li>
              </ul>
              <button>Karyera portalı</button>
            </div>

            <div className="upperpartright">
              <button className='uprightleft'><BsSearch /> Axtarış</button>

              <div className="uprightmid">
                <label htmlFor="midbtn">AZ</label>
                <button className='midbtn' id='midbtn'><BsArrowDown /></button>
              </div>

              <button className='uprightright'>
                <BsFillTelephoneFill /> 937
              </button>

            </div>

          </div>
          <div>

            <div className={isSticky ? "stickyheader" : ''}>



              <div className="midpart">

                <div className="midpartleft">


                  <a href="#"><img src={abblogo} className='abblogo' /></a>
                  <ul>
                    <li className='ferdi'><a href="#">Fərdi</a></li>
                    <li className='korporativ'><a href="#">Korporativ</a></li>
                    <li className='kob'><a href="#">KOB</a></li>
                  </ul>


                </div>


                <div className="midpartright">
                  <button className='bsarrowrightcircle'>
                    <FaRegArrowAltCircleRight size={25} />İnternet Bankçılıq
                  </button>
                </div>

              </div>
              <div className="lowerpart">

                <ul className='dropdownul'>
                  <li className='dropdownli'>
                    Kreditlər

                    <div className="dropdowndiv">

                      <div className="leftpartdd">


                        <div className="leftdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                        <div className="rightdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                      </div>

                      <div className="horizontalline">

                      </div>

                      <div className="rightpartdd">

                        <img src={kreditlogo} className='kreditlogo' />

                        <div className="rightpartddtext">
                          <h1>Onlayn kredit sifarişi</h1>
                          <p>Bütün ehtiyaclarınız üçün nağd pul krediti</p>
                          <button className='firstlibtn'>Daha ətraflı</button>
                        </div>

                      </div>

                    </div>

                  </li>

                  <li className='dropdownli'>
                    Kartlar

                    <div className="dropdowndiv3">

                      <div className="leftpartdd">


                        <div className="leftdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                        <div className="rightdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                      </div>
                    </div>

                  </li>

                  <li className='dropdownli'>
                    Onlayn xidmətlər

                    <div className="dropdowndiv6">

                      <div className="leftpartdd">


                        <div className="leftdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                        <div className="rightdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                      </div>

                      <div className="horizontalline">

                      </div>

                      <div className="rightpartdd">

                        <img src={kreditlogo} className='kreditlogo' />

                        <div className="rightpartddtext">
                          <h1>Onlayn kredit sifarişi</h1>
                          <p>Bütün ehtiyaclarınız üçün nağd pul krediti</p>
                          <button className='firstlibtn'>Daha ətraflı</button>
                        </div>

                      </div>

                    </div>



                  </li>
                  <li>Kampaniyalar</li>



                  <li>Keşbek</li>



                  <li>İpoteka</li>





                  <li className='dropdownli'>
                    Pul köçürmələri

                    <div className="dropdowndiv4">

                      <div className="leftpartdd">


                        <div className="leftdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                        <div className="rightdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                      </div>
                    </div>

                  </li>

                  <li className='dropdownli'>
                    Cari hesab

                    <div className="dropdowndiv5">

                      <div className="leftpartdd">


                        <div className="leftdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                        <div className="rightdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                      </div>
                    </div>


                  </li>


                  <li className='dropdownli'>
                    Əmanətlər
                    <div className="dropdowndiv1">

                      <div className="leftpartdd">


                        <div className="leftdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                        <div className="rightdddiv">
                          <a href="#">Online kredit al</a>
                          <a href="#">Avtomobil krediti</a>
                          <a href="#">Əmanətçi nağd krediti</a>
                        </div>

                      </div>
                    </div>
                  </li>
                </ul>





              </div>



            </div>
          </div>
        </Headroom>
      </div>
    </header >
  );
}

export default currency