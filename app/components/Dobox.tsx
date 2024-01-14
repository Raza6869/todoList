//next imports
import Image from "next/image";
import React from "react";
//media
import checkIcon from "@/images/icon-check.svg";

interface DoboxTypes {
  title: string;
}

export default function Dobox({ title }: DoboxTypes) {
  return (
    <label className="dobox-light">
      <input type="checkbox" name="list" className="peer/task hidden" />
      <div className="rounded-full flex items-center justify-center border-[1px] border-darkGrayishBlue h-5 w-5 peer-checked/task:bg-gradient-to-br from-checkBackground1 to-checkBackground2">
        <Image
          src={checkIcon}
          alt="checked icon"
          className="invisble peer-checked:/task:visible"
        />
      </div>
      <p className="peer-checked/task:line-through peer-checked/task:text-darkGrayishBlue">
        {title}
      </p>
    </label>
  );
}
