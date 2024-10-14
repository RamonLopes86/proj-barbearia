'use client'

import estiloPs from './px.module.css';
import react, { useState, useEffect, useRef } from 'react';
import { dados } from '../dados/dados';
import Image from 'next/image';
import logo from '../../../public/penteado.png'


export default function Ps() {

    // getBoundingClientRect()

    const boxConteudo = useRef([])

    const [animaCont , setAnimaCont] = useState(estiloPs.animaContOff)
    const[animaCont2 , setAnimaCont2] = useState(estiloPs.animaContMeioOff)

    useEffect(()=>{

        const myobserver = new IntersectionObserver((elemento)=>{


                elemento.forEach((elemento)=>{

                    if(elemento.isIntersecting){

                        if(elemento.target === boxConteudo.current[0]){

                            setAnimaCont(estiloPs.animaContOn)
                            
                        }

                        if(elemento.target === boxConteudo.current[1]){

                            setAnimaCont2(estiloPs.animaContMeioOn)
                           
                        }

                        if(elemento.target === boxConteudo.current[2]){

                            setAnimaCont(estiloPs.animaContOn)
                        }
                        
                    }else{

                        if(elemento.target === boxConteudo.current[0]){

                            setAnimaCont(estiloPs.animaContOff)
                        }

                        if(elemento.target === boxConteudo.current[1]){

                            setAnimaCont2(estiloPs.animaContMeioOff)
                        }

                        if(elemento.target === boxConteudo.current[2]){

                            setAnimaCont(estiloPs.animaContOff)
                        }
                    }


                })


        })

        
      
    
        

       
       boxConteudo.current.forEach((boxConteudo)=>{

           if(boxConteudo){

            myobserver.observe(boxConteudo)

           }

       })


       


       return () => {

        boxConteudo.current.forEach((boxConteudo)=>{

            if(boxConteudo){
 
             myobserver.unobserve(boxConteudo)
 
            }
 
        })

        
       }

    },[])



    return (

        <section className={estiloPs.boxPai}>


            <h1 >Preços e Serviços</h1>


            <div   className={`${estiloPs.conteudo}  `}>

               


                <div ref={(el)=> (boxConteudo.current[0] = el)}  className={`${estiloPs.cont1} ${animaCont}`}>

                    {

                        dados.map((dados, index) =>

                            <div key={index} className={estiloPs.moldura}>


                                <Image className={estiloPs.img} alt='imagens' src={dados.img} />


                                <div className={estiloPs.boxTx}>
                                    <h1>{dados.tit}</h1>
                                    <p>{dados.des}</p>
                                </div>

                                <div className={estiloPs.boxBtn}>
                                    <button>R$ {dados.preco}</button>
                                    <button>{dados.btn}</button>
                                </div>

                            </div>

                        ).splice(0, 4)


                    }

                </div>

                <div ref={(el) => (boxConteudo.current[1]= el)} className={`${estiloPs.contMeio} ${animaCont2}`}>

                    <h2>Assinatura Mensal</h2>

                    <Image className={estiloPs.imgLogo} alt='imagem logo' src={logo} />

                    <p>Exclusiva assinatura mensal, onde você pode cortar o cabelo e fazer a barba quantas vezes quiser durante todo o mês.Garantindo que você esteja sempre com o visual impecável sempre que precisar.</p>


                    <div className={estiloPs.boxBtnMeio}>

                        <div className={estiloPs.btnTx}>
                            <span>plano completo + descontos</span>
                            <button>R$ 80</button>
                        </div>
                        <div className={estiloPs.btnTx}>
                            <span>cabelo ou barba + descontos</span>
                            <button>R$ 60</button>
                        </div>
                        
                     
                        <button  className={estiloPs.btnSaibaMais}>Saiba Mais</button>
                           
                       

                    </div>

                </div>


                <div ref={(el)=> boxConteudo.current[2] = el} className={`${estiloPs.cont1} ${animaCont} ${estiloPs.cont2}`}>

                    {

                        dados.map((dados, index) =>

                            <div key={index} className={estiloPs.moldura}>


                                <Image className={estiloPs.img} alt='imagens' src={dados.img} />


                                <div className={estiloPs.boxTx}>
                                    <h1>{dados.tit}</h1>
                                    <p>{dados.des}</p>
                                </div>

                                <div className={estiloPs.boxBtn}>
                                    <button>R$ {dados.preco}</button>
                                    <button>{dados.btn}</button>
                                </div>

                            </div>

                        ).splice(4, 8)


                    }

                </div>


                <div  className={`${estiloPs.boxEscondido} `}>

                    {

                        dados.map((dados , index)=>
                            
                            <div key={index} className={estiloPs.moldura}>


                            <Image className={estiloPs.img} alt='imagens' src={dados.img} />


                            <div className={estiloPs.boxTx}>
                                <h1>{dados.tit}</h1>
                                <p>{dados.des}</p>
                            </div>

                            <div className={estiloPs.boxBtn}>
                                <button>R$ {dados.preco}</button>
                                <button>{dados.btn}</button>
                            </div>

                        </div>

                        
                        
                        )


                    }


                </div>



            </div>



        </section>
    )
}