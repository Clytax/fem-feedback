import React from "react";
// Component
import FilterCategory from "./FilterCategory";
// Redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleFilterCategory } from "@/features/filter/filterSlice";

// Types
import { Categories } from "@/types/features/filter";
const FilterCategories = () => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.filter.categories);
  return (
    <div className="lg:max-h-auto flex flex-wrap items-start gap-x-2 gap-y-4 overflow-y-scroll rounded-xl bg-white p-6 md:h-[178px] md:max-h-[178px] md:w-1/3 lg:h-auto lg:max-h-full lg:w-[255px] lg:overflow-auto ">
      {categories.map((category: { name: Categories; active: boolean }) => (
        <FilterCategory
          key={category.name}
          name={category.name}
          selected={category.active}
          onClick={() => dispatch(toggleFilterCategory(category.name))}
        />
      ))}
    </div>
  );
};

export default FilterCategories;
