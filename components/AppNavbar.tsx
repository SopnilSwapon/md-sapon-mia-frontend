"use client";

import Image from "next/image";
import { useState } from "react";
import AppButton from "./AppButton";
import { Menu, X } from "lucide-react";

export default function AppNavbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  return (
    <div className="w-full border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <Image
            src={"/images/app_logo.png"}
            height={31}
            width={82}
            alt="App logo"
          />
        </div>

        <div className="hidden lg:flex gap-8 text-sm text-gray-300">
          <p className="hover:text-white cursor-pointer">Overview</p>
          <p className="hover:text-white cursor-pointer">Curriculum</p>
          <p className="hover:text-white cursor-pointer">Testimonials</p>
          <p className="hover:text-white cursor-pointer">Pricing</p>
        </div>
        {/* Theme toggle buttons */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="cursor-pointer"
          >
            {isDarkTheme ? (
              <Image
                src={"/images/dark.png"}
                height={44}
                width={80}
                alt="isDarkTheme mode"
              />
            ) : (
              <Image
                src={"/images/light.png"}
                height={44}
                width={80}
                alt="light mode"
              />
            )}
          </div>

          <div className="hidden lg:block">
            <AppButton title="Enroll now" />
          </div>

          {/* Mobile menu Icon */}
          <div
            className="lg:hidden cursor-pointer text-white"
            onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
          >
            {isMenuDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {isMenuDrawerOpen && (
        <div className="lg:hidden px-6 pb-6 bg-black border-t border-white/10">
          <div className="flex flex-col gap-4 text-gray-300 text-sm mt-4">
            <p className="hover:text-white cursor-pointer">Overview</p>
            <p className="hover:text-white cursor-pointer">Curriculum</p>
            <p className="hover:text-white cursor-pointer">Testimonials</p>
            <p className="hover:text-white cursor-pointer">Pricing</p>

            <div className="mt-4">
              <AppButton title="Enroll now" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
