import Image from "next/image";
import GradientBorderButton from "./shared/GradientBorderButton";

export default function StruggleAndNoWorriesSection() {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-6 ">
      {/* Struggle to focus section */}
      <div className="max-w-6xl mx-auto text-center">
        <GradientBorderButton>
          🔵 &nbsp; Are Distractions Holding You Back?
        </GradientBorderButton>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-10 text-gray-300">
          If you struggle to focus, feel overwhelmed <br /> by end
          <span className="text-gray-500">
            less tasks, or procrastinate instead
            <br />
            of making progress, you’re not alone.
          </span>
        </h2>

        {/*  Struggling images */}
        <div className="flex justify-center overflow-x-hidden gap-2 md:gap-4 mt-10">
          <Image
            src="/images/strugle1.png"
            alt="struggle image 1"
            width={120}
            height={118}
          />
          <Image
            src="/images/strugle2.png"
            alt="struggle image 2"
            width={120}
            height={118}
          />
          <Image
            src="/images/strugle3.png"
            alt="struggle image 3"
            width={120}
            height={118}
          />
        </div>
      </div>

      {/* No worries section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl hidden md:block overflow-hidden">
          <Image
            src="/images/no-worries1.png"
            alt=""
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#0f141a] rounded-2xl p-6 relative">
          <div className="flex justify-between items-center mb-6">
            <GradientBorderButton>🔵 &nbsp; No worries</GradientBorderButton>

            <div>
              <Image
                src="/images/no-worries-group.png"
                width={128}
                height={100}
                alt="No worries group image"
              />
            </div>
          </div>
          <div className="relative md:absolute md:bottom-20">
            <p className="text-gray-400 text-sm mb-8.5">
              The ability to concentrate <br /> deeply is the ultimate <br />{" "}
              productivity hack
            </p>

            <h3 className="text-xl font-semibold mb-6">
              And fortunately it’s
              <br />
              a skill you can train
              <br />& develop.
            </h3>
          </div>

          {/* right side vertical images */}
          <div className="relative sm:absolute sm:right-4 sm:bottom-8 justify-center flex flex-row md:flex-col gap-3">
            <Image
              src="/images/no-worries1.png"
              width={70}
              height={70}
              className="rounded-lg"
              alt=""
            />
            <Image
              src="/images/no-worries2.png"
              width={70}
              height={70}
              className="rounded-lg"
              alt=""
            />
            <Image
              src="/images/no-worries3.png"
              width={70}
              height={70}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
