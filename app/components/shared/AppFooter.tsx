import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="bg-[#0F131B] rounded-md text-white mx-4 px-6 pt-24 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-200 leading-tight">
              The Deep <br /> Work Blueprint
            </h2>

            <p className="text-gray-400 text-lg">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          <div className="relative bg-linear-to-br from-blue-600 to-blue-500 rounded-2xl my-16 p-6 md:p-8 flex flex-col justify-between h-[180px]">
            <div className="flex -space-x-3">
              <Image
                src="/images/no-worries-group.png"
                width={100}
                height={100}
                className="rounded-full border border-black"
                alt=""
              />
            </div>

            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600">
              <ArrowRight />
            </div>

            <p className="text-white text-lg font-medium">
              Join with 5K other students
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-blue-500/20" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© Copyright 2024, All Rights Reserved</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-0 text-center md:text-left justify-items-center md:justify-items-start">
            <Link href="/terms" className="hover:text-white transition">
              Terms & conditions
            </Link>

            <Link href="/refund" className="hover:text-white transition">
              Refund policy
            </Link>

            <Link href="/pricing" className="hover:text-white transition">
              Pricing
            </Link>

            <Link href="/support" className="hover:text-white transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
