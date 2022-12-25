import React from 'react'
import { close, logo, menu } from '../assets'
import styles from './../style';
import { navLinks } from './../data/index';

function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <img src={logo} alt="hoobook" className="w-[124px] h-[62px]"></img>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[20px] text-white hover:text-violet-700 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt="menu" className="w-[38px] h-[38px] object-contain"
              onClick={() => setToggle((prev) => !prev)}></img>

            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[20px] text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                    <a href={`#${nav.id}`} onClick={() => setToggle(!toggle)}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar