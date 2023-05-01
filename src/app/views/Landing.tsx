import React,{useState,useEffect} from "react";
import landingstyles from '../styles/landing.module.scss'
import { useSpring, animated } from '@react-spring/web'
import wave from '../assets/wave.svg'
import logo from '../assets/logo.png'
import gym from '../assets/gym.jpeg'
import midimg from '../assets/midimg.jpeg'
import trainerimg from '../assets/headshot.jpeg'
import girlimg from '../assets/girl.jpeg'
import PlanOptions from './PlanOptions'
import Image from "next/image";
 

export default function LandingRoute(){
    const [open, setOpen] = useState(false)
    function toggle(){
        setOpen(!open)
    }
    type PlanType = {
        name: string;
        price: string;
        desc: string;
        rate: string;
        benefits:Array<string>;
      };
      
      type PlansHashMapType = {
        'One Time': PlanType[];
        'Monthly': PlanType[];
        'In Person': PlanType[];
      };
      
 
    const planfilters = [
        'One Time',
        'Monthly',
        'In Person',
    ]
    const [planfilter, setPlanfilter] = useState<string>(planfilters[0])
    const planshashmap: PlansHashMapType={
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

    const trainers =[{
        name:'Garret Johnson',
        spec:'Sports-Specific Training',
        bio:'As a sports-specific training specialist, I design personalized training programs to help athletes improve their performance in their specific sport. With years of experience working with athletes from various sports, I can guide you every step of the way to reach your full potential. Contact me today to start your journey towards becoming a better athlete.',
        img:trainerimg.src
        },{
            name:'Seth LeFlore',
            spec:'Coaching and BodyBuilding',
            bio:"As a coach in the realm of bodybuilding, I have honed my expertise in the art and science of sculpting the human physique. My passion lies in crafting bespoke training and nutrition programs for each of my clients, based on their unique goals, current fitness level, and individual circumstances.",
            img:trainerimg.src
    }]

    const fyplist = [
        {
          name: 'Strength Training',
          img: 'https://img.icons8.com/ios/100/null/dumbbell--v1.png',
        },
        {
          name: 'Weight Management',
          img: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/100/null/external-weight-scale-world-cancer-awareness-flatart-icons-outline-flatarticons.png',
        },
        {
          name: 'Cardio Fitness',
          img: 'https://img.icons8.com/ios-glyphs/30/null/pulse.png',
        },
        {
          name: 'Sports Performance',
          img: 'https://img.icons8.com/ios-filled/50/null/trophy.png',
        },
      
        {
          name: 'Nutrition Coaching',
          img: 'https://img.icons8.com/material-sharp/24/null/vegetarian-food.png',
        },
       
      ]
 
 
      
 
 
  
 
 
  
    return (
        
        <div className={landingstyles.landing}>
                  <nav className={landingstyles.nav}>
        <div className={landingstyles.logo}>
            <Image src={logo.src} alt="" />
        </div>
        <div className={landingstyles.navlinks}>
  <a href="#home" id="nav-home">Home</a>
  <a href="#about" id="nav-about">About</a>
  <a href="#trainers" id="nav-trainers">Our Trainers</a>
  <a href="#whyus" id="nav-whyus">Why Us</a>
  <a href="#plans" id="nav-plans">Plans</a>
  <a href="#contact" id="nav-contact">Contact</a>
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
            <div id="home" className={landingstyles.hero}>
      
                <div className={landingstyles.herocontent}>
                    <div className={landingstyles.herotext}>
                        <span>7 Trials Strength Training </span>
                        <div className={landingstyles.bigstuff}>
                            <label>Get Fit,</label>
                            <label>Get Healthy,</label>
                            <label>Get Strong!</label>
                        </div>
                        <p className={landingstyles.bio}>
                            Welcome to our fitness training program where we designed personalized training for you to help you achieve your fitness goals and tranform your body and mind.

                        </p>
                        <div className={landingstyles.herobtns}>
                            <a href="" className={landingstyles.herobtn}>Get Started</a>
                            <a href="" className={landingstyles.herobtn}>Learn More</a>
                        </div>
                        </div>
                        <div className={landingstyles.heroimg}>
                            <Image src={gym.src} alt="gym" />

                        </div>


                </div>

            </div>
            <div id="about">

            </div>
            <div  className={landingstyles.mid}>
            <div className={landingstyles.midcontent}>
                <div className={landingstyles.midimg}>
                    <Image src={midimg.src} alt="gym" />
                </div>
                <div className={landingstyles.midtext}>
                    <p className={landingstyles.midbio}>
                        We are a team of fitness professionals dedicated to helping you achieve your fitness goals and improve your overall health and well being.

                    </p>
                </div>
                </div>

            </div>
            <div id="trainers" className={landingstyles.trainers}>
                <div className={landingstyles.trainersheader}>
                    <label htmlFor="">
                        Our Trainers
                    </label>
                </div>
                <div className={landingstyles.trainerscontent}>
                    {
                        trainers.map((trainer,index)=>{
                            return (
                                <>

                                    <div className={index%2==0?landingstyles.trainer:landingstyles.trainer1}>
                        <div className={landingstyles.trainerimg}>
                            <Image src={trainer.img} alt="trainer" />
                        </div>
                        <div className={landingstyles.trainerinfo}>
                            <label htmlFor="">
                                {trainer.name}
                            </label>
                            <div className={landingstyles.trainerspec}>
                            Specialty: {trainer.spec}
                            </div>
                            <p className={landingstyles.trainerbio}>
                                {trainer.bio}





                            </p>
                        </div>
                    </div> 
                                </>

                            )
                        }
                             
                        )}

                
                </div>

            </div>
            <div id="whyus" className={landingstyles.whyus}>
                <div className={landingstyles.whyusleft}>
                    <small>
                        Why Us?
                    </small>
                    <div className={landingstyles.fyps}>
                    <label htmlFor="">
                        For You
                    </label>
                    <label htmlFor="">
                        Plans (FYP)
                    </label>
                    </div>
                    <p className={landingstyles.fypsbio}>
                        We offer a variety of plans to suit your needs and help you achieve your fitness goals. Our plans are designed to help you get fit, get healthy, and get strong.

                    </p>
                    <div className={landingstyles.whyuslist}>
                        {
                            fyplist.map((why,index)=>{
                                return (
                                    <>
                                    <div className={landingstyles.whyusitem}>
                                        <div className={landingstyles.whyusicon}>
                                            <Image src={why.img} alt="" />
                                        </div>
                               
                                            <label htmlFor="">
                                                {why.name}
                                            </label>
                                        
                                    </div>
                                    </>
                                )
                            })}
                            </div>
                   
                </div>
                <div className={landingstyles.whyusright}>
                    <div className={landingstyles.whyusimg}>
                        <Image src={girlimg.src} alt="" />
                    </div>
                </div>

            </div>
            <div id="plans"className={landingstyles.plans}>
                <div className={landingstyles.plansheader}>
                    <label htmlFor="">
                        Plans
                    </label>


                </div>
                <div className={landingstyles.planfiltersbx}>
                    <div className={landingstyles.planfilters}>
                            {
                                planfilters.map((plan,index)=>{
                                    return (
                                        <>
                                        <div onClick={()=>setPlanfilter(plan)} className={plan==planfilter?landingstyles.planfilter:landingstyles.planfiltera}>
                                            <label htmlFor="">
                                                {plan}
                                            </label>
                                        </div>
                                        </>
                                    )
                                })
                            }
                       
                        
                    </div>


                </div>
                <div className={landingstyles.planoptionsbox}>
                       <PlanOptions planfilter={planfilter} planshashmap={planshashmap}/>


                </div>
            </div>
            <div id="contact">

            </div>


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
        </div>
    )

}


 