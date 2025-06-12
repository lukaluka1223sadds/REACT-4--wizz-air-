"use client";

import { useState, useEffect } from "react";
import App from "./components/component2/page";
import {Loading} from "./loadin"

export default function Home() {
  const [change, setChange] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChange(true);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {change ? <App /> : <Loading/>}
    </>
  );
}