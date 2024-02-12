"use client";
import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className=" max-w-7xl mx-auto px-4 md:px-2">{children}</div>;
};

export default Container;
