import React from "react";
import type { SVGProps } from "react";

export function VercelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <linearGradient
          id="SVGvjHZvbZs"
          x1={1.459}
          x2={1.096}
          y1={32.377}
          y2={32.82}
          gradientTransform="matrix(113 0 0 -100 -112 3301)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0}></stop>
          <stop offset={1} stopColor="#222"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#SVGvjHZvbZs)"
        fillRule="evenodd"
        d="m16 3.611l14 24.778H2z"
      ></path>
    </svg>
  );
}
