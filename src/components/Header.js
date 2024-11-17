"use client";
import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { themeData } from "@/utils/data";
import { LuCopy } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText(themeData).then(() => {
      toast({
        description: `✅ Copied! the tailwind.config.js code`,
        variant: "custom",
      });
    });
  };
  return (
    <div className=" w-full flex justify-center">
      <div className="flex flex-col w-full max-auto max-w-[600px] gap-6">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" className="w-5 h-auto" />
          <p className="font-semibold">Tailwind Animations</p>
        </div>
        <div>
          <p className="font-medium ">Installation</p>

          <ul className="list-disc pl-5 text-sm">
            <li className="py-2">
              <p className=" mb-2">
                Copy and paste the following code into your{" "}
                <code className="font-semibold px-2 py-1 bg-zinc-50 rounded ">
                  tailwind.config.js
                </code>{" "}
                file under <code>theme</code> section:
              </p>
              <div className="relative group w-full">
                <button
                  onClick={handleCopy}
                  className="absolute z-10 top-2 flex gap-1 items-center right-2 px-4 py-1 text-xs  "
                >
                  <LuCopy /> Copy code
                </button>
                <pre className="h-40 relative overflow-x-auto border text-xs w-full rounded-xl bg-zinc-50 p-3 ">
                  {themeData}
                </pre>
              </div>
            </li>
            <li>
              <p>
                Simply copy the classes for the animations below and paste them
                directly into your code!
              </p>
            </li>
          </ul>
        </div>
        <small className="px-2 border-l-2 border-s-zinc-100 p-1 ">
          <span className="font-medium">Note:</span> Hover/Click over the card
          to see the animations
        </small>
      </div>
    </div>
  );
};

export default Header;
