"use client"
import { useEffect, useState } from "react";
import Wizziar from "./components/component1/page";
import styles from "./page.module.css"
import App from "./components/component2/page";

export default function Home(){
  const [change, setChange] = useState(true);
  const [router , setRouter]= useState("1")
  const promise=new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve
    },5000)
  })
  const pr=promise
  pr.then(()=>{
    setChange(prevState => !prevState)
  })
  useEffect(()=>{
  },[change])
  return (<><App></App></>)
}