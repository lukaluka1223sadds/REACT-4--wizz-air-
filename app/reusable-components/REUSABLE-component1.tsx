'use client'
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

interface Ch {
    children?: React.ReactNode;
    translate?: string;
    width?: number;
}

export default function REUSABLE_1(e?: Ch) {
    const [width, setWidth] = useState("");
    useEffect(() => {
        if (e?.width) {
            setWidth(e.width as unknown as string);
        }
    }, [e?.width]); 

    return (
        <div className={styles.div1} style={{ transform: `translate(${e?.translate})`, width: `${width}px` }}>
            {e?.children}
        </div>
    );
}
