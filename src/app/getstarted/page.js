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
import {endpoints} from '../config/endpoints'
import axios from "axios";
const planshashmap={
    'One Time':[
      
        {
            name:'Normal',
            price:'$40',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
            rate:'/One-time Payment',
            benefits:[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                
            ],
            


        },
        {
            name:'College Student',
            price:'$25',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
            rate:'/One-time Payment',
            benefits:[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                
            ]


        }
    ],
    
        'Monthly':[
        
            {
                name:'Competition',
                price:'$150',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/Per Month',
                benefits:[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

                ]


            },
            {
                name:'Normal',
                price:'$100',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/Per Month',
                benefits:[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    
                ]


            },
            {
                name:'College Student',
                price:'$50',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/Per Month',
                benefits:[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    
                ]


            }
        ],
        'In Person':[
        
            {
                name:'Competition',
                price:'$20',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/Per Session',
                benefits:[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

                ]


            },
            {
                name:'Normal',
                price:'$25',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/Per Session',
                benefits:[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    
                ]


            },
            {
                name:'College Student',
                price:'$15',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/Per Session',
                benefits:[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    
                ]


            }
        ]

}
function PlanOptions({planfilter,setPlanfiltertype,planfiltertype}){
    console.log(planshashmap[planfilter][0].name)
    return (
        <div className={getstartedstyles.planfilters}>
        {
             Object.keys(planshashmap[planfilter]).map((plan,index)=>{
                return (
                    <>
                    <div onClick={()=>setPlanfiltertype(planshashmap[planfilter][plan].name)} className={planshashmap[planfilter][plan].name==planfiltertype?getstartedstyles.planfilter:getstartedstyles.planfiltera}>
                        <label htmlFor="">
                            {planshashmap[planfilter][plan].name+' - '+planshashmap[planfilter][plan].price}
                        </label>
                    </div>
                    </>
                )
            })
        }
   
    
</div>
    )
}
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
    const planfilters = [
        'One Time',
        'Monthly',
        'In Person',
    ]

    const [planfilter, setPlanfilter] = useState(planfilters[0])
    const [planfiltertyper,setPlanfiltertype] = useState(planshashmap[planfilter][0].name)
 
    async function makePayment(){
        const body = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            planrate:planfilter,
            plan:planfiltertyper 

        }
        console.log(body)
        
       await axios.post(endpoints['makepayment'],body).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

        
    }

    return(

        <div className={getstartedstyles.getstarted}>
            <NavBar/>

            <div className={getstartedstyles.getstarted_content}>
                <div className={getstartedstyles.getstarted_header}>
                    <label for="">Get Started.</label>
                </div>
                <div className={getstartedstyles.form}>
                    <form action="" className="form">

                        <div className={getstartedstyles.form_group}>

                        <label htmlFor="">Personal Information</label>
                        <div className={getstartedstyles.form_group_content}>
                            <div className={getstartedstyles.form_item}>
                                <div className={getstartedstyles.form_row}>
                                <input type="text" placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                                <input type="text" placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                                </div>
                            </div>
                            <div className={getstartedstyles.form_item}>
                                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                       
                            

                        </div>
                        </div>

                        <div className={getstartedstyles.form_group}>
                            <div className={getstartedstyles.planhead}>
                                <label for="">
                                    Plans
                                </label>

                            </div>
                        <div className={getstartedstyles.planfiltersbx}>
                    <div className={getstartedstyles.planfilters}>
                            {
                                planfilters.map((plan,index)=>{
                                    return (
                                        <>
                                        <div onClick={()=>setPlanfilter(plan)} className={plan==planfilter?getstartedstyles.planfilter:getstartedstyles.planfiltera}>
                                            <label htmlFor="">
                                                {plan}
                                            </label>
                                        </div>
                                        </>
                                    )
                                })
                            }
                       
                        
                    </div>
                    <div>
                        <label htmlFor="">
                            Options 
                        </label>
                        <PlanOptions planfilter={planfilter} planfiltertype={planfiltertyper} setPlanfiltertype={setPlanfiltertype}/>
                    </div>
                    


                </div>
                        </div>
     
                        <div className={getstartedstyles.form_group}>
                            <button type="button" onClick={()=>makePayment()}>Make Payment</button>
                        </div>
                        
                    </form>
                    <div className={getstartedstyles.form_img}>
                        <Image src={waterimg.src} alt="logo" className="getstartimg" width={600} height={600}/>

                    </div>
                </div>

            </div>
        </div>
    )
}