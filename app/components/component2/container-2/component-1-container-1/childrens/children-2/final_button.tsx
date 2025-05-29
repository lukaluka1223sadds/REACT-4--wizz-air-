'use client'
import { SearchOutlined } from "@ant-design/icons";
import styles from "./page.module.css"
import { useState } from "react";
export default function finalButton(){
    const [modif , setModif] = useState(styles.finalButton)
    function fianluttonmodif(e:number){
        e==1?setModif(styles.finalButtonModif):setModif(styles.finalButton);
    }
    return (
        <>
        <button className={modif} onMouseLeave={()=>fianluttonmodif(2)} onMouseOver={()=>fianluttonmodif(1)}><SearchOutlined /> Cerca</button>
        </>
    )
}