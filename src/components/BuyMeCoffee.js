import Image from "next/image";
import React from "react";
import buymeacoffee from "../../public/BuyMeACoffee.svg";

const BuyMeCoffee = () => {
  return (
    <div className="flex justify-center z-30 mt-8 fixed bottom-2 right-2">
      <a href="https://www.buymeacoffee.com/praveenshinde" target="_blank">
        <Image
          src={buymeacoffee}
          alt="Buy Me A Coffee"
          className="w-24 sm:w-36"
        />
      </a>
    </div>
  );
};

export default BuyMeCoffee;
