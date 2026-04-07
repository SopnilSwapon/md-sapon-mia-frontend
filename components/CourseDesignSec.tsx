import Image from "next/image";

export default function CourseDesign() {
  const items = [
    {
      text: "Develop laser-sharp focus & eliminate distractions.",
      icon: "/images/course-desing1.png",
    },
    {
      text: "Master deep work techniques for smarter productivity.",
      icon: "/images/course-desing2.png",
    },
    {
      text: "Overcome procrastination & get more done.",
      icon: "/images/course-desing3.png",
    },
    {
      text: "Build lasting habits for long-term success.",
      icon: "/images/course-desing4.png",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-16 px-6">
      <div className="flex justify-center mb-8">
        <div className="relative inline-block rounded-md  mb-6 p-[1.5px] overflow-hidden  transition">
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
            🔵 The Deep Work Blueprint
          </div>
        </div>
      </div>
      <h2 className="text-white text-2xl font-medium text-center leading-snug max-w-xs mx-auto mb-28">
        A self-paced, results-driven course designed to help you
      </h2>

      <div className="max-w-sm mx-auto flex gap-15">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center w-4 shrink-0 pt-2">
          {items.map((_, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              {/* dot */}
              <div className="w-3 h-3 mt-2 rounded-full bg-[#3b6ef6] shadow-[0_0_10px_#3b6ef6]" />

              {/* ALWAYS line (including last one) */}
              <div
                className="w-0.5 flex-1 mt-2"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(59,110,246,0.2), #3b6ef6, rgba(59,110,246,0.2))",
                }}
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col flex-1 mt-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-5 pb-12">
              <div className="w-17 h-17 rounded-full bg-[#1c1c1e] border border-[#2a2a2e] flex items-center justify-center shrink-0">
                <Image src={item.icon} alt={item.text} width={36} height={36} />
              </div>

              <p className="text-[#d0d0d0] text-[15px] leading-relaxed pt-3">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
