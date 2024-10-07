'use client'

import estiloBanner from './banner.module.css';
import Image from 'next/image';
import logo from '../../../public/penteado.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import wpp from '../../../public/wpp.png';
import face from '../../../public/facebook.png';
import insta from '../../../public/instagram.png';

import react , {useState , useRef , useEffect} from 'react';


export default function Banner(){

    const [alert , setAlert] = useState(estiloBanner.alertOff)

    const [ham , setHam] = useState(faBars)
   

    function clickMenuEscondido(){

      setAlert(alert === estiloBanner.alertOff ? estiloBanner.alertOn  : estiloBanner.alertOff)
      setHam(ham == faBars ? faXmark : faBars)

    }


    function resize(){

        if(window.innerWidth > 960){

            setAlert(estiloBanner.alertOff)
            setHam(faBars)
        }

    }


   


    useEffect(()=>{

        window.addEventListener('resize' , resize)

        

        return ()=> window.removeEventListener('resize' , resize) 

    },[])



    return(

        <section className={estiloBanner.boxBanner}>

            <div className={estiloBanner.boxNav}>

                  <Image alt='imagens' className={estiloBanner.imgLogo} src={logo}/>  

                  <nav>

                    <ul>
                        <li>inicio</li>
                        <li>preços e serviços</li>
                        <li>time</li>
                        <li>agendamento</li>
                        <li>contato</li>
                    </ul>

                  </nav>


                  <div className={estiloBanner.boxLogin}>

                    <p> <FontAwesomeIcon className={estiloBanner.icon} icon={faUser} /> login</p>
                    <p> <FontAwesomeIcon className={estiloBanner.icon} icon={faGear} />administrador</p>
                    
                  </div>


                <i onClick={clickMenuEscondido}  className={estiloBanner.i}><FontAwesomeIcon className={estiloBanner.iconHam} icon={ham} /></i>
                   

                <div className={`${estiloBanner.alertEscondido} ${alert} `}>

                    <div className={estiloBanner.alertFilho}>

                        <p> <FontAwesomeIcon className={estiloBanner.icon} icon={faUser} /> login</p>
                        <p> <FontAwesomeIcon className={estiloBanner.icon} icon={faGear} />administrador</p>

                    </div>

                </div>
                 

            </div>


            <div className={estiloBanner.boxTexto}>

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
                             <Image alt='images' className={estiloBanner.icon} src={wpp}/>
                        </div>

                       <div className={estiloBanner.boxImg}>
                            <Image alt='imagens' className={estiloBanner.icon} src={face}/>
                       </div>

                      <div className={estiloBanner.boxImg}>
                            <Image alt='imagens' className={estiloBanner.icon} src={insta}/>
                      </div>

                    </div>
                    
                                </div>
                </div>
          

        </section>
    )
}