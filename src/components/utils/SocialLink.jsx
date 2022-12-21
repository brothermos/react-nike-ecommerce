import React from "react";

const SocialLink = ({ icon }) => {
   return (
      <>
         <img
            src={icon}
            alt="icon/social"
            className="flex h-8 w-8 cursor-pointer items-center transition-all duration-200 hover:scale-110 sm:h-5 sm:w-5 md:h-6 md:w-6"
         />
      </>
   );
};

export default SocialLink;
