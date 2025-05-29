import SmallCalendarButton from "./calendar"
import styles from "./page.module.css"
import FinalButton from "./final_button"
import {Row, Col} from "antd"
export default function input1(){
    return(
    <>
    <hr />
       <Row>
        <Col>
        <h1 style={{marginLeft:"80px", display:"inline-block" , marginTop:"11px"}}>Dove</h1>
        <h1 style={{marginLeft:"360px", display:"inline-block" , marginTop:"11px"}}>Data dal</h1>
        <h1 style={{marginLeft:"85px", display:"inline-block" , marginTop:"11px"}}>Fino al</h1>
        </Col></Row> 
       
        <input type="text" className={styles.input_1} placeholder="Qual è la tua destinazione"/>
        <SmallCalendarButton placeholder="check in" ></SmallCalendarButton>
        <SmallCalendarButton placeholder="check out" ></SmallCalendarButton>
        <FinalButton ></FinalButton>
    </>
    )
}