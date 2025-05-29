import styles from "./page.module.css";
import { Row, Col } from "antd";
interface children {
  children?: React.ReactNode;
}
export default function Child_1(e: children) {
  return (
    <div className={styles.child_1}>
      <Row style={{ justifyContent: "space-around" , color:"gray" , paddingTop:"30px" }}>
        <Col>
          <h2 style={{color:"blue"}}> Turismo e aeroporti</h2>
          <br />
          <p>
            <strong>
              Voli economici per Londra <br />
              Voli economici per Atene <br />
              Voli economici per Barcellona <br />
              Voli economici per Budapest <br />
              Voli Catania Milano <br />
              Voli Milano Catania <br />
              Voli Torino Catania <br />
              Voli Catania Torino <br />
              Voli Bologna Catania <br />
              Voli Catania Bologna <br />
              Voli Torino Napoli <br />
            </strong>
          </p>
        </Col>
        <Col>
          <p>
            <br />
            <br />
            <br />
            <strong>
              Voli Napoli Torino <br />
              Voli Catania Verona <br />
              Voli Verona Catania <br />
              Voli Milano Olbia <br />
              Voli Olbia Milano <br />
              Voli Roma Madrid <br />
              Voli Madrid Roma <br />
              Voli per Atene <br />
              Voli per Barcellona <br />
              Visita Rzeszów <br />
              Visita l'Armenia <br />
            </strong>
          </p>
        </Col>
        <Col>
          <p>
            <br />
            <br />
            <br />
            <strong>
              Visita Craiova <br />
              Visita Mykonos <br />
              Visita Sciato <br />
              Visita Cracovia <br />
              Visita la magica Poznan <br />
              Visita Atene <br />
              Visita Salonicco <br />
              Vola a Breslavia <br />
              Visita Saudi Arabia <br />
              Voli per Berlino <br />
              Voli per Bucarest <br />
            </strong>
          </p>
        </Col>
        <Col>
          <p>
            <br />
            <br />
            <br />
            <strong>
              Voli per Creta <br />
              Voli per Ibiza <br />
              Voli per Lisbona <br />
              Voli per Malaga <br />
              Visita Abu Dhabi <br />
              Visita Budapest <br />
              Visita Hamburg <br />
              La magica Poznan vi aspetta <br />
              Scopri Katowice <br />
            </strong>
          </p>
        </Col>
      </Row>
    </div>
  );
}
