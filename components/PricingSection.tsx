"use client";

import { Button } from "@/components/ui/button";
import GradientBorderButton from "./GradientBorderButton";
import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#0f141a] rounded-2xl p-10 border border-white/5 relative overflow-hidden">
          {/* glow */}
          <div className="absolute top-0 left-0 w-40 h-40" />

          <GradientBorderButton>🔵 &nbsp; Introducing</GradientBorderButton>

          <h2 className="text-4xl font-semibold mt-8 mb-4">
            The Deep Work <br /> Blueprint
          </h2>

          <p className="text-gray-400 mb-10">
            What extra you will get if you enroll now
          </p>

          {/* list */}
          <div className="space-y-6">
            {[
              "Bonus: 1:1 coaching session to boost focus.",
              "Discount: Save 30% when you enroll now!",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full lg:border border-[#243457] flex items-center justify-center">
                  <Image
                    src={"/images/course-desing3.png"}
                    alt="tick icon"
                    width={26}
                    height={26}
                  />
                </div>

                <p className="text-gray-300 sm:mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f141a] rounded-2xl p-6 md:p-10 border border-blue-500/20 shadow-[0_0_40px_rgba(36,102,242,0.1)] relative">
          {/* top row */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <h3 className="text-5xl font-semibold">$349</h3>
              <span className="line-through text-gray-500 text-xl">$500</span>
            </div>

            <span className="bg-blue-600 px-3 py-1 rounded-md text-sm">
              30% off
            </span>
          </div>

          <p className="text-gray-400 mb-8">
            30% off until 4d : 2h : 41m : 17s
          </p>

          <div className="space-y-6 mb-10">
            {[
              "6h of videos – Step-by-step deep work strategies.",
              "Templates & Trackers – Stay on track effortlessly.",
              "Live Q&As – Expert guidance & accountability.",
              "Exclusive Community – Connect with others.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full lg:border border-[#243457] flex items-center justify-center">
                  <Image
                    src={"/images/course-desing3.png"}
                    alt="tick icon"
                    width={26}
                    height={26}
                  />
                </div>

                <p className="text-gray-300 sm:mt-2">{text}</p>
              </div>
            ))}
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
            Enroll now
          </Button>
        </div>
      </div>
    </section>
  );
}
