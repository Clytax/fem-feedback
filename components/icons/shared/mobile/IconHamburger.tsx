import * as React from "react";
import { SVGProps } from "react";
const IconHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={17} {...props}>
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M0 0h20v3H0zm0 7h20v3H0zm0 7h20v3H0z"
    />
  </svg>
);
export default IconHamburger;
