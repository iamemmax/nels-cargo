import * as React from "react";
import { SVGProps } from "react";

const StarRating = ({ color = "white", ...props }: SVGProps<SVGSVGElement> & { color?: string }) => (
    <svg
        width={36}
        height={34}
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M7.19375 33.5L10.0375 21.2063L0.5 12.9375L13.1 11.8438L18 0.25L22.9 11.8438L35.5 12.9375L25.9625 21.2063L28.8062 33.5L18 26.9812L7.19375 33.5Z"
            fill={color} // Fill color determined by the color prop
        />
    </svg>
);

export default StarRating;
