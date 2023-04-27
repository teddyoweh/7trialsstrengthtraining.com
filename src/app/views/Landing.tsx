import React from "react";
import landingstyles from '../styles/landing.module.scss'
import { useSpring, animated } from '@react-spring/web'
import wave from '../assets/wave.svg'
export default function LandingRoute(){
  
    return (
        <div className={landingstyles.landing}>
            <div className={landingstyles.hero}>
                <nav className={landingstyles.nav}>
                    <div className={landingstyles.logo}>
    LOGO HERE
                    </div>
                    <div className={landingstyles.nav_links}>
                        <a href="#" className={landingstyles.nav_link}>
                            Home
                        </a>
                        <a href="#" className={landingstyles.nav_link}>
                            About
                        </a>
                        <a href="#" className={landingstyles.nav_link}>
                            Products
                        </a>
                        <a href="#" className={landingstyles.nav_link}>
                            Trainers
                        </a>
                        <a href="#" className={landingstyles.nav_link}>
                            Plans
                        </a>
                        <a href="#" className={landingstyles.nav_link}>
                            Contact
                        </a>

                    </div>
                    <div className={landingstyles.nav_btns}>
                        <a href="#" className={landingstyles.nav_btn}>
                            Get Started
                        </a>
                    </div>
                </nav>
                <div className={landingstyles.hero_content}>
                    <div className={landingstyles.hero_content_text}>

                    <h1 className={landingstyles.hero_title}>
             
                    7 Trials  
                    </h1>
                    <h1 className={landingstyles.hero_title1}>
             
             Strength Training
                    </h1>
                    </div>
                    <div className={landingstyles.hero_content_btns}>
                        <a href="#" className={landingstyles.hero_content_btn}>
                        Customized Personal Training - <b> Get Started</b>
                        </a>
                    </div>
                </div>
                <img src={wave.src} className={landingstyles.hero_wave} alt='wave'/>
                
            </div>
            <div className={landingstyles.about}>
                <h1>
                    Our Trainers
                </h1>
            </div>
        </div>
    )

}