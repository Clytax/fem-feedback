"use client";

// Components
import SettingsInfo from "@/components/SettingsInfo";
import Suggestions from "@/components/Suggestions";
export default function Home() {
  return (
    <main className="flex min-h-screen w-screen   bg-neutral-200 justify-center items-center">
      {/* Container */}
      <div className="lg:w-[1110px] lg:flex lg:flex-row lg:justify-between md:flex-col md:w-[95%] w-screen">
        {/* Settings and Logo */}
        <SettingsInfo />

        {/* Feedback */}
        <Suggestions />
      </div>
    </main>
  );
}
