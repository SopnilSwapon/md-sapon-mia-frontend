"use client";
import { useEffect, useState } from "react";
import AppButton from "./shared/AppButton";
import GradientBorderButton from "./shared/GradientBorderButton";

export default function BannerSec() {
  return (
    <section className="relative text-center py-24 px-6 bg-black text-white overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <GradientBorderButton>
          🔵&nbsp; <Countdown />
        </GradientBorderButton>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 mt-6">
          Master Focus & Get <br /> More Done in Less Time
        </h1>

        <p className="text-gray-400 mb-8">
          A step-by-step system to eliminate procrastination, train your <br />{" "}
          brain for deep work, and boost productivity effortlessly.
        </p>

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
