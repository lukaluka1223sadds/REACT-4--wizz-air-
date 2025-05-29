'use client'
import { Col, Row } from "antd"
import AndataRitorno from "./andataRitorno/children-1"
import { useState } from "react"
import SoloAndata from "./soloAndata/children-1"
import REUSABLE_1 from "../../../../../../reusable-components/REUSABLE-component1"

import REUSABLE2 from "@/app/reusable-components/REUSABLE-component2"
import React from "react";
import SwiperComponent from "./swiper/page"



export const Andataritorno=()=>{
    const [boll , setBoll] = useState<Boolean>(true)
    function b(e:number){
      {e==1 && setBoll(true)}
      {e==2 && setBoll(false)}
    }

   

    return(
      <>
        <REUSABLE_1 translate="-16px , -15px">
        <Row>
          <Col>
            <input onClick={()=>b(1)} style={{marginLeft:"20px" , marginRight:"20px" , height:"20px" , width : "20px"}} type="radio" name="gender" defaultChecked/> ANDATA E RITORNO
          </Col>
          <Col>
            <input onClick={()=>b(2)} style={{marginLeft:"20px" ,  marginRight:"20px" , height:"20px" , width : "20px"}} type="radio" name="gender"/>SOLO ANDATA
          </Col>
        </Row>
        {boll ? <AndataRitorno/> : <SoloAndata/>}
        
        </REUSABLE_1>
        
        <h1 style={{fontSize:"64px" , width:"700px" , color:"white" , margin:"130px 0 60px 0"}}>SCENE DI PRIMAVERA</h1>
        <h4 style={{fontSize:"30px" , width:"740px" , color:"white"}}>Esplora panorami mozzafiato e spumeggianti  città! <br /> Viaggia fino a maggio.</h4>

        <SwiperComponent></SwiperComponent>


        <REUSABLE2 transform="-86px , 120px"></REUSABLE2></>
    )
}