import React from 'react'
import { features } from "../data";
import styles, { layout } from "../style";
import { service } from '../assets';

const FeatureCard = ({ title, content, index }) => {
    return (
        <div className={`flex flex-row md:p-6 py-6 px-1 rounded-[20px] w-[100%] ${index !== features.length - 1} ? "mb-6" : "mb-0" feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={service} alt='icon' className="w-[50%] h-[50%] object-contain"></img>
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
            </div>
        </div>
    );
}

function Service() {
    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <section id="services" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the order, <br className="sm:block hidden" />
                    we’ll make your bat.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Customer service shouldn’t just be a department, it should be the entire company
                    <br/> <b>by Tony Hsieh</b>
                </p>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>

        </section>
            </div>
        </div>
    )
}

export default Service