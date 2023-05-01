import React,{useState} from "react";
import landingstyles from '../styles/landing.module.scss'
import logo from '../assets/logo.png'

export default function Nav({open,toggle}){
    

    return (
        <>

    
       {
        open!=null&&
   
    <div className={open ==true?landingstyles.menu:landingstyles.menu1}>
        <div className={landingstyles.menucontent}>
        <div className={landingstyles.menu_x}>
            <i className='bx bx-x' onClick={()=>setOpen(!open)}></i>
            </div>
        <a href="" className={landingstyles.navactive}>Home</a>
                <a href="">About</a>
                <a href="">Our Trainer</a>
                <a href="">Why Us</a>
                <a href="">Plans</a>
                <a href="">Contact</a>
        </div>
        </div>
        
     }
             </>
    )
}