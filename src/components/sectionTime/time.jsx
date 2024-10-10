'use client'

import estiloTime from './times.module.css';
import Image from 'next/image';
import barbeiro from '../../../public/ramon2.png'
import tarja from '../../../public/bg-image2.png'
import insta from '../../../public/instagram.png'
import face from '../../../public/facebook.png'
import whats from '../../../public/wpp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import react , {useState , useRef , useEffect} from 'react';

    



export default function Time() {

    const boxRef = useRef()
   

    function prevSlide(){

        
     if(boxRef.current.scrollLeft + boxRef.current.offsetWidth <= boxRef.current.scrollWidth){

        boxRef.current.scrollLeft += boxRef.current.offsetWidth + 55

     }

    }


    function BackSlide(){

        if(boxRef.current.scrollWidth >= boxRef.current.scrollLeft){

            boxRef.current.scrollLeft -= boxRef.current.offsetWidth + 55
    
         }

    }
        


    return (

        <section className={estiloTime.boxMaior}>

            <h1>Time</h1>

            

                <section className={estiloTime.boxMolduras}>


                    <section className={estiloTime.boxOverflow}>
                        
                        <div ref={boxRef} className={estiloTime.positionButton}>

                            <div className={estiloTime.moldura}>
                            
                                <div className={estiloTime.boxCima}>
                                    <Image className={estiloTime.imgBarbeiro} src={barbeiro} />
                                    <div className={estiloTime.boxCimaTx}>
                                        <h2>Ramon 1</h2>
                                        <p>Barbeiro Junior</p>
                                        <p>Local : Rua Franz Volles Nº 1636</p>
                                        <div className={estiloTime.boxRedes}>
                                            <Image className={estiloTime.imgRedes} src={insta} />
                                            <Image className={estiloTime.imgRedes} src={face} />
                                            <Image className={estiloTime.imgRedes} src={whats} />
                                        </div>
                                    </div>
                                </div>
                                <div className={estiloTime.boxBaixo}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti amet ipsa quasi dolorem recusandae obcaecati exercitationem assumenda nam error ipsum, dolor voluptates neque necessitatibus, similique ducimus. Consequatur, sit corrupti? Nam.
                                    </p>
                                </div>
                            </div>
                            <div className={estiloTime.moldura}>
                                <div className={estiloTime.boxCima}>
                                    <Image className={estiloTime.imgBarbeiro} src={barbeiro} />
                                    <div className={estiloTime.boxCimaTx}>
                                        <h2>Ramon 2</h2>
                                        <p>Barbeiro Pleno</p>
                                        <p>Local : Rua Franz Volles Nº 1636</p>
                                        <div className={estiloTime.boxRedes}>
                                            <Image className={estiloTime.imgRedes} src={insta} />
                                            <Image className={estiloTime.imgRedes} src={face} />
                                            <Image className={estiloTime.imgRedes} src={whats} />
                                        </div>
                                    </div>
                                </div>
                                <div className={estiloTime.boxBaixo}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti amet ipsa quasi dolorem recusandae obcaecati exercitationem assumenda nam error ipsum, dolor voluptates neque necessitatibus, similique ducimus. Consequatur, sit corrupti? Nam.
                                    </p>
                                </div>
                            </div>
                            <div className={estiloTime.moldura}>
                                <div className={estiloTime.boxCima}>
                                    <Image className={estiloTime.imgBarbeiro} src={barbeiro} />
                                    <div className={estiloTime.boxCimaTx}>
                                        <h2>Ramon 3</h2>
                                        <p>Barbeiro Sênior</p>
                                        <p>Local : Rua Franz Volles Nº 1636</p>
                                        <div className={estiloTime.boxRedes}>
                                            <Image className={estiloTime.imgRedes} src={insta} />
                                            <Image className={estiloTime.imgRedes} src={face} />
                                            <Image className={estiloTime.imgRedes} src={whats} />
                                        </div>
                                    </div>
                                </div>
                                <div className={estiloTime.boxBaixo}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti amet ipsa quasi dolorem recusandae obcaecati exercitationem assumenda nam error ipsum, dolor voluptates neque necessitatibus, similique ducimus. Consequatur, sit corrupti? Nam.
                                    </p>
                                </div>
                            </div>
                           

                        </div>


                        <div className={estiloTime.boxPrevNext}>
                                <span onClick={prevSlide}>
                                    <FontAwesomeIcon className={estiloTime.iconRight} icon={faChevronRight} />
                                </span>
                                <span onClick={BackSlide}>
                                    <FontAwesomeIcon className={estiloTime.iconLeft} icon={faChevronLeft} />
                                </span>
                        </div>



                    </section>

                    
                </section>
           



            <div className={estiloTime.boxTarja}>

                <Image className={estiloTime.imgTarja} src={tarja} />

            </div>

        </section>

    )
}
