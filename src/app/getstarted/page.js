"use client"
import React,{useState,useEffect} from "react";
import getstartedstyles from '../styles/getstarted.module.scss'
import { useSpring, animated } from '@react-spring/web'
import wave from '../assets/wave.svg'
import logo from '../assets/logo.png'
import gym from '../assets/gym.jpeg'
import midimg from '../assets/midimg.jpeg'
import trainerimg from '../assets/headshot.jpeg'
import girlimg from '../assets/girl.jpeg'
import seth from '../assets/seth.jpeg'
import garret from '../assets/garret.jpeg'
import waterimg from '../assets/water.jpeg'
import NavBar from '../components/Nav';
import Menubar from '../components/Menubar'
import Image from "next/image";
 
export default function GetStartedPage(){
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [phoneno,setPhoneNo] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [country,setCountry] = useState('')
    const [cardname,setCardName] = useState('')
    const [cardnumber,setCardNumber] = useState('')
    const [expiry,setExpiry] = useState('')
    const [cvv,setCvv] = useState('')
    return(

        <div className={getstartedstyles.getstarted}>
            <NavBar/>

            <div className={getstartedstyles.getstarted_content}>
                <div className={getstartedstyles.getstarted_header}>
                    <label for="">Get Started.</label>
                </div>
                <div className={getstartedstyles.form}>
                    <form action="">

                        <div className={getstartedstyles.form_group}>

                        <label htmlFor="">Personal Information</label>
                        <div className={getstartedstyles.form_group_content}>
                            <div className={getstartedstyles.form_item}>
                                <div className={getstartedstyles.form_row}>
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="text" placeholder="Phone Number"/>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="text" placeholder="Address, Apt No."/>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="text" placeholder="City"/>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="text" placeholder="State"/>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="text" placeholder="Country"/>
                            </div>
                            

                        </div>
                        </div>
                        <div className={getstartedstyles.form_group}>

<label htmlFor="">Personal Information</label>
<div className={getstartedstyles.form_group_content}>
<div className={getstartedstyles.form_item}>
        <input type="text" placeholder="Name on Card"/>
    </div>
<div className={getstartedstyles.form_item}>
        <input type="text" placeholder="Card Number"/>
    </div>

 
    <div className={getstartedstyles.form_item}>
        <div className={getstartedstyles.form_row}>
        <input type="text" placeholder="Expiry Number MM/YYYY"/>
        <input type="text" placeholder="CVV"/>
        </div>
    </div>
  

</div>
</div>
                        
                    </form>
                    <div className={getstartedstyles.form_img}>
                        <Image src={waterimg.src} alt="logo" width={600} height={600}/>

                    </div>
                </div>

            </div>
        </div>
    )
}