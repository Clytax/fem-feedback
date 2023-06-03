import * as React from "react";
import { SVGProps } from "react";
const IconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} {...props}>
    <text
      fill="#F2F4FE"
      fillRule="evenodd"
      fontFamily="Jost-Bold, Jost"
      fontSize={14}
      fontWeight="bold"
      transform="translate(-24 -20)"
    >
      <tspan x={24} y={27.5}>
        {"+"}
      </tspan>
    </text>
  </svg>
);
export default IconPlus;
