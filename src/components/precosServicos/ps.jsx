'use client'

import estiloPs from './px.module.css';
import react ,{useState , useEffect , useRef} from 'react';
import { dados } from '../dados/dados';

export default function Ps(){

    const [array , setArray] = useState(dados)


    return(

        <section className={estiloPs.boxPai}>

                <h1>Preços e Serviços</h1>


                <div className={estiloPs.conteudo}>


                    <div className={estiloPs.cont1}>

                        {




                        }

                    </div>

                    <div className={estiloPs.contMeio}>

                    </div>
                    

                    <div className={estiloPs.cont2}>



                    </div>



                </div>



        </section>
    )
}