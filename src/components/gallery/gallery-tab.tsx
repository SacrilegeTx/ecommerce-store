import type { Image as ImageType } from "../../../types";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}

function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image fill alt="" className="object-cover object-center" src={image.url} />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-slate-600" : "ring-transparent",
            )}
          />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
