"use client";

import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Mouse follow gradient */}
      <div
        className="absolute w-96 h-96 rounded-full bg-linear-to-r from-blue-500/30 to-purple-500/30 blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative max-w-7xl w-full">
        <div className="space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-400 to-emerald-400 text-black rounded-none font-bold text-sm border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            AVAILABLE FOR HIRE
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none">
              HI, I'M
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none relative flex items-center gap-4">
              LUCAS
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 animate-pulse" />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full border-4 border-black animate-bounce" />
            </h1>
          </div>

          {/* Subtitle with creative layout */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="px-6 py-3 bg-white text-black font-bold text-xl md:text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-2">
              FULL-STACK DEV
            </div>
            <div className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold text-xl md:text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:-rotate-2">
              PROBLEM SOLVER
            </div>
            {/* <div className="px-6 py-3 bg-linear-to-r from-pink-500 to-orange-500 text-white font-bold text-xl md:text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-1">
              CREATOR
            </div> */}
          </div>

          {/* Bio text */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-medium">
            I build things for the web —{" "}
            <span className="text-blue-400 font-bold">not just components</span>
            , but systems that work, scale, and make sense. I enjoy solving{" "}
            <span className="text-purple-400 font-bold">complex problems</span>{" "}
            and turning them into clear, reliable{" "}
            <span className="text-pink-400 font-bold"> solutions</span> ✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 pt-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-none font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 hover:cursor-pointer"
            >
              <Code2 className="w-6 h-6" />
              SEE MY WORK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-black rounded-none font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-yellow-400 hover:cursor-pointer"
            >
              LET'S TALK
            </button>
          </div>

          {/* Decorative elements */}
          <div className="flex gap-4 pt-8">
            <div className="w-20 h-2 bg-blue-500 border-2 border-black" />
            <div className="w-20 h-2 bg-purple-500 border-2 border-black" />
            <div className="w-20 h-2 bg-pink-500 border-2 border-black" />
          </div>
        </div>
      </div>

      {/* Floating code symbols */}
      <div className="absolute top-20 right-20 text-blue-400 text-6xl font-bold opacity-20 animate-pulse hidden lg:block">
        {"</>"}
      </div>
      <div className="absolute bottom-20 left-20 text-purple-400 text-6xl font-bold opacity-20 animate-pulse hidden lg:block">
        {"{}"}
      </div>
    </section>
  );
}
