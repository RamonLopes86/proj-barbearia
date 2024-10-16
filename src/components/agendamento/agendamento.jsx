'use client'

import estiloAgend from './agendamento.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import seta from '../../../public/setaEsquerda.png'
import React, {useState  , useRef , useEffect} from 'react';






export default function Agendamento() {

   const [useBox1 , setUseBox1] = useState(estiloAgend.animaBx1Off)
   const [useBox2 , setUseBox2] = useState(estiloAgend.animaBx2Off)
   const [useImage , setUseImage] = useState(estiloAgend.imageIconOff)
 
    

    const boxRef = useRef([])
    


   


    useEffect(()=>{

        const myObserver = new IntersectionObserver((el)=>{

            el.forEach((el)=>{

                if(el.isIntersecting){


                    if(el.target === boxRef.current[0]){

                        setUseBox1(estiloAgend.animaBx1On)
                    }else if(el.target === boxRef.current[1]){

                        setUseBox2(estiloAgend.animaBx2On)
                    }else if(el.target === boxRef.current[2]){

                        setUseImage(estiloAgend.imageIconOn)
                    }

                }else{

                    if(el.target === boxRef.current[0]){

                        setUseBox1(estiloAgend.animaBx1Off)
                    }else if(el.target === boxRef.current[1]){

                        setUseBox2(estiloAgend.animaBx2Off)
                    }else if(el.target === boxRef.current[2]){

                        setUseImage(estiloAgend.imageIconOff)
                    }


                }

            })


           
        })





        boxRef.current.forEach((boxRef)=>{

           if(boxRef){

            myObserver.observe(boxRef)
           }

        })


        return () => {

            boxRef.current.forEach((boxRef)=>{

                if(boxRef){

                    myObserver.unobserve(boxRef)
                }

            })

        }


    },[])
    
    

    return (

        <section  className={estiloAgend.boxMaior}>

            <div id='idagendamento' className={estiloAgend.scrollEscondido}>.</div>

            <h1  >Agendamento</h1>

            <section className={estiloAgend.boxPai}>

                <div ref={(el) => boxRef.current[0]= el} className={`${estiloAgend.boxAgendamento}  ${useBox1}` }>

                    <h3>Faça seu Agendamento Aqui</h3>

                    <section className={estiloAgend.boxBlocos}>

                        <section className={estiloAgend.boxEsquerda}>

                            <div className={estiloAgend.boxFormulario}>

                                <div className={estiloAgend.boxNome}>
                                    <label htmlFor="idnome">Nome Completo:</label>
                                    <input placeholder='Seu nome' type="text" name="nome" id="idnome" autoComplete='off' />
                                </div>
                                <div className={estiloAgend.boxMail}>
                                    <label htmlFor="idmail">E-mail:</label>
                                    <input placeholder='email@exemplo.com' type="email" name="mail" id="idmail" autoComplete='off' />
                                </div>
                                <div className={estiloAgend.boxTel}>
                                    <label htmlFor="idtel">Telefone:</label>
                                    <input placeholder='(xx)xxxx-xxxx' type="tel" name="tel" id="idtel" autoComplete='off' />
                                </div>
                            </div>
                            <div className={estiloAgend.boxRadio}>
                                <p>Assinante do plano mensal?</p>

                                <div className={estiloAgend.boxRadioAlter}>

                                    <div className={estiloAgend.boxSim}>
                                        <label htmlFor="idsim">Sim</label>
                                        <input type="radio" name="escolha" id="idsim" />
                                    </div>
                                    <div className={estiloAgend.boxNao}>
                                        <label htmlFor="idnao">Não</label>
                                        <input type="radio" name="escolha" id="idnao" />
                                    </div>

                                </div>

                            </div>

                            <div className={estiloAgend.boxData}>

                                <div className={estiloAgend.boxDataFilho}>
                                    <div>
                                        <label htmlFor="iddata">Data</label>
                                        <input  type="date" name="data" id="iddata" />
                                    </div>

                                    <div>
                                        <label htmlFor="idtimes">Hora</label>
                                        <input type="time" name="time" id="idtimes" />
                                    </div>



                                </div>
                                <p>(ter a sex:09:00h as 19:30 | sáb: 08:00h as 18:30h)</p>

                            </div>

                        </section>


                        <section className={estiloAgend.boxDireita}>

                            <p className={estiloAgend.pTeste}>Serviços escolhidos</p>

                            <div className={estiloAgend.boxServicos}>

                                <div className={estiloAgend.servicos}>
                                    <FontAwesomeIcon className={estiloAgend.iconLixo} icon={faTrashCan} />
                                    <div className={estiloAgend.boxCorte}>
                                        <div className={estiloAgend.circulo}>
                                            {/* div para border-radius */}
                                        </div>
                                        <div className={estiloAgend.boxTxt}>
                                            <h3>Corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>
                                    <button>R$ 30</button>
                                </div>

                                <div className={estiloAgend.servicos}>
                                    <FontAwesomeIcon className={estiloAgend.iconLixo} icon={faTrashCan} />
                                    <div className={estiloAgend.boxCorte}>
                                        <div className={estiloAgend.circulo}>
                                            {/* div para border-radius */}
                                        </div>
                                        <div className={estiloAgend.boxTxt}>
                                            <h3>Corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>
                                    <button>R$ 30</button>
                                </div>

                                <div className={estiloAgend.servicos}>
                                    <FontAwesomeIcon className={estiloAgend.iconLixo} icon={faTrashCan} />
                                    <div className={estiloAgend.boxCorte}>
                                        <div className={estiloAgend.circulo}>
                                            {/* div para border-radius */}
                                        </div>
                                        <div className={estiloAgend.boxTxt}>
                                            <h3>Corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>
                                    <button>R$ 30</button>
                                </div>
                            </div>

                            <button className={estiloAgend.btnServicos}>Adicionar mais Serviços  <i>+</i> </button>

                            <div className={estiloAgend.boxBtn}>

                                <button>Concluido</button>
                                <button>Cancelar</button>

                            </div>

                        </section>




                    </section>

                </div>

                
                <div  ref={(el)=> boxRef.current[2] = el}  className={`${estiloAgend.Arrow} ${useImage}`}>

                   

                                <Image   alt='image' className={`${estiloAgend.imgSeta}`} src={seta}/>

                </div>


                <div ref={(el)=> boxRef.current[1]= el}  className={`${estiloAgend.boxInfo} ${useBox2} `}>

                    <div className={`${estiloAgend.boxInfoFilho} `}>

                        <h1>Confira suas informações</h1>

                        <div className={estiloAgend.infoServEscolhido}>

                            <h3>serviços escolhidos:</h3>

                            <div className={estiloAgend.boxMaiorServEscolhido}>

                                <div className={estiloAgend.boxFilhoServEscolhido}>

                                    <div className={estiloAgend.boxCircleText}>
                                        <div className={estiloAgend.boxInfoCirculo}>
                                        </div>
                                        <div className={estiloAgend.boxInfoTx}>
                                            <h3>corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>

                                    <button>R$ 30</button>

                                </div>
                                <div className={estiloAgend.boxFilhoServEscolhido}>

                                    <div className={estiloAgend.boxCircleText}>

                                        <div className={estiloAgend.boxInfoCirculo}>
                                        </div>
                                        <div className={estiloAgend.boxInfoTx}>
                                            <h3>corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>
                                    <button>R$ 30</button>
                                </div>
                                <div className={estiloAgend.boxFilhoServEscolhido}>

                                    <div className={estiloAgend.boxCircleText}>
                                        <div className={estiloAgend.boxInfoCirculo}>
                                        </div>
                                        <div className={estiloAgend.boxInfoTx}>
                                            <h3>corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>

                                    <button>R$ 30</button>
                                </div>
                                <div className={estiloAgend.boxFilhoServEscolhido}>

                                    <div className={estiloAgend.boxCircleText}>
                                        <div className={estiloAgend.boxInfoCirculo}>
                                        </div>
                                        <div className={estiloAgend.boxInfoTx}>
                                            <h3>corte de cabelo</h3>
                                            <p>preço fora da assinatura</p>
                                        </div>
                                    </div>
                                    <button>R$ 30</button>
                                </div>
                            </div>

                        </div>


                    </div>

                    <section className={estiloAgend.boxInformacoes}>

                        <div className={estiloAgend.boxinfoSuasInfo}>

                            <h3>Suas informações</h3>



                            <div className={estiloAgend.boxInfoTx}>

                                <div className={estiloAgend.boxInfoNomes}>
                                    <p>Nome :</p>
                                    <p>E-mail :</p>
                                    <p>Telefone :</p>
                                </div>


                                <div className={estiloAgend.boxinfoData}>
                                    <p>É assinante :</p>
                                    <p>Data :</p>
                                    <p>Hora :</p>
                                </div>


                            </div>



                        </div>

                    </section>


                    <span>Total : <mark>R$ 90</mark></span>



                    <div className={estiloAgend.boxInfoButton}>
                        
                        <button>Agendar</button>
                    
                    </div>



                </div>
            </section>
        </section>
    )
}