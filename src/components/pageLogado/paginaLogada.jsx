'use client'

import estiloPglogado from './paglogado.module.css'
import Image from "next/image"
import banner from '../../../public/bg-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning , faDoorOpen , faX } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../public/penteado.png'
import React , {useState , useRef , useEffect} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'



export default function PaginaLogada(){


    const [animaLogon , setAnimaLogon] = useState(null)
    const [modalExit , setModalExit] = useState(3)
    const [modalAnima, setModalAnima] = useState(estiloPglogado.numerAnimaOff)
    const[modalClientes , setMOdalClientes] = useState([])
    const [animaModal , setAnimaModal] = useState(estiloPglogado.modalAnimaOff)
    const [modalCadastro , setModalCadastro] = useState(estiloPglogado.modalAnimaOff)


    const[inputNome , setInputNome] = useState('')
    const[inputEnd , setInputEnd] = useState('')
    const[inputTel , setInputTel] = useState('')

    const [msg , setMsg] = useState(null)


    const [animaInputNome , setAnimaInputNome] = useState(null)
    const [animaInputEnd , setAnimaInputEnd] = useState(null)
    const [animaInputTel , setAnimaInputTel] = useState(null)


    const router = useRouter()

    const utlGet = 'http://localhost:8000/exibir'
    const urlPost = 'http://localhost:8000/cadastrar'
    

    function clickLogon(){

      
        setAnimaLogon(estiloPglogado.boxImgsAnima)

        setModalAnima(estiloPglogado.numerAnimaOn)



    

        let intervalo = setInterval(()=>{


            setModalExit(prev => {
   
               if (prev === 1){
   
               clearInterval(intervalo)
   
               router.push('./')   
               return 0         
               
                 
               }else{
   
                   return prev - 1
               }
   
            })
         
           }, 1000)

    
        

    }
      
    
    async function exibir(ev){

    ev.preventDefault()


        try {
        
            const response = await axios.get(utlGet)

            setMOdalClientes(response.data)
            console.log(response.data)

            setAnimaModal(estiloPglogado.modalAnimaOn)


        } catch (error) {

            console.log(error.status)

        }


    }


    function closeModalClientes(){

    setAnimaModal(estiloPglogado.modalAnimaOff)

    }


    function openModalCadastrarClientes(nome){

    
        if(nome === 'xis'){

            setModalCadastro(estiloPglogado.modalAnimaOff)
        }else if(nome === 'cad'){

            setModalCadastro(estiloPglogado.modalAnimaOn)
        }
       
    }


    

    useEffect(()=>{

        if(inputNome.length>0){

            setAnimaInputNome(estiloPglogado.inputAnimaOff)
        }
            
        if(inputEnd.length >0){

            setAnimaInputEnd(estiloPglogado.inputAnimaOff)
        }
        if(inputTel.length > 0){

            setAnimaInputTel(estiloPglogado.inputAnimaOff)
        }

        

    },[inputNome , inputEnd , inputTel])


   

    
    async function cadastrarClientes(ev){

        ev.preventDefault()

        const vl = {

        nome:inputNome,
        end:inputEnd,
        tel:inputTel


        }


        try {

            const response = await axios.post(urlPost , vl)

            console.log(response.data)

            

            if(response.data === 'not'){

                   

               

                    if(!inputNome){

                        setAnimaInputNome(estiloPglogado.inputAnimaOn)
                        setMsg('preencha os campos')
                    }
                        
                    if(!inputEnd){
            
                        setAnimaInputEnd(estiloPglogado.inputAnimaOn)
                        setMsg('preencha os campos')
                    }
                    if(!inputTel){
            
                        setAnimaInputTel(estiloPglogado.inputAnimaOn)
                        setMsg('preencha os campos')
                    }

                   
                   
                }
                if(!/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:(9\d{4})-(\d{4})|([2-9]\d{3})-(\d{4}))$/.test(inputTel)){


                setMsg('numero invalido')

            }else{

                setMsg('enviado com suiceso')
            }  

        


        } catch (error) {

            console.log(error.status)
        }
        
            


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

                            <button onClick={exibir}>clientes</button>
                            <button>Tabela de preços</button>
                            <button>Faturamento</button>
                            <button onClick={()=> openModalCadastrarClientes('cad')}>cadastrar clientes</button>
                            <button>funcionarios</button>
                            <button>comanda</button>

                        </div>

                    </div>

            </section>


            <section className={`${estiloPglogado.boxExit} ${modalAnima}`} >
                    

                        <p>saindo em ...</p>

                        <p>{modalExit}</p>
                 
            </section>


            <section className={`${estiloPglogado.boxModalClientes} ${animaModal}`}>

                <div className={estiloPglogado.boxInput}>
                    
                    <h1>pesquise o cliente</h1>
                    <input type="text" name="busca" id="idbusca" autoComplete='off' />
                    
                </div>

                <div onClick={closeModalClientes} className={estiloPglogado.boxClose}>

                        <FontAwesomeIcon className={estiloPglogado.iconX} icon={faX}/>
                </div>

                <div className={estiloPglogado.boxPaiModalClientes}>

                        {

                            modalClientes.map((modalClientes)=>
                            
                               <div className={estiloPglogado.boxMoldura} key={modalClientes.id}>

                                    <div>
                                    <h1>Nome:</h1>
                                    <p>{modalClientes.nome}</p>
                                     
                                    </div>
                                    <div>
                                    <h1>End:</h1>
                                    <p>{modalClientes.endereco}</p>
                                    
                                    </div>

                                    <div>
                                        <h1>Tel:</h1>
                                        <p>{modalClientes.telefone}</p>
                                    </div>

                               </div>
                            )

                        }
                    
                </div>  

            </section>


            <section className={`${estiloPglogado.boxCadastrarClientes} ${modalCadastro} `} >


                        <div className={`${estiloPglogado.boxFormulario} `}>

                               <FontAwesomeIcon onClick={()=>openModalCadastrarClientes('xis')} className={estiloPglogado.iconFechar} icon={faX}/>

                                <h1>Cadastrar Cliente</h1>

                                <form action="#">

                                   <div className={estiloPglogado.boxNome}>

                                    <label htmlFor="idnome">Nome</label>

                                   <input className={animaInputNome} onChange={(ev)=> setInputNome(ev.target.value)} value={inputNome} autoComplete='off' type="text" name="nome" id="idnome" />

                                   </div>

                                   <div className={estiloPglogado.boxEndereco}>

                                    <label htmlFor="idendereco">Endereço</label>
                                   <input className={animaInputEnd} onChange={(ev)=> setInputEnd(ev.target.value)} value={inputEnd} autoComplete='off' type="text" name="endereo" id="idendereco" />

                                   </div>

                                   <div className={estiloPglogado.boxTelefone}>

                                    <label htmlFor="idtel">Telefone</label>
                                    <input className={animaInputTel} onChange={(ev)=> setInputTel(ev.target.value)} value={inputTel} type="tel" name="tel" id="idtel" />

                                   </div>

                                    <div className={estiloPglogado.boxMsg}>
                                        <p>{msg}</p>
                                    </div>

                                   <div className={estiloPglogado.boxBotaoCadastro}>

                                   <button onClick={cadastrarClientes}>cadastrar</button>

                                   </div>

                                </form>

                              

                        </div>



            </section>

                
        </section>
    )
}