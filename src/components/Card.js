"use client";
import React from "react";
import { LuCopy } from "react-icons/lu";
// import { animationVariants } from "@/utils/data";
import { useToast } from "@/hooks/use-toast";

const Card = ({ id, animation, name }) => {
  const animationVariants = {
    "animate-fadeIn": "hover:animate-fadeIn",
    "animate-fadeOut": "hover:animate-fadeOut",
    "animate-fadeUp": "hover:animate-fadeUp",
    "animate-fadeDown": "hover:animate-fadeDown",
    "animate-fadeLeft": "hover:animate-fadeLeft",
    "animate-fadeRight": "hover:animate-fadeRight",
    "animate-slideUp": "hover:animate-slideUp",
    "animate-slideDown": "hover:animate-slideDown",
    "animate-slideLeft": "hover:animate-slideLeft",
    "animate-slideRight": "hover:animate-slideRight",
    "animate-slideIn": "hover:animate-slideIn",
    "animate-slideOut": "hover:animate-slideOut",
    "animate-rotate": "hover:animate-rotate",
    "animate-scaleUp": "hover:animate-scaleUp",
    "animate-scaleDown": "hover:animate-scaleDown",
    "animate-scaleLeft": "hover:animate-scaleLeft",
    "animate-scaleRight": "hover:animate-scaleRight",
    "animate-scaleIn": "hover:animate-scaleIn",
    "animate-scaleOut": "hover:animate-scaleOut",
    "animate-scaleUpDown": "hover:animate-scaleUpDown",
    "animate-scaleBounce": "hover:animate-scaleBounce",
    "animate-bounce": "hover:animate-bounce",
    "animate-bounceIn": "hover:animate-bounceIn",
    "animate-bounceOut": "hover:animate-bounceOut",
    "animate-bounceRight": "hover:animate-bounceRight",
    "animate-bounceLeft": "hover:animate-bounceLeft",
    "animate-bounceUp": "hover:animate-bounceUp",
    "animate-bounceDown": "hover:animate-bounceDown",
    "animate-zoomIn": "hover:animate-zoomIn 0.5s ease-out",
    "animate-zoomOut": "hover:animate-zoomOut 0.5s ease-out",
    "animate-pulse": "hover:animate-pulse 1.5s infinite",
    "animate-rotate": "hover:animate-rotate 1s linear infinite",
    "animate-shake": "hover:animate-shake 0.5s ease-in-out",
    "animate-ping": "hover:animate-ping ",
    "animate-heartbeat": "hover:animate-heartbeat",
    "animate-flipX": "hover:animate-flipX",
    "animate-flipY": "hover:animate-flipY",
    "animate-rollIn": "hover:animate-rollIn",
    "animate-rollOut": "hover:animate-rollOut",
    "animate-wobble": "hover:animate-wobble",
    "animate-jello": "hover:animate-jello",
    "animate-lightSpeedIn": "hover:animate-lightSpeedIn",
    "animate-lightSpeedOut": "hover:animate-lightSpeedOut",
    "animate-spinClockwise": "hover:animate-spinClockwise",
    "animate-spinCounterClockwise": "hover:animate-spinCounterClockwise",
    "animate-spinFast": "hover:animate-spinFast",
    "animate-spinSlow": "hover:animate-spinSlow",
    "animate-spinBounce": "hover:animate-spinBounce",
    "animate-spinZigzag": "hover:animate-spinZigzag",
    "animate-ripple": "hover:animate-ripple",
    "animate-stretchX": "hover:animate-stretchX",
    "animate-stretchY": "hover:animate-stretchY",
    "animate-pendulum": "hover:animate-pendulum",
    "animate-swingRotate": "hover:animate-swingRotate",
    "animate-blurIn": "hover:animate-blurIn",
    "animate-blurOut": "hover:animate-blurOut",
    "animate-glowPulse": "hover:animate-glowPulse",
    "animate-glow": "hover:animate-glow",
    "animate-diagonalSwing": "hover:animate-diagonalSwing",
    "animate-swingBounce": "hover:animate-swingBounce",
  };
  const { toast } = useToast();
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        description: `✅ Copied! class for ${name} animation`,
        variant: "custom",
      });
    });
  };

  return (
    <div className="flex flex-col w-fit items-center space-y-2">
      <div
        key={id}
        className={` w-[100px] h-[100px] rounded-2xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-gray-900 ${animationVariants[animation]} transform transition duration-500`}
      ></div>
      <div className="text-[0.8rem] font-medium flex px-1 justify-between w-full items-center">
        <p className="text-wrap z-20 w-[80px] leading-[0.8rem]">{name}</p>
        <button onClick={() => handleCopy(animation)}>
          <LuCopy className="hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Card;
