import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  img: string;
  type: "Web" | "Android";
  description: string;
};

export default function Slides({ title, img, type, description }: Props) {
  return (
    <div className="md:flex gap-10 px-20 justify-between ">
      <div>
        <div>{title}</div>
        <div>{type}</div>
        <div>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </div>
      </div>
      <div>
        <Image alt="" src={img} />
      </div>
    </div>
  );
}
