import { Box, Typography } from "@mui/material";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import TabPanel from "./TabPanel";

function Tabs({
  tabValue,
  handleChange,
  tabItems = [],
  children,
}: {
  tabValue: number;
  handleChange: (tabValue: number) => void;
  tabItems: { label: string; value: number }[];
  children?: React.ReactNode;
}) {
  const [indicator, setIndicator] = useState({ offset: 0, width: 0 });
  const ulRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLElement>(null);

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
    if (ulRef.current && scrollRef.current) {
      const ulLeft = ulRef.current.getBoundingClientRect().left;
      const liLeft = element.getBoundingClientRect().left;
      const liWidth = element.offsetWidth;
      setIndicator({ offset: liLeft - ulLeft, width: liWidth });

      scrollRef.current.scrollLeft = liLeft - ulLeft;
    }
  };

  return (
    <>
      <Box
        sx={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
          width: "100%",
          border: (theme) => `1px solid ${theme.hexnode.colors.bodyLightGrey}`,
        }}
        ref={scrollRef}
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
            bgcolor={(theme) => theme.hexnode.colors.headerBgColor}
            position={"absolute"}
            sx={{
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
              transitionDuration: ".6s",
              left: `${indicator.offset}px`,
              width: `${indicator.width}px`,
              zIndex: "2",
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
                cursor:
                  tabValue !== item.value ?? index ? "pointer" : "default",
                "::before": {
                  content: '""',
                  width: "2px",

                  backgroundColor: (theme) =>
                    theme.hexnode.colors.bodyLightGrey,
                  left: 0,
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  zIndex: 1,
                },
                transition: "all .4s cubic-bezier(0.4, 0, 0.2, 1)",
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
                  display={"flex"}
                  zIndex={3}
                  sx={{
                    transitionDuration: ".4s",
                  }}
                  fontFamily={"inherit"}
                >
                  {item?.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {children}
    </>
  );
}

export default Tabs;

Tabs.TabPanel = TabPanel;
