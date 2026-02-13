"use client";

interface NavButtonProps {
  buttonLabel: string;
  isMobileMenu: boolean;
  onScroll: () => void;
}

export default function NavButton({
  onScroll,
  buttonLabel,
  isMobileMenu,
}: NavButtonProps) {
  return (
    <button
      onClick={() => onScroll()}
      className={`text-white font-bold border-2 hover:bg-white hover:text-black transition-all uppercase tracking-wide ${!isMobileMenu ? "px-5 py-2 border-transparent hover:border-white hover:bg-white hover:text-black text-sm hover:cursor-pointer" : "px-4 py-3 border-2 border-white text-left  "}`}
    >
      {buttonLabel}
    </button>
  );
}
