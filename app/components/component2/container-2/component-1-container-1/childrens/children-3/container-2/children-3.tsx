import styles from "./page.module.css"
import {Row , Col} from "antd"
import SmallCalendarButton from "./calendar"
import InputOra from "./inputOra"
import FinalButton from "./final_button"

export default function Children1(){

    return(
        <Row style={{transform:"translate(560px , -80px)" , width:"800px"}}>
                    <Col>
                        <input 
                            type="text" 
                            className={styles.input_1} 
                            placeholder="Localita di ricerca"
                        />
                    </Col>
                <Col><SmallCalendarButton placeholder="Data di ritiro"></SmallCalendarButton></Col>
                <Col><InputOra></InputOra></Col>
            <Col><FinalButton></FinalButton></Col>
        </Row>
    )
}

