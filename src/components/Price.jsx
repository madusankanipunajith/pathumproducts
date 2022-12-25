import { price, cover } from "../assets";
import { specs, prices } from "../data";
import styles, { layout } from "../style";

const FeatureCard = ({title, content, index }) => {
    return (
        <div className={`flex flex-row md:p-6 py-6 px-1 rounded-[20px] w-[100%] ${index !== specs.length - 1} ? "mb-6" : "mb-0" feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={price} alt='icon' className="w-[50%] h-[50%] object-contain"></img>
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-5">{title}</h4>
                <section className="flex flex-col">
                {
                    content.map((item, index) => (
                        <p key={index} className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-2"><span className="sm:inline hidden">⚪️</span> {item}</p>
                    ))
                }
                </section>
            </div>
        </div>
    );
}

const Price = () => (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <section id="prices" className={`${layout.section} sm:flex-row flex-col-reverse`}>
                <div className={layout.sectionInfo}>

                    {
                        prices.map((item, index) => (
                            <FeatureCard key={item.id} {...item} index={index} />
                        ))
                    }

                </div>

                <div className={`flex flex-1 item-start justify-start flex-col sm:mb-0 mb-10 relative`}>
                    <h2 className={styles.heading2}>
                        We sell our services with<br className="sm:block hidden" /> lower prices.
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        You can purchase our quality services to lower prices comparing with other companies. We try to sell our products
                        and services as low as possible. <br/><br className="sm:inline hidden"/>
                        <b className="text-[20px]">🛑 Island-Wide Delivery : Free 🛑</b>
                    </p>
                    <img src={cover} alt= "cover" className="w-[100%] sm:h-[400px] sm:absolute relative sm:mt-0 mt-5 bottom-0"/>
                </div>
            </section>
        </div>
    </div>
);

export default Price;