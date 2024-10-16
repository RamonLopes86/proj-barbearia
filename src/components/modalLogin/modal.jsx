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




    function changeLogin(ev){

        setTxInputLogin(ev.target.value)
       
    }
        
    
    function changeSenha(ev){
 
 
     setSenha(ev.target.value)
 
 
    }


         

      



    function logar(ev){

        ev.preventDefault()

    }


    return(

    
            
            <section className={`${estiloModal.boxPaiModal} ${props.telaLogin} `}>
                <section className={estiloModal.boxFilho}>
                        < FontAwesomeIcon icon={faX} onClick={props.closeLogin} className={estiloModal.iconXis} />
                        <h1>Bem vindo</h1>
                        <Image className={estiloModal.iconImg} src={logo}/>
                        <form  className={estiloModal.boxFormulario} action="#">
                           <div className={estiloModal.boxUsuario}>
                                <input  placeholder=' '   onChange={changeLogin}   value={TxinputLogin}   type="text" name="login" id="idlogin" autoComplete='off' />
                                <label   htmlFor="idusuario">usuário</label>
                                <p></p>
            
                           </div>
                           <div className={estiloModal.boxSenha}>
                                <input placeholder=' '  onChange={changeSenha}   value={senha} type="password" name="senha" id="idesenha" />
                                <label  htmlFor="idsenha">senha</label>
                               <p></p>
                           </div>
            
            
                            <div className={estiloModal.boxButton}>
            
                                <button onClick={logar}>ENTRAR</button>
                                <p>Precisa de ajuda ? clique aqui</p>
            
                            </div>
                        </form>
            
                </section>
            </section>
       
    )

}
