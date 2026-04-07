"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GradientBorderButton from "./GradientBorderButton";

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data = [
    {
      name: "Alex Carter",
      role: "Freelance Designer",
      text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
      image: "/images/student1.png",
    },

    {
      name: "Mark Davidson",
      role: "Software Developer",
      text: "I never realized how much distractions I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled times",
      image: "/images/student3.png",
    },
    {
      name: "Daniel Foster",
      role: "Content creator",
      video: true,
      image: "/images/video.png",
    },
    {
      name: "Daniel Davidson",
      role: "Software Developer",
      text: "I never realized how much distractions I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!  I feel more in control of my time and energy.",
      image: "/images/student2.png",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="flex justify-center mb-8">
        <GradientBorderButton>🔵 &nbsp;Testimonials</GradientBorderButton>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TOP ROW */}
        <h2 className="text-4xl text-center mb-26 font-semibold text-gray-200">
          Real Results from <br /> Real People
        </h2>
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-gray-400 mt-4">
              Join with <span className="text-white font-semibold">5K</span>{" "}
              other students
            </p>
          </div>

          {/* 🔥 Custom arrows (top-right) */}
          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="w-12 h-12 cursor-pointer rounded-full bg-white/10 flex items-center justify-center"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 cursor-pointer rounded-full bg-white/10 flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* 🔥 SWIPER */}
        <Swiper
          //   modules={[Navigation]}
          //   centeredSlides
          //   slidesPerView={2.5}
          //   spaceBetween={20}
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              {/* CARD */}
              <div className="bg-[#0f141a] border border-blue-500/20 rounded-2xl p-6 h-full">
                {item.video ? (
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      width={800}
                      height={700}
                      className="w-full min-h-[272px]"
                    />

                    {/* play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center">
                        ▶
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-300">{item.role}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.image}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full mb-4"
                    />

                    <p className="text-gray-400 text-[16px] mb-6">
                      {item.text}
                    </p>

                    <p className="text-white">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
