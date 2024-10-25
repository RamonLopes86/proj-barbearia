

import estiloAlert from './alert.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX , faCheck} from '@fortawesome/free-solid-svg-icons'



export default function AlertMsg(){


    return(

            <section className={estiloAlert.boxAlerta}>
                    <FontAwesomeIcon className={estiloAlert.icon} icon={faCheck}/>
                    <p className={estiloAlert.msg}>mensagem</p>
            </section>
       

    )

}