'use client'

import estiloModal from './modal.module.css';
import Image from 'next/image';
import logo from '../../../public/penteado.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'
import React,{useState , useRef , useEffect} from 'react';



export default function ModalLogin(props){

    

    const [TxinputLogin , setTxInputLogin] = useState('')
    const [senha , setSenha] = useState('')

   const [labelUser , setLabelUser]= useState(estiloModal.boxAnimaInputOff)
   const [labelSenha , setLabelSenha] = useState(estiloModal.boxAnimaInputOff)

   const [tarjaLogin , setTarjaLogin] = useState(estiloModal.tarjaOff)
   const [tarjaSenha , setTarjaSenha] = useState(estiloModal.tarjaOff)

    

    function changeLogin(ev){

        setTxInputLogin(ev.target.value)
       
    }
        
    
    function changeSenha(ev){
 
 
     setSenha(ev.target.value)
 
 
    }


    function  focarInput(input){

     
        if(input.length >=0){

            setLabelUser(estiloModal.boxAnimaInputOn)
            setTarjaLogin(estiloModal.tarjaOn)
            
        }

    }

     

    function desfocarInputTx(input){

        if(input === ''){

            setLabelUser(estiloModal.boxAnimaInputOff)
            setTarjaLogin(estiloModal.tarjaOff)
        }
    }


    function  focarSenha(input){

     
        if(input.length >=0){

            setLabelSenha(estiloModal.boxAnimaInputOn)
            setTarjaSenha(estiloModal.tarjaOn)
            
        }

    }

     

    function desfocarSenha(input){

        if(input === ''){

            setLabelSenha(estiloModal.boxAnimaInputOff)
            setTarjaSenha(estiloModal.tarjaOff)
        }
    }

         

      

      

      



    function logar(ev){

        ev.preventDefault()

    }


    return(

        <div className={estiloModal.boxMaior}>
            
            <section className={`${estiloModal.boxPaiModal} ${props.telaLogin} `}>
                <section className={estiloModal.boxFilho}>
                        < FontAwesomeIcon icon={faX} onClick={props.closeLogin} className={estiloModal.iconXis} />
                        <h1>Bem vindo adm</h1>
                        <Image className={estiloModal.iconImg} src={logo}/>
                        <form  className={estiloModal.boxFormulario} action="#">
                           <div className={estiloModal.boxUsuario}>
                                <input onFocus={()=>focarInput(TxinputLogin)} onBlur={()=>desfocarInputTx(TxinputLogin)}  onChange={changeLogin}   value={TxinputLogin}   type="text" name="login" id="idlogin" autoComplete='off' />
                                <label  className={labelUser}  htmlFor="idusuario">usuário</label>
                                <p className={tarjaLogin}></p>
            
                           </div>
                           <div className={estiloModal.boxSenha}>
                                <input onFocus={()=>focarSenha(senha)} onBlur={()=> desfocarSenha(senha)} onChange={changeSenha}   value={senha} type="password" name="senha" id="idesenha" />
                                <label className={labelSenha} htmlFor="idsenha">senha</label>
                               <p className={tarjaSenha}></p>
                           </div>
            
            
                            <div className={estiloModal.boxButton}>
            
                                <button onClick={logar}>ENTRAR</button>
                                <p>Precisa de ajuda ? clique aqui</p>
            
                            </div>
                        </form>
            
                </section>
            </section>
        </div>
    )

}
