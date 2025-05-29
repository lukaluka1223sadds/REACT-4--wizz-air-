import { Col, Row } from "antd";
import styles from "./page.module.css";

export default function child_2() {
  return (
    <div className={styles.Child_2}>
      <Row style={{ justifyContent: "space-around", alignItems: "center" , paddingBottom:"30px"}}>
        <Col style={{ position: "relative", top: "-22px" }}>
          <h1 style={{ color: "blue" }}>SERVIZI WIZZ</h1>
          <p>
            Hotel <br />
            Noleggio auto <br />
            Trasferimento in/dall'aeroporto <br />
          </p>
        </Col>
        <Col>
          <h1 style={{ color: "blue" }}> Servizio clienti</h1>
          <p>
            Bagaglio <br />
            Pagamenti <br />
            Assistenza speciale <br />
            Check-in online <br />
            Condizioni generali di trasporto <br />
          </p>
        </Col>
        <Col>
          <h1 style={{ color: "blue" }}> Voli e destinazioni</h1>
          <p>
            Stato attuale del volo <br />
            Mappa <br />
            Destinazioni <br />
            Orari <br />
            Informazioni sulla cancellazione <br />
          </p>
        </Col>
        <Col>
          <h1 style={{ color: "blue" }}>Informazioni su Wizz Air </h1>
          <p>
            Informazioni sull'azienda <br />
            Notizie <br />
            Lavoro <br />
            Ufficio stampa <br />
            Per agenti di viaggio e partner <br />
          </p>
        </Col>
      </Row>
      <div>
        <Row className={styles.child_2_1}>
          <Col>
            <h3>Wizz Air Hungary Ltd.</h3>
          </Col>
          <Col>
            {" "}
            <h3>Tutti i diritti riservati.</h3>
          </Col>
          <Col>
            <h3>© 2004–2025 Wizz Air</h3>
          </Col>
          <Col>
            <h3>© 2000–2025 Navitaire</h3>
          </Col>
        </Row>
        <div className={styles.child_2_2}>
          <br />
        <Row className={styles.child_2_3}>
          <Col>Avviso sulla privacy</Col>
          <Col>Informativa sull'uso dei cookie</Col>
          <Col>Dichiarazione di Wizz Air sulla schiavitù moderna</Col>
          <Col>Condizioni di utilizzo del sito web</Col>
          <Col>Registrazione agenzia</Col>
          <Col>Accesso agenzia</Col>
        </Row>
        <br />
      
        <Row className={styles.child_2_3}>
          <Col>Wizz Air app mobile</Col>
          <Col>Iscriviti alla nostra newsletter</Col>
          <Col>Lavoro</Col>
        </Row>
        </div>
      </div>
    </div>
  );
}
