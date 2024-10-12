import estiloFooter from './fotter.module.css';
import Image from 'next/image';
import whats from '../../../public/wpp.png'
import insta from '../../../public/instagram.png'
import face from '../../../public/facebook.png'



export default function Rodape() {

    return (

        <section id='idcontato' className={estiloFooter.boxPai}>

            <section className={estiloFooter.boxRedes}>

                <h1>contato</h1>

                <div className={estiloFooter.boxImg}>

                    <Image className={estiloFooter.img} src={whats} />
                    <Image className={estiloFooter.img} src={insta} />
                    <Image className={estiloFooter.img} src={face} />
                </div>

            </section>

            <section className={estiloFooter.boxEndereco}>

                <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti culpa quibusdam facere praesentium, aliquid, voluptatibus dolor quia nisi corrupti quo quasi ex odit quam iusto corporis quos similique libero quae.
                    Odio dignissimos blanditiis ea at, possimus dolor alias, veniam excepturi autem fugiat rerum doloribus ex nobis nostrum vel dolorum neque ipsam. Ipsum quaerat dicta expedita mollitia, alias voluptate aut. Nesciunt.

                </p>

            </section>





        </section>
    )
}