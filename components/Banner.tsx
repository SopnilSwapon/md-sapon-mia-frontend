"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AppButton from "./AppButton";
import GradientBorderButton from "./GradientBorderButton";

export default function BannerSec() {
  return (
    <section className="relative text-center py-24 px-6 bg-black text-white overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.3),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}

        <GradientBorderButton>
          🔵&nbsp; <Countdown />
        </GradientBorderButton>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 mt-6">
          Master Focus & Get <br /> More Done in Less Time
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-8">
          A step-by-step system to eliminate procrastination, train your <br />{" "}
          brain for deep work, and boost productivity effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <AppButton title="Enroll now" />
          <AppButton
            title="Curriculum"
            className="bg-[#181C21] hover:bg-gray-600 text-amber-50"
          />
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  // set your target time here
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);
  targetDate.setHours(targetDate.getHours() + 2);
  targetDate.setMinutes(targetDate.getMinutes() + 41);
  targetDate.setSeconds(targetDate.getSeconds() + 17);

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft(
        `30% off until ${days}d : ${hours}h : ${minutes}m : ${seconds}s`,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{timeLeft}</span>;
}
