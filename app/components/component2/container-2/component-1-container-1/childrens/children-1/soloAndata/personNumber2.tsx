import { Col, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { RootState } from "../../../../../../../store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import { aggiungiAdulto } from "../../../../../../../Store - slices/slice-1";
import { AddMinus } from "../../../../../../../Store - slices/slice-2";
import { ArrMinPlus } from "../../../../../../../Store - slices/slice-3";

export default function Select() {
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store.Adult);
  const store2 = useSelector((store: RootState) => store.Bambino);
  const store3 = useSelector((store: RootState) => store.Neonato);

  function Minus(e: number) {
    {
      e == 1 && dispatch(aggiungiAdulto(store - 1));
    }
    {
      e == 2 && dispatch(AddMinus(store2 - 1));
    }
    {
      e == 3 && dispatch(ArrMinPlus(store3 - 1));
    }
  }
  function Plus(e: number) {
    {
      e == 1 && dispatch(aggiungiAdulto(store + 1));
    }
    {
      e == 2 && dispatch(AddMinus(store2 + 1));
    }
    {
      e == 3 && dispatch(ArrMinPlus(store3 + 1));
    }
  }

  return (
    <div
      style={{
        margin: "5px 0 0 20px",
        height: "120px",
        width: "140px",
        backgroundColor: "#dbdbdb",
        borderRadius: "10px",
      }}
    >
      <Row>
        <MinusOutlined
          onClick={() => Minus(1)}
          className={styles.clickArrMinus}
        />
        <Col>
          <p
            style={{ marginTop: "7px", marginBottom: "7px", marginLeft: "7px" }}
          >
            adulti :{store}
          </p>
        </Col>
        <PlusOutlined
          onClick={() => Plus(1)}
          className={styles.clickArrMinus1}
        />
      </Row>
      <hr />
      <Row>
        <MinusOutlined
          onClick={() => Minus(2)}
          className={styles.clickArrMinus}
        />
        <Col>
          <p
            style={{ marginTop: "7px", marginBottom: "7px", marginLeft: "7px" }}
          >
            bambini :{store2}
          </p>
        </Col>
        <PlusOutlined
          onClick={() => Plus(2)}
          className={styles.clickArrMinus3}
        />
      </Row>
      <hr />
      <Row>
        <MinusOutlined
          onClick={() => Minus(3)}
          className={styles.clickArrMinus}
        />
        <Col>
          
          <p
            style={{ marginTop: "7px", marginBottom: "7px", marginLeft: "7px" }}
          >
            neonati :{store3}
          </p>
        </Col>
        <PlusOutlined
          onClick={() => Plus(3)}
          className={styles.clickArrMinus2}
        />
      </Row>
    </div>
  );
}
