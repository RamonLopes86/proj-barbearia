

import estiloAlert from './alert.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX , faCheck} from '@fortawesome/free-solid-svg-icons'



export default function AlertMsg(props){


    return(

         
                    <section className={`${estiloAlert.boxAlerta} ${props.animaLogin}`}>
                    
                            <FontAwesomeIcon className={estiloAlert.icon} icon={faCheck}/>
                            <p className={estiloAlert.msg}>{props.animaMsg}</p>
                    
                    </section>
        

    )

}