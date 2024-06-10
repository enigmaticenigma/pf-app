"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@/components/ThemeProvider";
import {fetcher} from "@/services/fetcher";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 6000000000 }}>
      <ThemeProvider attribute={"class"} defaultTheme={"dark"}>
        {children}
      </ThemeProvider>
    </SWRConfig>
  );
}
