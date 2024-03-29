"use client";

import { useState, useEffect } from "react";

import { formatter } from "@/lib/utils";

interface CurrencyProps {
  value?: string | number;
}

function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}

export default Currency;
