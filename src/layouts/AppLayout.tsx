import React, { useEffect, useState, useRef } from "react";
import AppBar from "../components/ui/app-bar/AppBar";
import { useMediaQuery, useTheme } from "@mui/material";

function AppLayout({ children }: { children: React.ReactNode }) {
  const [activeMdTopBar, setActiveMdTopBar] = useState({
    scrollStart: false,
    active: false,
    downward: false,
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const element = document.getElementById("industry-recognition");
        if (element) {
          const rect = element.getBoundingClientRect();
          const isActive = rect.top < 70;
          setActiveMdTopBar((prevState) => ({
            scrollStart: true,
            active: isActive,
            downward: window.scrollY > lastScrollY,
          }));

          setLastScrollY(window.scrollY);
        }
      }, 50); // Delay the execution by 1 second (50 ms)
    };

    if (typeof window !== "undefined" && isBelowLg) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [lastScrollY, isBelowLg]);

  return <AppBar activeMdTopBar={activeMdTopBar}>{children}</AppBar>;
}

export default React.memo(AppLayout);
