import React from 'react'
import styles from '../style'
import { discount, bat } from '../assets'

function Hero() {
    return (
        <div className={`${styles.boxWidth} ${styles.flexStart}`}>
            <section id='home' className={`flex md:flex-row flex-col`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>

                    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                        <img src={discount} alt='discount' className="w-[32px] h-[32px]"></img>
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className='text-white'>10%</span> Discount For {" "}
                            <span className='text-white'>Every</span> Bat
                        </p>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden' /> {" "}
                            <span className='text-gradient'>Generation</span> <br /> {" "}
                        </h1>
                    </div>

                    <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full flex-row'><span>Cricket Bats</span> <span className='sm:inline hidden'>Making</span></h1>

                    <p className={`${styles.paragraph} max-w-[100%] mt-5`}>
                        Our team makes <b>softball-cricket bats </b>and <b>tapeball-cricket bats</b> under customer giver specifications. Currently we make only <b>softball and tapeball</b> cricket bats but we repair <b>every type of bats</b>. 
                        Furthrmore, we sell <b>bat-grips, super-covers, bat-stickers and etc</b> seperately.
                        Our plan is to extend this company for making leather bats though we <b>usually repair leather bats</b>.
                    </p>

                </div>

                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                    <img src={bat} alt='bat' className={`md:w-[90%] md:h-[70%] w-[90%] h-[90%] relative z-[5] ${styles.border}`}></img>
                </div>
            </section>
        </div>
    )
}

export default Hero