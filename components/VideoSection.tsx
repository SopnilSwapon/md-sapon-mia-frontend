import Image from "next/image";

export default function VideoSection() {
  return (
    <section
      className="relative pb-24 px-6 rounded-xl overflow-hidden "
      style={{
        background:
          "radial-gradient(ellipse at center, #1a3a8f 10%, #0d1f5c 80%, #060d2e 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(30, 80, 200, 0.15) 3px, rgba(30, 80, 200, 0.15) 4px)",
          zIndex: 1,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(4, 10, 40, 0.7) 100%)",
          zIndex: 2,
        }}
      />

      <div className="relative mx-auto" style={{ zIndex: 3 }}>
        <div className="relative max-w-270 mt-20 mx-auto">
          <Image
            src="/images/video.png"
            alt="video"
            width={1800}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}
