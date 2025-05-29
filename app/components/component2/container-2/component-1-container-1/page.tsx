"use client"
import styles from "./page.module.css"
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { CarOutlined , SendOutlined , HomeOutlined} from "@ant-design/icons";
import {Andataritorno} from "./childrens/children-1/1";
import Children2 from "./childrens/children-2/children-2";
import Children3 from "./childrens/children-3/page";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Voli',
    children: <Andataritorno/>,
    icon:<SendOutlined />
  },
  {
    key: '2',
    label: 'Hotel',
    children:<Children2/>,
    icon:<HomeOutlined />,
  },
  {
    key: '3',
    label: 'Auto',
    children: <Children3 />,
    icon:<CarOutlined />
  },
];

const App: React.FC = () => {return(<><Tabs className={styles.quadrato} style={{display:"inherit !important" }} defaultActiveKey="1" items={items}/></>)}

export default App;