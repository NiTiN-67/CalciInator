// import { Buttons } from "../components/Buttons"
import React,{useState} from 'react'
import { Buttons } from "../components/Buttons"
import {Output} from "../components/Output"
export const CalculatorPage = ()=>{
    const [value, setvalue] = useState('')
    const clicked = (val)=>{
        console.log(val);
        
        if(val==='='){
        setvalue(eval(value));
        } 
        else if(val==='AC'){
            setvalue('');
        }
        else{
            setvalue(value+val);
        }

    }
    return(<>
        <Output text={value}/>
        <Buttons fn={clicked}/>

        </>
    )
}