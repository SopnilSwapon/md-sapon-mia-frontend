import Image from "next/image";

export default function StruggleToFocusSec() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative inline-block rounded-md  mb-6 p-[1.5px] overflow-hidden group transition">
          {/* animated border */}
          <div
            className="absolute inset-0 rounded-md border-move opacity-80 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, #2466F2, rgba(255,255,255,0.25), #2466F2)",
              backgroundSize: "200% 100%",
            }}
          />

          {/* soft glow */}
          <div
            className="absolute inset-0 rounded-md blur-[6px] opacity-40 group-hover:opacity-70 transition"
            style={{
              background:
                "linear-gradient(90deg, #2466F2, transparent, #2466F2)",
              backgroundSize: "200% 100%",
              animation: "borderMove 6s linear infinite",
            }}
          />

          {/* inner content */}
          <div className="relative px-4 py-2 text-[14px] font-medium rounded-md bg-[#171B21]/95 text-gray-200 backdrop-blur">
            🔵 Are Distractions Holding You Back?
          </div>
        </div>
        {/* 🔥 Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-300">
          If you struggle to focus, feel overwhelmed <br /> by end
          <span className="text-gray-500">
            less tasks, or procrastinate instead
            <br />
            of making progress, you’re not alone.
          </span>
        </h2>

        {/* 🔥 Top small images */}
        <div className="flex justify-center gap-4 mt-10">
          <Image
            src="/images/strugle1.png"
            alt=""
            width={120}
            height={120}
            className="rounded-xl object-cover"
          />
          <Image
            src="/images/strugle2.png"
            alt=""
            width={120}
            height={120}
            className="rounded-xl object-cover"
          />
          <Image
            src="/images/strugle3.png"
            alt=""
            width={120}
            height={120}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* 🔥 Bottom layout */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-8">
        {/* Left big image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/focus-main.png"
            alt=""
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right card */}
        <div className="bg-[#0f141a] rounded-2xl p-6 relative">
          {/* Top badge */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
              🔵 No worries
            </div>

            {/* avatars */}
            <div className="flex -space-x-3">
              <Image
                src="/images/p1.png"
                width={28}
                height={28}
                className="rounded-full border border-black"
                alt=""
              />
              <Image
                src="/images/p2.png"
                width={28}
                height={28}
                className="rounded-full border border-black"
                alt=""
              />
              <Image
                src="/images/p3.png"
                width={28}
                height={28}
                className="rounded-full border border-black"
                alt=""
              />
            </div>
          </div>

          {/* text */}
          <p className="text-gray-400 text-sm mb-4">
            The ability to concentrate deeply is the ultimate productivity hack
          </p>

          <h3 className="text-xl font-semibold mb-6">
            And fortunately it’s
            <br />
            a skill you can train
            <br />& develop.
          </h3>

          {/* right side vertical images */}
          <div className="absolute right-4 bottom-4 flex flex-col gap-3">
            <Image
              src="/images/p1.png"
              width={70}
              height={70}
              className="rounded-lg"
              alt=""
            />
            <Image
              src="/images/p2.png"
              width={70}
              height={70}
              className="rounded-lg"
              alt=""
            />
            <Image
              src="/images/p3.png"
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
