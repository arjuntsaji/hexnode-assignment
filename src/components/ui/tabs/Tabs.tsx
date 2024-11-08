import { Box, Typography } from "@mui/material";
import React, { MouseEvent, useEffect, useRef, useState } from "react";

function Tabs({
  tabValue,
  handleChange,
  tabItems = [],
}: {
  tabValue: number;
  handleChange: (tabValue: number) => void;
  tabItems: { label: string; value: number }[];
}) {
  const [indicator, setIndicator] = useState({ offset: 0, width: 0 });
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ulRef.current) {
      const activeTab = ulRef.current.children[tabValue + 1] as HTMLLIElement;
      if (activeTab) {
        const ulLeft = ulRef.current.getBoundingClientRect().left;
        const liLeft = activeTab.getBoundingClientRect().left;
        const liWidth = activeTab.offsetWidth;
        setIndicator({ offset: liLeft - ulLeft, width: liWidth });
      }
    }
  }, [tabValue, tabItems]);
  const handleTabClick = (index: number, element: HTMLLIElement) => {
    handleChange(index);
    if (ulRef.current) {
      const ulLeft = ulRef.current.getBoundingClientRect().left;
      const liLeft = element.getBoundingClientRect().left;
      const liWidth = element.offsetWidth; // Get the width of the clicked tab
      setIndicator({ offset: liLeft - ulLeft, width: liWidth });
      // Scroll to keep active tab centered horizontally on mount
      const scrollLeft = ulRef.current.scrollLeft;
      const ulCenter = ulRef.current.clientWidth / 2;
      ulRef.current.scrollLeft =
        scrollLeft + liLeft - ulLeft - ulCenter + liWidth / 2;
    }
  };

  return (
    <Box
      sx={{
        overflowX: "scroll",
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
        width: "100%",
        border: "1px solid rgb(247 247 247)",
      }}
    >
      <Box
        display={"flex"}
        component={"ul"}
        m={0}
        p={0}
        sx={{
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "space-between",
        }}
        position={"relative"}
        ref={ulRef}
      >
        <Box
          borderRadius={"4px"}
          height={"80px"}
          bgcolor={"rgb(2 10 25)"}
          position={"absolute"}
          sx={{
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
            transitionDuration: ".6s",
            left: `${indicator.offset}px`,
            width: `${indicator.width}px`,
            zIndex: "-2",
          }}
        ></Box>
        {tabItems?.map((item, index) => (
          <Box
            display={"flex"}
            component={"li"}
            px={"30px"}
            minHeight={"80px"}
            textAlign={"center"}
            width={"100%"}
            flex={"1 1 0%"}
            position={"relative"}
            onClick={(e: MouseEvent<HTMLLIElement>) => {
              handleTabClick(item.value ?? index, e.currentTarget);
            }}
            sx={{
              cursor: tabValue !== item.value ?? index ? "pointer" : "default",
              "::before": {
                content: '""',
                width: "2px",
                backgroundColor: "rgb(247 247 247)",
                left: 0,
                position: "absolute",
                top: 0,
                bottom: 0,
              },
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                component={"p"}
                py={"26px"}
                fontSize={"22px"}
                fontWeight={"600"}
                lineHeight={"24px"}
                color={tabValue === index ? "#fff" : "rgba(2, 10, 25, .5)"}
                maxWidth={"240px"}
              >
                {item?.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Tabs;
