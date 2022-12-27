import { stats } from "../data";
import styles from "../style";

const Stats = () => (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexstart}`}>
        <div className={`${styles.boxWidth}`}>
            <section className={`${styles.flexCenter} pt-10 flex-row flex-wrap sm:mb-10 mb-6`}>
                {stats.map((stat) => (
                    <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`} >
                        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                            {stat.value}
                        </h4>
                        <p className="font-poppins font-normal xs:text-[20.45px] text-[20.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    </div>
);

export default Stats;