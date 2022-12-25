import React from 'react'
import { email, smartphone, whatsapp } from '../assets';
import styles, { layout } from "../style";

function Contact() {
  return (
    <div  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <section id='contact' className={`${layout.section} flex-wrap justify-evenly`}>
                <div className='flex flex-col flex-1 gap-5 items-center justify-center sm:mb-0 mb-8'>
                    <img src={smartphone} alt='' className='h-[60px] w-[60px]'/>
                    <p className={`${styles.paragraph}`}>+94711991264</p>
                </div>
                <div className='flex flex-col flex-1 gap-5 items-center justify-center sm:mb-0 mb-8'>
                    <img src={email} alt='' className='h-[60px] w-[60px]'/>
                    <p className={`${styles.paragraph}`}>pathumproductscricket@gmail.com</p>
                </div>
                <div className='flex flex-col flex-1 gap-5 items-center justify-center sm:mb-0 mb-8'>
                    <img src={whatsapp} alt='' className='h-[60px] w-[60px]'/>
                    <p className={`${styles.paragraph}`}>+94711991264</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Contact