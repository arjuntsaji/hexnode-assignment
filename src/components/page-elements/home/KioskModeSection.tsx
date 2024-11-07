import { Box, Stack, Typography } from "@mui/material";
import React, { MouseEvent, useRef, useState } from "react";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";

const TabItems = [
  "Single App Kiosk",
  "Multi-App Kiosk",
  "Web-based Kiosk",
  "Digital Signage",
  "ASAM Kiosk",
];
function KioskModeSection() {
  const [tabValue, setTabValue] = useState(0);
  const [offset, setOffset] = useState<number>(0);
  console.log(offset, "offsetoffset");

  // Reference to the ul element to calculate offsets
  const ulRef = useRef<HTMLUListElement>(null);

  // Function to handle tab click, calculates the offset of clicked li relative to ul
  const handleTabClick = (index: number, element: HTMLLIElement) => {
    setTabValue(index);

    if (ulRef.current) {
      const ulLeft = ulRef.current.getBoundingClientRect().left;
      const liLeft = element.getBoundingClientRect().left;
      setOffset(liLeft - ulLeft);
    }
  };

  return (
    <Box
      sx={{
        py: { mdlg: "120px", xs: "60px" },
      }}
      textAlign={"center"}
    >
      <Container>
        <Typography variant="h2" maxWidth={"900px"} mx={"auto"}>
          Specific kiosk modes for unique use cases
        </Typography>

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
              width={"243px"}
              borderRadius={"4px"}
              height={"80px"}
              bgcolor={"rgb(2 10 25)"}
              position={"absolute"}
              sx={{
                transitionProperty: "all",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                transitionDuration: ".6s",
                left: `${offset}px`,
                zIndex: "-2",
              }}
            >
              ff
            </Box>
            {TabItems?.map((item, index) => {
              return (
                <Box
                  display={"flex"}
                  component={"li"}
                  px={"30px"}
                  minHeight={"80px"}
                  textAlign={"center"}
                  //   sx={{
                  //     "::before": {
                  //       content: '""',
                  //       width: "2px",
                  //       backgroundColor: "rgb(247 247 247)",
                  //       left: 0,
                  //     },
                  //   }}
                  borderLeft={"2px solid rgb(247 247 247)"}
                  width={"100%"}
                  flex={"1 1 0%"}
                  position={"relative"}
                  onClick={(e: MouseEvent<HTMLLIElement>) => {
                    handleTabClick(index, e.currentTarget);
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
                      color={
                        tabValue === index ? "#fff" : "rgba(2, 10, 25, .5)"
                      }
                      maxWidth={"240px"}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          p={"40px"}
          bgcolor={"rgb(247 247 247)"}
          display={"flex"}
          sx={{
            gap: { mdlg: "40px", xs: "0px" },
            mb: {
              mdlg: "0px",
              xs: "20px",
            },
          }}
          textAlign={"initial"}
        >
          <Stack flex={1} sx={{ gap: { mdlg: "40px", xs: "15px" } }}>
            <Heading variant="h3">
              Explore the new way to manage web apps and websites
            </Heading>
          </Stack>
          <Box flex={1}>1</Box>
        </Box>
      </Container>
    </Box>
  );
}

export default KioskModeSection;
