import Image from "next/image";
import styles from "./page.module.css";
import Topo from "@/components/topo/topo";
import Banner from "@/components/sec-banner/banner";
import Ps from "@/components/precosServicos/ps";
import Agendamento from "@/components/agendamento/agendamento";

export default function Home() {
  return (


        <main>

            <Topo/>
            <Banner/>
            <Ps/>
            <Agendamento/>
     

        </main>
  );
}
