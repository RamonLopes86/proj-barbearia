import estiloAgend from './agendamento.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan , faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import seta from '../../../public/setaEsquerda.png'





export default function Agendamento() {

    return (
    
        <section className={estiloAgend.boxMaior}>
            
            <h1>Agendamento</h1>

            <section className={estiloAgend.boxPai}>
               
                <div className={estiloAgend.boxAgendamento}>

                    <h3>Faça seu Agendamento Aqui</h3>

                    <section className={estiloAgend.boxBlocos}>

                        <section className={estiloAgend.boxEsquerda}>

                            <div className={estiloAgend.boxFormulario}>

                                <div className={estiloAgend.boxNome}>
                                    <label htmlFor="idnome">Nome Completo:</label>
                                    <input  placeholder='Seu nome' type="text" name="nome" id="idnome" autoComplete='off' />
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
                                            <input type="date" name="data" id="iddata" />
                                        </div>

                                        <div>
                                            <label htmlFor="idtime">Hora</label>
                                            <input type="time" name="time" id="idtime" />
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

                    <div className={estiloAgend.Arrow}>

                                <Image className={estiloAgend.imgSeta} src={seta}/>

                    </div>


                <div className={estiloAgend.boxInfo}>
                    info
                </div>
            </section>
    </section>
    )
}