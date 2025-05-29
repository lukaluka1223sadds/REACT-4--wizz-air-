'use client'
import { Col, Row } from "antd";
import { useState } from "react";
import Select from "./personNumber2";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../store";
export default function Persons() {
  const Store1 = useSelector((Store: RootState) => {
    return Store.Adult;
  });
  const Store2 = useSelector((Store: RootState) => {
    return Store.Bambino;
  });
  const Store3 = useSelector((Store: RootState) => {
    return Store.Neonato;
  });
  const [boll, setBoll] = useState<Boolean>(false);
  console.log(boll);
  const Placeholder = {};
  function button() {
    setBoll((prevState) => !prevState);
  }
  return (
    <div>
      <Row>
        <Col>
          <button className={styles.Input2} onClick={button} id="button1">
            <p>
              
              adulti : <b> {Store1} </b>
              {Store2 == 0 ? (
                ""
              ) : (
                <>
                 / bambini : <b> {Store2}  </b>
                </>
              )}
              {Store3 == 0 ? (
                ""
              ) : (
                <>
                  / neonato : <b> {Store3}</b>
                </>
              )}
            </p>
          </button>
        </Col>
      </Row>
      <Row>
        <Col>{boll && <Select></Select>}</Col>
      </Row>
    </div>
  );
}
