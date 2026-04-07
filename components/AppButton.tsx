"use client";

import React from "react";
import { cn } from "@/lib/utils";

type AppButtonProps = {
  title: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function AppButton({
  title,
  className,
  onClick,
  type = "button",
  disabled = false,
}: AppButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-11.75 w-29 rounded-lg bg-[#2466F2] text-white text-[16px] font-semibold cursor-pointer",
        "flex items-center justify-center",
        "transition-all duration-200",
        "hover:bg-[#1e55cc]",
        "active:scale-95",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
    >
      {title}
    </button>
  );
}
