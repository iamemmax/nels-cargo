import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeaderText: React.FC<Props> = ({ children, className }) => {
  return (
    <h2 className={`header text-[2rem]  text-button-color py-2 ${className}`}>
      {children}
    </h2>
  );
};

export default HeaderText;
