'use client'
import { useState } from "react";
import styles from "./page.module.css";
import { Col, Row } from "antd";
export default function inputOra() {
  
  const [ora, setOra] = useState(12);
  const [ora1, setOra1] = useState(0);

  function buttons(e: number) {
    e == 1 ? setOra1(ora1 - 15) : setOra1(ora1 + 15);
    ora > 12 ? ora == 0 : ora;
  }

  if (ora1 > 59) {
    setOra(ora + 1);
    setOra1(0);
  }

  if (ora1 < 0) {
    setOra(ora - 1);
    setOra1(45)
  }

  if(ora<0 ){
     setOra(23)
     setOra1(45)
  }
  
  if(ora==23 && ora1>45){
    setOra(0)
    setOra1(0)
  }

  return (
    <div className={styles.Input_2}>
      
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "193px",
          fontSize: "20px",
        }}
      >

        <Col>
          <h2
            style={{
              height: "30px",
              width: "30px",
              backgroundColor:"pink",
              paddingLeft: "11px",
              paddingBottom: "10px",
              borderRadius: "100px",
              border:"1px solid black",
              marginRight: "10px",
              cursor:"default",
              userSelect:"none"
            }}
            onClick={() => buttons(1)}
          >
            -
          </h2>
        </Col>

        <Col>
          <h2 style={{ height: "40px", width: "40px", position:"relative" , left:"-10px" }}>
            {ora<10?`0${ora}`:ora}:{ora1==0?`0${ora1}`:ora1}
          </h2>
        </Col>

        <Col>
          <h2
            style={{
              height: "30px",
              width: "30px",
              backgroundColor: "pink",
              border:"1px solid black",
              paddingLeft: "8px",
              borderRadius: "100px",
              cursor:"default",
              userSelect:"none"
            }}
            onClick={() => buttons(2)}
          >
            +
          </h2>
        </Col>
      </Row>
    </div>
  );
}
