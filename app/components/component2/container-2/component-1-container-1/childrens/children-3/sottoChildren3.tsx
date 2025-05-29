'use client'
import styles from "./sottoChildren3.module.css"
import img1 from "../../../../../../../public/carTrawler.webp"
import Image from "next/image"
import Register from "./container-3/registrati"
import Reusable2 from "../../../../../../reusable-components/REUSABLE-component2"
import img2 from "../../../../../../../public/carSeguizi.jpg"
import { useState } from "react"

export default function SottoChildren3(){
    const [imgSize , setImgSize] = useState(styles.carTrawler)
    function image1(e:number){
        e==1?setImgSize(styles.carTrawlerModif):setImgSize(styles.carTrawler)
    }
    return(
        <div className={styles.div}>
            <b className={styles.text1} style={{ fontFamily: "Courier New, monospace" }}>NOLEGGIA UN'AUTO !</b>
            <br />
            <strong className={styles.text2} style={{ fontFamily: "Times New Roman, serif" , display:"block" }}>Accumula credito WIZZ su noleggi auto selezionati e risparmia sul tuo prossimo viaggio</strong>
            <Image className={imgSize} src={img1} alt="" onMouseOver={()=>image1(1)} onMouseLeave={()=>image1(2)}/>
            <div className={styles.register}><Image src={img2} alt="" className={styles.img2}></Image><Register></Register></div>
            <Reusable2 transform="-86px , 140px"/>
        </div>
    )
}