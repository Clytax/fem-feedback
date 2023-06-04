import React from "react";
// Package
import cx from "classnames";
type Props = {
  name: string;
  selected: boolean;
  onClick: any;
};

const FilterCategory = ({ name, selected, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-body3 font-semibold",
        {
          // if selected then text-white if not then text-dark-blue

          "bg-dark-blue text-white": selected,
          "bg-neutral-200 text-dark-blue hover:bg-dark-blue/25": !selected,
        }
      )}
    >
      {name}
    </button>
  );
};

export default FilterCategory;
