import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 ">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Image
            priority="high"
            src="/assests/images/sun.svg"
            alt="main-logo"
            width={30}
            height={30}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
          />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Image
            priority="high"
            src="/assests/images/moon.svg"
            alt="main-logo"
            width={30}
            height={30}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100 "
          />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
