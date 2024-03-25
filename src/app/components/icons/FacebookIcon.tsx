import * as React from "react";
import { SVGProps } from "react";
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.1667 1.66675H11.6667C10.5616 1.66675 9.50179 2.10573 8.72039 2.88714C7.93899 3.66854 7.5 4.72835 7.5 5.83341V8.33341H5V11.6667H7.5V18.3334H10.8333V11.6667H13.3333L14.1667 8.33341H10.8333V5.83341C10.8333 5.6124 10.9211 5.40044 11.0774 5.24416C11.2337 5.08788 11.4457 5.00008 11.6667 5.00008H14.1667V1.66675Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default FacebookIcon;
