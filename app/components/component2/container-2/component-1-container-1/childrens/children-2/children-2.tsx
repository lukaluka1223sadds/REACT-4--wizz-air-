
import styles from "./page.module.css"
import REUSABLE_1 from "@/app/reusable-components/REUSABLE-component1"
import Input1 from "./input-1"
import REUSABLE2 from "@/app/reusable-components/REUSABLE-component2"
export default function Children2(){
    return(
        <div className={styles.div}>
        <REUSABLE_1 translate="-16px , -16px">
            <Input1></Input1>
        </REUSABLE_1>
        <h1 style={{fontSize:"64px" , width:"700px" , color:"white" , margin:"100px 0 60px 0"}}>Booking.com</h1>
        <p  style={{fontSize:"30px" , width:"740px" , color:"white"}}>Prenota l'hotel con Booking.com e ricevi il 5% della prenotazione in crediti WIZZ.</p>
        <REUSABLE2 transform="-87px , 120px"></REUSABLE2>
        </div>
    )
}