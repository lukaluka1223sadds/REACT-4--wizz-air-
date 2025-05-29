import { Col, Row } from "antd";
import styles from "./page.module.css";
import REUSABLE_1 from "@/app/reusable-components/REUSABLE-component1";
import App from "./input-1";
import SmallCalendarButton from "./calendar";
import Persons from "./personNumber";
import FinalButton from "./final_button"

export default function Children1() {
  return (
    <div >
      <REUSABLE_1>
        <hr />
        <Row className={styles.labels}>
        <b> <h2> Andata </h2> </b>
        <b> <h2> Ritorno </h2> </b>
        <b> <h2> Andata data </h2> </b>
        <b> <h2> Ritorno data </h2> </b>
        <b> <h2> Passegeri </h2> </b>
      </Row>
        <Row className={styles.button_grid}>
          <Col ><App>Origine</App><App>destinazione</App></Col>
          <Col ><SmallCalendarButton placeholder="Andata da"></SmallCalendarButton></Col>
          <Col ><SmallCalendarButton placeholder="Ritorno a"></SmallCalendarButton></Col>
          <Col ><Persons></Persons></Col>
          <Col><FinalButton></FinalButton></Col>
        </Row>
      </REUSABLE_1>
    </div>
  );
}
