import estiloTopo from './topo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faPhone} from '@fortawesome/free-solid-svg-icons'



export default function Topo() {

    return (

        <section id='idtopo' className={estiloTopo.boxPai}>

            <div  className={estiloTopo.boxHorario}>

                <p>ESTAMOS ABERTOS</p>
                <p> <FontAwesomeIcon className={estiloTopo.icon} icon={faClock} /> TER E SÁB</p>

            </div>

            <div className={estiloTopo.boxEndereco}>

                <p><FontAwesomeIcon className={estiloTopo.icon} icon={faLocationDot}/> NRº 3020 | RUA FREDERICO JENSEN</p>
                <p><FontAwesomeIcon className={estiloTopo.icon} icon={faLocationDot}/> NRº 1636 | RUA RUA FRANZ VOLLES</p>
                <p><FontAwesomeIcon className={estiloTopo.icon} icon={faPhone} />(47)99708-5848</p>

            </div>

          

        </section>


    )


}