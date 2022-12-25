import { customer } from "../assets";
import { specs } from "../data";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => {
    return (
        <div className={`flex flex-row md:p-6 py-6 px-1 rounded-[20px] w-[100%] ${index !== specs.length - 1} ? "mb-6" : "mb-0" feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt='icon' className="w-[50%] h-[50%] object-contain"></img>
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
            </div>
        </div>
    );
}

const Spec = () => (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <section id="specification" className={layout.section}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        We make bats <br className="sm:block hidden" /> under following standards
                    </h2>
                    <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
                        We usually make bats with <b>Grips,super cover, sticker and binding</b> under following standards. You can customize those specifications as you want while you are ordering ✌️
                    </p>

                    {
                        specs.map((item, index) => (
                            <FeatureCard key={item.id} {...item} index={index} />
                        ))
                    }

                </div>

                <div className={layout.sectionImg}>
                    <img src={customer} alt="bats" className="w-[100%] h-[600px]" />
                </div>
            </section>
        </div>
    </div>
);

export default Spec;