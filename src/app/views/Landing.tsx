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
import PlanOptions from './PlanOptions'
import Image from "next/image";
import NavBar from '../components/Nav';
import Menubar from '../components/Menubar'

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
//     One week plan to help give structure and guidance.
//.
// 3-day, 4-day, or 5-day programs to best fit your needs
// For college discount proof of current enrollment is required

    const [planfilter, setPlanfilter] = useState<string>(planfilters[0])
    const planshashmap: PlansHashMapType={
        'One Time':[
          
            {
                name:'Normal',
                price:'$40',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/One-time Payment',
                benefits:[
                    'One week plan to help give structure and guidance.',
                    ' Created and published by both Garrett and Seth.',
                    '3-day, 4-day, or 5-day programs to best fit your needs',
                    'For college discount proof of current enrollment is required'
                    
                ],
                


            },
            {
                name:'College Student',
                price:'$25',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                rate:'/One-time Payment',
                benefits:[
                    'One week plan to help give structure and guidance.',
                    ' Created and published by both Garrett and Seth.',
                    '3-day, 4-day, or 5-day programs to best fit your needs',
                    'For college discount proof of current enrollment is required'
                    
                ],


            }
        ],
        
            'Monthly':[
            
                {
                    name:'Competition',
                    price:'$150',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                    rate:'/Per Month',
                    benefits:[
                        'For those whose goals are to compete.',
                        'Powerlifting, Bodybuilding, or Athletes',
                        
    
                    ]
    
    
                },
                {
                    name:'Normal',
                    price:'$100',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                    rate:'/Per Month',
                    benefits:[
                        'Completely customized program for each client',
                        'Weekly checking with your coach .',
                        'Also help with calculating your macronutrients',
                        'For college discount proof of current enrollment is required'
                        
                    ]
    
    
                },
                {
                    name:'College Student',
                    price:'$50',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                    rate:'/Per Month',
                    benefits:[
                        'Completely customized program for each client',
                        'Weekly checking with your coach .',
                        'Also help with calculating your macronutrients',
                        'For college discount proof of current enrollment is required'
                        
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
                        'Your gym must be accommodating to outside trainers',
                        'You must Live with in the DFW area ',
 
    
                    ]
    
    
                },
                {
                    name:'Normal',
                    price:'$25',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                    rate:'/Per Session',
                    benefits:[
                        'Your gym must be accommodating to outside trainers',
                        'You must Live with in the DFW area ',
 
    
                    ]
    
    
                },
                {
                    name:'College Student',
                    price:'$15',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                    rate:'/Per Session',
                    benefits:[
                        'Your gym must be accommodating to outside trainers',
                        'You must Live with in the DFW area ',
 
    
                    ]
    
    
                }
            ]
    
    }

    const trainers =[{
        name:'Garret Johnson',
        spec:'Sports-Specific Training',
        bio:'As a sports-specific training specialist, I design personalized training programs to help athletes improve their performance in their specific sport. With years of experience working with athletes from various sports, I can guide you every step of the way to reach your full potential. Contact me today to start your journey towards becoming a better athlete.',
        img:garret.src
        },{
            name:'Seth LeFlore',
            spec:'Coaching and BodyBuilding',
            bio:"As a coach in the realm of bodybuilding, I have honed my expertise in the art and science of sculpting the human physique. My passion lies in crafting bespoke training and nutrition programs for each of my clients, based on their unique goals, current fitness level, and individual circumstances.",
            img:seth.src
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
    <NavBar toggle={toggle} open={open} setOpen={setOpen}/>
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
                            <img src={gym.src} alt="gym" />

                        </div>


                </div>

            </div>
            <div id="about" className={landingstyles.about}>
                <div className={landingstyles.aboutheader}>
                    <label htmlFor="">
                        About Us
                    </label>
                </div>
                <p className={landingstyles.aboutbio}>
               <b> 7 trails</b> came from the verse Proverbs 24:16, <i> “for though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes.”</i> It’s to show that no matter what you have been through, you can always pick yourself back up and keep going. The Spartan shield is to represent how the Spartans used their shields. They weren’t for the soldier wearing it. The shield was for the man next to him. This symbolizes that you are never alone and always have someone looking out for you. 
                </p>
            </div>
            <div  className={landingstyles.mid}>
            <div className={landingstyles.midcontent}>
                <div className={landingstyles.midimg}>
                    <img src={midimg.src} alt="gym" />
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
                            <img src={trainer.img} alt="trainer" />
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
                                            <img src={why.img} alt="" />
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
                        <img src={girlimg.src} alt="" />
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
            <div id="contact" className={landingstyles.contact}>
                <div className={landingstyles.contactheader}>
                    <label htmlFor="">
                        Contact Us 
                    </label>
                </div>
                <div className={landingstyles.contactcontent}>
                <div className={landingstyles.contactitem}>
                        <a href="">
                            Mail
                            <span>
                        ↗
                        </span>
                        </a>
                    
                        
                    </div>
                    <div className={landingstyles.contactitem}>
                        <a href="">
                            Instagram
                            <span>
                        ↗
                        </span>
                        </a>
                       
                        
                    </div>
                    <div className={landingstyles.contactitem}>
                        <a href="">
                            Tiktok
                            <span>
                        ↗
                        </span>
                        </a>
                        
                        
                    </div>
                    <div className={landingstyles.contactitem}>
                        <a href="">
                            Facebook 
                            <span>
                        ↗
                        </span>
                        </a>
                       
                        
                    </div>
                  

                </div>
            </div>

<Menubar open={open} setOpen={setOpen}/>
        </div>
    )

}


 