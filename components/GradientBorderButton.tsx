import React from "react";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientBorderButton({
  children,
  className = "",
}: TProps) {
  return (
    <button
      className={`relative px-6 py-3 cursor-pointer rounded-md text-white bg-[#171B21] ${className}`}
      style={{
        border: "1px solid transparent",
        background: `
          linear-gradient(#171B21, #171B21) padding-box,
          linear-gradient(to left, rgba(59,110,246,0.2), #3b6ef6, rgba(59,110,246,0.2)) border-box
        `,
      }}
    >
      {children}
    </button>
  );
}
