"use client";

import type { Color, Size } from "../../../../../../types";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

import Filter from "./filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

function MobileFilters({ colors, sizes }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>

      <Dialog as="div" className="relative z-50 lg:hidden" open={open} onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        {/* <div className="fixed inset-0 z-50 flex flex-col bg-white p-4"> */}
        <div className="fixed inset-0 z-50 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* Render the filters */}
            <div className="px-4">
              <Filter name="Colors" valueKey="colorId" values={colors} />
              <Filter name="Size" valueKey="sizeId" values={sizes} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default MobileFilters;
