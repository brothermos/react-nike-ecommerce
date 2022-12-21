import React from "react";

const Title = ({ title }) => {
   return (
      <>
         <div className="grid items-center">
            <h1 className="text-5xl font-bold text-slate-900 drop-shadow-lg filter md:text-3xl lg:text-4xl">
               {title}
            </h1>
         </div>
      </>
   );
};

export default Title;
