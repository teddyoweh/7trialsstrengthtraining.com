import React,{useState} from 'react'
import landingstyles from '../styles/landing.module.scss'


export default function PlanOptions({planfilter,planshashmap}){
    return (
        <div className={landingstyles.planoptions}>
        {
            planshashmap[planfilter].map((plandets)=>{
                return (
                    <>
                    <div className={landingstyles.planoption}>
            <div className={landingstyles.planoptionheader}>
                <label htmlFor="">
                    {plandets.name}
                </label>
                {/* <small>
                    3 Months
                </small> */}

            </div>
            <div className={landingstyles.pricing}>
                <label htmlFor="">{plandets.price}</label>
                <span>{plandets.rate}</span>

            </div>
            <div className={landingstyles.planoptioncontent}>
                {
                    plandets.benefits.map((benefits,key)=>{
                        return (
                            <>
                            <div className={landingstyles.planoptionitem}>
                    <span>
                    <i className='bx bxs-check-circle'></i>
                    </span>
                    <label htmlFor="">
                {benefits}
                    </label>

                </div>
                            </>
                        )
                    })
                }
                
            </div>

            <div className={landingstyles.planoptionbtn}>
                <a href="" className={landingstyles.planoptionbtna}>Get Started</a>
            </div>




        </div>
                    </>
                )
            })
        }
        
      

    </div>
    )
}