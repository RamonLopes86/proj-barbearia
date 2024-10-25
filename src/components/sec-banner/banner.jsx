'use client'

import estiloBanner from './banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/penteado.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import wpp from '../../../public/wpp.png';
import face from '../../../public/facebook.png';
import insta from '../../../public/instagram.png';
import ModalLogin from '../modalLogin/modal';


import react, { useState, useRef, useEffect } from 'react';


export default function Banner() {

    const [alert, setAlert] = useState(estiloBanner.alertOff)

    const [menu, setMenu] = useState(estiloBanner.menuOff)

    const [displayLogin, setDisplayLogin] = useState(estiloBanner.displayOff)

    const [cond , setCond] = useState(false)
  

    const [ham, setHam] = useState(faPowerOff)

    
    const boxNav = useRef()



    function clickMenuEscondido() {

        setAlert(alert === estiloBanner.alertOff ? estiloBanner.alertOn : estiloBanner.alertOff)
        setHam(ham == faPowerOff ? faXmark : faPowerOff)

        setMenu(estiloBanner.menuOff)


    }



    function clickMenuHamburger() {

        setMenu(menu === estiloBanner.menuOff ? (estiloBanner.menuOn) : (estiloBanner.menuOff))

        setAlert(estiloBanner.alertOff)

        setHam(faPowerOff)
    }


    function telaLogin() {

        setDisplayLogin(estiloBanner.displayOn)
        setHam(faPowerOff)


        if (alert === estiloBanner.alertOn) {

            setAlert(estiloBanner.alertOn)
            setHam(faXmark)
        }


    }

    function closeTelaLogin() {

        setDisplayLogin(estiloBanner.displayOff)

        if (alert === estiloBanner.alertOn) {

            setAlert(estiloBanner.alertOff)
            setHam(faPowerOff)
        }

    }

    function resize() {

        if (window.innerWidth > 960) {

            setAlert(estiloBanner.alertOff)
            setMenu(estiloBanner.menuOff)
            setHam(faPowerOff)
        }

    }


    function ScrollNav() {


        if (window.scrollY > 0) {

            boxNav.current.classList.add(estiloBanner.navScroll)



        } else {

            boxNav.current.classList.remove(estiloBanner.navScroll)
        }

    }


    function recolherMenu() {

        setMenu(estiloBanner.menuOff)
    }


    useEffect(() => {

        window.addEventListener('scroll', ScrollNav)


        return () => window.removeEventListener('scroll', ScrollNav)

    }, [])

    useEffect(() => {

        window.addEventListener('resize', resize)



        return () => window.removeEventListener('resize', resize)

    }, [])





    useEffect(()=>{

        if(window.scrollY >=0 && window.scrollY < 980){

            setCond(true)
        }


        function moveTx(){

            if(window.scrollY >= 0 && window.scrollY < 980){
    
                setCond(true)
    
            }else if(window.scrollY > 500 ){
    
                setCond(false)
            }
    
    
    
        }

        window.addEventListener('scroll' , moveTx)

    },[])
  

    return (

        <section className={estiloBanner.boxBanner}>

            <div ref={boxNav} className={`${estiloBanner.boxNav} `}>

                <Image alt='imagens' className={estiloBanner.imgLogo} src={logo} />

                <nav>

                    <ul>
                        <Link className={estiloBanner.link} href={'#idinicio'}> <li>inicio</li></Link>
                        <Link className={estiloBanner.link} href={'#idpreco'}> <li>preços e serviços</li></Link>
                        <Link className={estiloBanner.link} href={'#idagendamento'}><li>agendamento</li></Link>
                        <Link className={estiloBanner.link} href={'#idtime'}><li>time</li></Link>
                        <Link className={estiloBanner.link} href={'#idcontato'}>  <li>contato</li></Link>

                    </ul>


                </nav>





                <div className={estiloBanner.boxLogin}>

                    <p onClick={telaLogin}> <FontAwesomeIcon className={estiloBanner.icon} icon={faUser} /> login</p>
                    <p> <FontAwesomeIcon className={estiloBanner.icon} icon={faGear} />administrador</p>

                </div>


                <i onClick={clickMenuEscondido} className={estiloBanner.i}><FontAwesomeIcon className={estiloBanner.iconHam} icon={ham} /></i>


                <div className={`${estiloBanner.alertEscondido} ${alert} `}>

                    <div className={estiloBanner.alertFilho}>

                        <p onClick={telaLogin}> <FontAwesomeIcon className={estiloBanner.icon} icon={faUser} /> login</p>
                        <p> <FontAwesomeIcon className={estiloBanner.icon} icon={faGear} />administrador</p>

                    </div>

                </div>


                <i onClick={clickMenuHamburger} className={estiloBanner.iHamburgerIcon}><FontAwesomeIcon className={estiloBanner.iconHamburger} icon={faBars} /></i>

                <div className={`${estiloBanner.MenuHamburgerEscondido} ${menu}`}>


                    <nav>

                        <ul>
                            <Link onClick={recolherMenu} className={estiloBanner.link} href={'#idinicio'}> <li>inicio</li></Link>
                            <Link onClick={recolherMenu} className={estiloBanner.link} href={'#idpreco'}> <li>preços e serviços</li></Link>
                            <Link onClick={recolherMenu} className={estiloBanner.link} href={'#idagendamento'}><li>agendamento</li></Link>
                            <Link onClick={recolherMenu} className={estiloBanner.link} href={'#idtime'}><li>time</li></Link>
                            <Link onClick={recolherMenu} className={estiloBanner.link} href={'#idcontato'}>  <li>contato</li></Link>

                        </ul>

                    </nav>


                </div>


                <ModalLogin

                    telaLogin={displayLogin}
                    closeLogin={closeTelaLogin}
                />




            </div>


            <div  className={`${estiloBanner.boxTexto} ${cond ? estiloBanner.txOn : estiloBanner.txOff} `}>

                <div className={estiloBanner.boxFilhoTexto}>

                    <h1>blade's palace barbershop</h1>
                    <h3>corte de cabelo e barba & serviços especiais</h3>
                    <p>Bem vindo ao Blade's barbershop , o seu destino definitivo para um estilo impecável e cuidados excepcionais.Aqui combinamos a tradição da barbearia com um toque moderno para oferecer uma experiência de gooming inigualável.Oferecemos Corte de cabelo, Barba & Serviços Especiais</p>

                    <div className={estiloBanner.boxBotao}>

                        <button>Serviços</button>
                        <button>Agendamento</button>
                    </div>

                    <div className={estiloBanner.redes}>

                        <div className={estiloBanner.boxImg}>
                            <Image alt='images' className={estiloBanner.icon} src={wpp} />
                        </div>

                        <div className={estiloBanner.boxImg}>
                            <Image alt='imagens' className={estiloBanner.icon} src={face} />
                        </div>

                        <div id='idpreco' className={estiloBanner.boxImg}>
                            <Image alt='imagens' className={estiloBanner.icon} src={insta} />
                        </div>

                    </div>

                </div>
            </div>


           

        </section>
    )
}