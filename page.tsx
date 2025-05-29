"use client";
import React, { useState } from "react";
import {
  CheckCircleOutlined,
  DoubleRightOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  QuestionOutlined,
  RadarChartOutlined,
}from "@ant-design/icons";
import { MenuProps , Col , Row} from "antd";
import { Menu } from "antd";
import wizzpng from "../../../../../public/wizz png.png";
import Image from "next/image";
import styles from "./page.module.css";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Pianifica",
    key: "mail",
    icon: <DoubleRightOutlined />,
  },
  {
    label: "Hotel",
    key: "app",
    icon: <HomeOutlined />,
  },
  {
    label: "Auto",
    key: "SubMenu",
    icon: <QuestionOutlined />,
  },
  {
    label: "Wizz e servizi",
    key: "Wizz1",
    icon: <RadarChartOutlined />,
  },
  {
    label: "Centro di assistenza",
    key: "Wizz2",
    icon: <QuestionCircleOutlined />,
  },
  {
    label: "Check in & Prenotazioni",
    key: "Wizz3",
    icon: <CheckCircleOutlined />,

  },
  {
    key: "alipay",
    label: (
      <a
        href="https://www.wizzair.com/it-it"
        target="_blank"
        rel="noopener noreferrer"
      >
        Naviga su sito ufficiale - Link
      </a>
    ),
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
   <Row className={styles.menuBar}>
    <Col>
    <Image src={wizzpng} alt="" className={styles.img1}></Image>
    </Col>
    <Col className={styles.col1}>
     <Menu className={styles.menuBar} style={{  width: "1040px" , height:"50px" }} onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" items={items} />
    </Col>
   </Row>
  );
};

export default App;
