import React,{useState,useEffect} from "react";
import landingstyles from '../styles/landing.module.scss'
import { useSpring, animated } from '@react-spring/web'
import wave from '../assets/wave.svg'
import logo from '../assets/logo.png'
import gym from '../assets/gym.jpeg'
import midimg from '../assets/midimg.jpeg'
import trainerimg from '../assets/headshot.jpeg'
import girlimg from '../assets/girl.jpeg'
import seth from '../assets/seth.jpeg'
import garret from '../assets/garret.jpeg'
 
import Image from "next/image";
 
export default function Menubar({open,setOpen}){
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
