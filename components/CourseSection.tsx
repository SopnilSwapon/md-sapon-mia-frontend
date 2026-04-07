"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import AppButton from "./AppButton";
import Image from "next/image";
import GradientBorderButton from "./GradientBorderButton";

export default function CourseSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div>
        <div className="flex justify-center mb-8">
          <GradientBorderButton>
            🔵 &nbsp; Course Curriculum
          </GradientBorderButton>
        </div>
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16 text-gray-200">
          Mastering Deep Work: A Structured <br />
          Path to Peak Productivity
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <Accordion defaultValue={["item-1"]} className="space-y-4">
            {/* Module 1 */}
            <AccordionItem
              value="item-1"
              className="border-b border-blue-500/20"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between w-full items-center">
                  <div className="text-left">
                    <p className="text-gray-300 font-medium">
                      Module 1: Foundations of Deep Work
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1.7h of video</p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4">
                <div className="space-y-4 mt-4">
                  {/* Active */}
                  <div className="flex items-center justify-between border-b border-blue-500/30 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Play size={14} className="text-black ml-0.5" />
                      </div>
                      <p className="text-sm text-gray-200">
                        Understanding Focus & Distraction
                      </p>
                      <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded-full text-blue-400">
                        Preview
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">14:23</span>
                  </div>

                  {[
                    ["The Science Behind Deep Work", "22:51"],
                    ["Identifying Your Productivity Killers", "34:42"],
                    ["How to Strengthen Your Attention Span", "27:08"],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-white/5 pb-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                          <FaPlay size={14} className="text-black" />
                        </div>
                        <p className="text-sm text-gray-400">{item[0]}</p>
                      </div>
                      <span className="text-xs text-gray-500">{item[1]}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Other modules */}
            {[
              "Module 2: Building Your Deep Work Routine",
              "Module 3: Eliminating Procrastination",
              "Module 4: Advanced Focus & Productivity Hacks",
            ].map((title, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 2}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="text-left">
                    <p className="text-gray-300">{title}</p>
                    <p className="text-xs text-gray-500 mt-1">1.3h of video</p>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <p className="text-sm text-gray-500 pb-4">
                    Content coming soon...
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* RIGHT CARD (unchanged) */}
          <div className="bg-[#0f141a] rounded-2xl p-6 border border-blue-500/20 shadow-[0_0_40px_rgba(36,102,242,0.1)]">
            <h3 className="text-xl font-semibold mb-6">
              Not only video lessons!
            </h3>

            <div className="space-y-5 text-sm text-gray-400">
              {[
                "6h of videos – Step-by-step deep work strategies.",
                "Templates & Trackers – Stay on track effortlessly.",
                "Live Q&As – Expert guidance & accountability.",
                "Exclusive Community – Connect with others.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Image
                      src={"/images/course-desing3.png"}
                      alt="tick icon"
                      width={36}
                      height={36}
                    />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <AppButton title="Enroll now" className="w-full mt-17" />
          </div>
        </div>
      </div>
    </section>
  );
}
