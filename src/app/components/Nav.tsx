import React,{useState} from "react";
import landingstyles from '../styles/landing.module.scss'
import logo from '../assets/logo.png'

export default function Nav({open,toggle}){
    

    return (
        <>

        <nav className={landingstyles.nav}>
        <div className={landingstyles.logo}>
            <img src={logo.src} alt="" />
        </div>
        <div className={landingstyles.navlinks}>
            <a href="" className={landingstyles.navactive}>Home</a>
            <a href="">About</a>
            <a href="">Our Trainer</a>
            <a href="">Why Us</a>
            <a href="">Plans</a>
            <a href="">Contact</a>
        </div>

        <div className={landingstyles.navbtns}>
            <a href="">
                Get Started
            </a>

        </div>
        <div className={landingstyles.menu_icon}>
        <i className='bx bx-menu' onClick={()=>toggle()}></i>
        </div>

    </nav>
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