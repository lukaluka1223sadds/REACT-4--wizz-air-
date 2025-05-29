import Image from "next/image";
import wizziar from "../../../public/wizziar.jpg"
import styles from "./page.module.css"
export default function Wizziar() {
  return <>
  <h1 className={styles.h1}><b>PRENOTA ORA IL TUO <br /> VIAGGIO DA CASA</b></h1>
  <Image draggable="false" src={wizziar} alt="" className={styles.div1}></Image>
  <h1 className={styles.h1_2}>
    <i>W!ZZ</i>
  </h1>
  </>;
}
