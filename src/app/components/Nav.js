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
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Tracker from './Tracker'
 export default function NavBar({toggle,open,setOpen}){

    return (
        <>
 
                      <nav className={landingstyles.nav}>
        <div className={landingstyles.logo}>
        <Link href="./">
        <img src={logo.src} alt="" />
        </Link>
  
        </div>
        <div className={landingstyles.navlinks}>
        <ScrollLink
  activeClass="active"
  to="home"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Home
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="about"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  About
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="trainers"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Our Trainers
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="whyus"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Why Us
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="plans"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Plans
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="plans"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  <a
  href="https://www.etsy.com/shop/7TrialsApparel?ref=dashboard-header"
  >


  Apparel
  </a>
</ScrollLink>
<ScrollLink
  activeClass="active"
  to="contact"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Contact
</ScrollLink>

</div>

        <div className={landingstyles.navbtns}>
    
                <Link href="./getstarted">
                Get Started
                </Link>
           
           

        </div>
        <div className={landingstyles.menu_icon}>
        <i className='bx bx-menu' onClick={()=>toggle()}></i>
        </div>

    </nav>
    
        </>
    )
}

