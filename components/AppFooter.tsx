"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AppFooter() {
  return (
    <footer className="bg-[#0F131B] rounded-md text-white px-6 pt-24 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-200 leading-tight">
              The Deep <br /> Work Blueprint
            </h2>

            <p className="text-gray-400 text-lg">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="relative bg-linear-to-br from-blue-600 to-blue-500 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-[180px]">
            {/* avatars */}
            <div className="flex -space-x-3">
              <Image
                src="/images/p1.png"
                width={40}
                height={40}
                className="rounded-full border border-black"
                alt=""
              />
              <Image
                src="/images/p2.png"
                width={40}
                height={40}
                className="rounded-full border border-black"
                alt=""
              />
              <Image
                src="/images/p3.png"
                width={40}
                height={40}
                className="rounded-full border border-black"
                alt=""
              />
            </div>

            {/* arrow button */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600">
              <ArrowRight />
            </div>

            {/* text */}
            <p className="text-white text-lg font-medium">
              Join with 5K other students
            </p>
          </div>
        </div>

        {/* 🔥 Divider */}
        <div className="mt-16 border-t border-blue-500/20" />

        {/* 🔥 BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© Copyright 2024, All Rights Reserved</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="hover:text-white cursor-pointer">
              Terms & conditions
            </p>
            <p className="hover:text-white cursor-pointer">Refund policy</p>
            <p className="hover:text-white cursor-pointer">Pricing</p>
            <p className="hover:text-white cursor-pointer">Support</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
