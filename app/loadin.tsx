import Image from "next/image"
import Walpaper from "../public/walpaper.jpg"
import styles from "./page.module.css"

export const  Loading=()=>{
       return (
       <div style={{overflow:"hidden"}}>
              <Image src={Walpaper} alt="" className={styles.Walpaper}></Image>
       </div>
       )
}