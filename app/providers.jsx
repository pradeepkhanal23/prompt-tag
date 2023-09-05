"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

function ToggleTheme({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default ToggleTheme;