// components/Header.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center text-center py-28 px-6 w-[80%] m-auto text-white ">
      {/* Beta badge */}
      <div className="mb-4">
        <span className="px-3 py-1 rounded-full bg-white/20  text-gray-300">
          <span className="text-white text-semibold">* scout</span> is currently in beta →
        </span>
      </div>

      {/* Hero title */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        AI for teams building <br /> what&apos;s next.
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-center text-gray-400  mb-8">
        Scout gives you the tools to build custom agents and <br /> workflows in
        record time.
      </p>

      {/* CTA */}
      <Button size="lg" className="rounded-full px-6 py-3 bg-white text-black hover:text-white transition-all">
        Get Started →
      </Button>
    </header>
  );
}
