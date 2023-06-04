import React from "react";

// Components
import RoadMapInfoItem from "./RoadMapInfoItem";

const RoadmapInfo = () => {
  return (
    <div className="rounded-xl bg-white p-6 md:h-[178px] md:w-1/3 lg:w-[255px]">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="text-h3 font-bold tracking-h2 text-neutral-600">
          Roadmap
        </h1>
        <span className="text-body-3 cursor-pointer font-semibold text-dark-blue underline decoration-dark-blue hover:text-dark-blue/70 hover:decoration-dark-blue/70">
          View
        </span>
      </div>

      <div>
        <RoadMapInfoItem amount={2} color="orange" text="Planned" />
      </div>
    </div>
  );
};

export default RoadmapInfo;
