"use client";
import React, { useEffect, useState } from "react";
import TextAnimationCard from "./TextAnimationCard";
import { GrPowerReset } from "react-icons/gr";
import { countingAnimationCode } from "@/utils/data";

const CountAnimation = ({ start, end, duration, className }) => {
  const [count, setCount] = useState(start);
  const [key, setKey] = useState(0); // Key to trigger re-animation

  const reloadComponent = () => {
    setCount(start); // Reset count
    setKey((prevKey) => prevKey + 1); // Increment key to re-trigger animation
  };

  useEffect(() => {
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    let current = start;

    const timer = setInterval(() => {
      current += 1;
      if (current > end) {
        clearInterval(timer);
        current = end;
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [key, start, end, duration]); // Depend on `key` to re-trigger animation

  return (
    <TextAnimationCard name="Number Counting" code={countingAnimationCode}>
      <span
        className={`${className} transition-all font-mono font-medium px-4 bg-zinc-100 min-w-[70px] text-center rounded-lg border py-1 text-base`}
      >
        {count}
      </span>
      <div className="absolute top-0 p-4 right-0">
        <button onClick={reloadComponent} className="outline-none">
          <GrPowerReset />
        </button>
      </div>
    </TextAnimationCard>
  );
};

export default CountAnimation;
