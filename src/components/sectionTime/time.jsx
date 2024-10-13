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
    const [colorBtnLeft , setColorBtnLeft] = useState (estiloTime.colorOn)
    const [colorBtnRight , setColorBtnRight] = useState ()

    

    function prevSlide(){

        
     if(boxRef.current.scrollLeft + boxRef.current.offsetWidth <= boxRef.current.scrollWidth){

        boxRef.current.scrollLeft += boxRef.current.offsetWidth + 55

     }


     if(boxRef.current.scrollLeft + boxRef.current.offsetWidth >= 560){

        setColorBtnRight(estiloTime.colorOff)
        
     }

     if(boxRef.current.scrollLeft <=565){

        setColorBtnLeft(estiloTime.colorOn)
     }
     
     console.log(boxRef.current.scrollLeft + boxRef.current.offsetWidth)
    
    }

   
    function BackSlide(){

        if(boxRef.current.scrollWidth >= boxRef.current.scrollLeft){

            boxRef.current.scrollLeft -= boxRef.current.offsetWidth + 55
    
         }

         if(boxRef.current.scrollLeft + boxRef.current.offsetWidth <= 560){

            setColorBtnRight(estiloTime.colorOn)
            setColorBtnLeft(estiloTime.colorOff)
         }

         if(boxRef.current.scrollLeft <= 870){

            setColorBtnRight(estiloTime.colorOn)
         }

        

    }
      
    
   



    return (

        <section id='idtime'  className={estiloTime.boxMaior}>

            <h1>Time</h1>

            

                <section  className={estiloTime.boxMolduras}>


                    <section className={estiloTime.boxOverflow}>
                        
                        <div ref={boxRef} className={estiloTime.positionButton}>

                            <div className={estiloTime.moldura}>
                            
                                <div className={estiloTime.boxCima}>
                                    <Image alt='imagem' className={estiloTime.imgBarbeiro} src={barbeiro} />
                                    <div className={estiloTime.boxCimaTx}>
                                        <h2>Ramon 1</h2>
                                        <p>Barbeiro Junior</p>
                                        <p>Local : Rua Franz Volles Nº 1636</p>
                                        <div className={estiloTime.boxRedes}>
                                            <Image alt='image' className={estiloTime.imgRedes} src={insta} />
                                            <Image alt='image' className={estiloTime.imgRedes} src={face} />
                                            <Image alt='image' className={estiloTime.imgRedes} src={whats} />
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
                                    <Image alt='image' className={estiloTime.imgBarbeiro} src={barbeiro} />
                                    <div className={estiloTime.boxCimaTx}>
                                        <h2>Ramon 2</h2>
                                        <p>Barbeiro Pleno</p>
                                        <p>Local : Rua Franz Volles Nº 1636</p>
                                        <div className={estiloTime.boxRedes}>
                                            <Image alt='image' className={estiloTime.imgRedes} src={insta} />
                                            <Image alt='image' className={estiloTime.imgRedes} src={face} />
                                            <Image alt='image' className={estiloTime.imgRedes} src={whats} />
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
                                    <Image alt='image' className={estiloTime.imgBarbeiro} src={barbeiro} />
                                    <div className={estiloTime.boxCimaTx}>
                                        <h2>Ramon 3</h2>
                                        <p>Barbeiro Sênior</p>
                                        <p>Local : Rua Franz Volles Nº 1636</p>
                                        <div className={estiloTime.boxRedes}>
                                            <Image alt='image' className={estiloTime.imgRedes} src={insta} />
                                            <Image alt='image' className={estiloTime.imgRedes} src={face} />
                                            <Image alt='image' className={estiloTime.imgRedes} src={whats} />
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


                        <div  className={estiloTime.boxPrevNext}>
                                <span className={colorBtnRight} onClick={prevSlide}>
                                    <FontAwesomeIcon className={estiloTime.iconRight} icon={faChevronRight} />
                                </span>

                                <span className={colorBtnLeft} onClick={BackSlide}>
                                    <FontAwesomeIcon className={estiloTime.iconLeft} icon={faChevronLeft} />
                                </span>
                        </div>



                    </section>

                    
                </section>
           



            <div className={estiloTime.boxTarja}>

                <Image alt='image' className={estiloTime.imgTarja} src={tarja} />

            </div>

        </section>

    )
}
