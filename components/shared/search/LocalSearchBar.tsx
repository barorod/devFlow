"use client";

import Image from "next/image";
import { Input } from "../../ui/input";

interface CustomInputProps {
  placeholder: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  otherClasses?: string;
  route: string;
}

const LocalSearchBar = ({
  placeholder = "Search...",
  iconPosition,
  imgSrc,
  otherClasses,
  route,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        value=""
        onChange={() => {}}
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};
export default LocalSearchBar;
