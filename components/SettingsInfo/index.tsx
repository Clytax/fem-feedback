import React from "react";

// Component
import LogoBox from "./LogoBox";
import FilterCategories from "./FilterCategories";
import RoadmapInfo from "./RoadmapInfo";
type Props = {};

const SettingsInfo = (props: Props) => {
  return (
    <div className=" md:flex md:w-full md:flex-row md:items-center md:gap-3 lg:flex-col lg:gap-6">
      {/* Header Logo */}
      <LogoBox />

      {/* Categories */}
      <FilterCategories />

      {/* RoadMap View */}
      <RoadmapInfo />
    </div>
  );
};

export default SettingsInfo;
