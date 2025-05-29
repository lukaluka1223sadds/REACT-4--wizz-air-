import styles from "./page.module.css";
import REUSABLE_1 from "@/app/reusable-components/REUSABLE-component1";
import { Row, Col } from "antd";
import App from "./inputNumber";
import SmallCalendarButton from "./calendar";
import InputOra from "./inputOra";

export default function Children1() {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <REUSABLE_1 translate="-16px , -16px" width={1330}>
        <Row>
          <Col >
            <h5>
              Età conducente : <App />
            </h5>
          </Col>
        </Row>
        <Row className={styles.titles}>
        <Row className={styles.title1}>
          <Col><h2>Sede</h2></Col>
          <Col><h2>Data </h2></Col>
          <Col><h2>Ora</h2></Col>
        </Row>
        <Row className={styles.title2}>
          <Col><h2>Localita</h2></Col>
          <Col><h2>Consegna</h2></Col>
          <Col><h2>Ora</h2></Col>
        </Row></Row>
        <Row style={{position:"relative" , top:5}}>
          <Col>
            <input
              type="text"
              className={styles.input_1}
              placeholder="Sede in ritiro"
            />
          </Col>
          <Col>
            <SmallCalendarButton placeholder="Data di consegna"></SmallCalendarButton>
          </Col>
          <Col>
            <InputOra></InputOra>
          </Col>
        </Row>
      </REUSABLE_1>
    </div>
  );
}
