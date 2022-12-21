import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
   return (
      <>
         <footer className="bg-theme pt-7 pb-5">
            <div className="nike-container text-slate-200">
               <div className="m-auto grid w-full max-w-2xl grid-cols-3 items-start md:max-w-none md:gap-5">
                  {titles.map((val, i) => (
                     <div key={i} className="grid items-center">
                        <h1 className="text-lg font-semibold uppercase lg:text-base md:text-sm">
                           {val.title}
                        </h1>
                     </div>
                  ))}
                  {/* map ซ้อน map เพราะข้อมูลอยู่ใน array2ชั้น */}
                  {links.map((list, i) => (
                     <ul key={i} className="grid items-center gap-1">
                        {list.map((link, i) => (
                           <li key={i} className="text-sm sm:text-xs">
                              {link.link}
                           </li>
                        ))}
                     </ul>
                  ))}
               </div>
               <div className="mt-5 text-center">
                  <p className="text-sm md:text-center">
                     Copyright
                     <sup className="text-base font-bold">&copy;</sup>
                     All Reserved Rights 2022{" "}
                     <span className="font-semibold">NATDANAI DEV</span>
                  </p>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
