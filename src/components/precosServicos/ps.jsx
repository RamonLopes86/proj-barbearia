'use client'

import estiloPs from './px.module.css';
import react, { useState, useEffect, useRef } from 'react';
import { dados } from '../dados/dados';
import Image from 'next/image';
import logo from '../../../public/penteado.png'


export default function Ps() {




    return (

        <section className={estiloPs.boxPai}>

            <h1>Preços e Serviços</h1>





            <div className={estiloPs.conteudo}>

               


                <div className={estiloPs.cont1}>

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

                <div className={estiloPs.contMeio}>

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
                        
                     
                        <button className={estiloPs.btnSaibaMais}>Saiba Mais</button>
                           
                       

                    </div>

                </div>


                <div className={estiloPs.cont1}>

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


                <div className={estiloPs.boxEscondido}>

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