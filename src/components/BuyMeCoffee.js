import Image from "next/image";
import React from "react";
import buymeacoffee from "../../public/BuyMeACoffee.svg";

const BuyMeCoffee = () => {
  return (
    <div className="flex justify-center z-30 ">
      <a href="https://www.buymeacoffee.com/praveenshinde" target="_blank">
        <Image
          src={buymeacoffee}
          alt="Buy Me A Coffee"
          className="w-20 sm:w-20 md:w-24 lg:w-32"
        />
      </a>
    </div>
  );
};

export default BuyMeCoffee;
