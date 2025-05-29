'use client'
import {Store} from "./store"
import  {Provider} from "react-redux";

interface Prov{
    children:React.ReactNode
}
export default function Provid({children}:Prov){
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    );
}


