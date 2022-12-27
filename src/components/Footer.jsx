import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../data";

const Footer = () => (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
                <div className={`${styles.flexStart} md:flex-row sm:flex-col flex-col-reverse mb-8 w-full items-center`}>
                    <div className="flex-[1] flex flex-col justify-start md:mr-10 mr-0 items-center md:items-start sm:mt-0 mt-10">
                        <img
                            src={logo}
                            alt="pathum_products"
                            className="w-[260px] h-[108.14px] object-fill"
                        />
                        <p className={`${styles.paragraph} mt-4 max-w-[312px] md:text-start text-center`}>
                            PATHUM PRODUCTS <br />
                            680/1/A, Gongitota, wattala, SriLanka
                        </p>
                    </div>

                    {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
                    <div className={`flex-[1.5] w-full ${styles.border}`}>
                        <iframe title="pathumproducts" width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                            id="gmap_canvas" src="https://maps.google.com/maps?width=700&amp;height=300&amp;hl=en&amp;q=7.005136+79.910324&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>

                <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                        Copyright Ⓒ 2022 Pathum Products. All Rights Reserved.
                    </p>

                    <div className="flex flex-row md:mt-0 mt-6">
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default Footer;