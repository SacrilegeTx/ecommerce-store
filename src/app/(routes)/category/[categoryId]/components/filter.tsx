"use client";

import type { Color, Size } from "../../../../../../types";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  values: (Size | Color)[];
  name: string;
  valueKey: string;
}

function Filter({ values, name, valueKey }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4 border-gray-200" />
      <div className="-mx-2 flex flex-wrap gap-2">
        {values.map((value) => (
          <div key={value.id} className="flex items-center">
            <Button
              // active={selectedValue === value.id}
              className={cn(
                "rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-600 hover:bg-gray-100",
                selectedValue === value.id &&
                  "border-gray-300 bg-gray-900 text-white hover:bg-gray-900 hover:text-white",
              )}
              onClick={() => onClick(value.id)}
            >
              {value.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
