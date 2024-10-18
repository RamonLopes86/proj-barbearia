'use client'

import estiloPglogado from './paglogado.module.css'
import Image from "next/image"
import banner from '../../../public/bg-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning , faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../public/penteado.png'
import React , {useState , useRef , useEffect} from 'react'



export default function PaginaLogada(){

    const [animaLogon , setAnimaLogon] = useState(null)

    function clickLogon(){

        setAnimaLogon(animaLogon === null ? estiloPglogado.boxImgsAnima : null)

    }


    return(


        <section className={estiloPglogado.boxPai}>

            <p className={estiloPglogado.msg}>sair</p>


            <div onClick={clickLogon} className={estiloPglogado.boxOver}>

                <div className={`${estiloPglogado.boxImgs} ${animaLogon}`}>

                  
                        <FontAwesomeIcon className={estiloPglogado.sair} icon={faPersonRunning} />
                        
                        <FontAwesomeIcon className={estiloPglogado.entrar} icon={faDoorOpen} />
                  

                </div>
                        
            </div>
                 




            <section className={estiloPglogado.boxFilho}>


                    <div className={estiloPglogado.boxTitulo}>
                        
                        <Image className={estiloPglogado.logo} src={Logo}/>

                        <div className={estiloPglogado.boxTx}>

                            <h1>Blade's Place BarberShop</h1>
                            <p>Configura , Analise e Gerencie</p>


                        </div>

                    </div>

                    <div className={estiloPglogado.boxPainelControle}>

                        <div className={estiloPglogado.boxBotoes}>

                            <button>clientes</button>
                            <button>Tabela de preços</button>
                            <button>Faturamento</button>
                            <button>cadastrar clientes</button>
                            <button>funcionarios</button>
                            <button>comanda</button>

                        </div>

                    </div>

            </section>

                
        </section>
    )
}