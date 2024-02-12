"use client";

import { FC } from "react";

interface HeadingProps {
  title: string;
  description?: string;
}

const Heading: FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="my-4 md:my-5">
      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{title}</h3>
      {description && (
        <span className="text-sm lg:text-base">{description}</span>
      )}
    </div>
  );
};

export default Heading;
