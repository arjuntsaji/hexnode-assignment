import { Box } from "@mui/material";
import React from "react";
import Container from "../../ui/container/Container";

const IndustryList = [
  {
    label:
      "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    industryLogoUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fidc.png&w=96&q=75",
  },
  {
    label:
      "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.",
    industryLogoUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fgartner.png&w=128&q=75",
  },
  {
    label:
      "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    industryLogoUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fforrester.png&w=256&q=75",
  },
];
function IndustryRecognition() {
  return (
    <Box
      bgcolor={"rgb(26 28 43)"}
      color={(theme) => theme.hexnode.colors.textLight}
      sx={{
        py: { md: "30px" },
      }}
      component={"section"}
    >
      <Container>
        <Box
          display={"flex"}
          sx={{
            mx: {
              mdlg: "-25px",
              md: "-10px",
              xs: "0px",
            },
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: {
              md: "initial",
              xs: "center",
            },
            justifyContent: {
              md: "space-between",
              xs: "center",
            },
          }}
        >
          {IndustryList?.map((industry, index) => {
            return (
              <>
                <Box
                  sx={{
                    px: {
                      mdlg: "25px",
                      md: "10px",
                      xs: "0px",
                    },
                    py: {
                      md: "0px",
                      xs: "40px",
                    },
                    position: "relative",
                    top: 0,
                    ":hover": {
                      top: {
                        md: "-5px",
                      },
                    },
                    transition: "all 0.3s ease-out",
                    alignItems: {
                      md: "start",
                      xs: "center",
                    },
                  }}
                  component={"a"}
                  display={"flex"}
                  flexDirection={"column"}
                  maxWidth={"340px"}
                >
                  <Box
                    maxWidth={"156px"}
                    minWidth={"82px"}
                    maxHeight={"25px"}
                    mb={"15px"}
                  >
                    <Box
                      component={"img"}
                      src={industry?.industryLogoUrl}
                      height={"25px"}
                      sx={{
                        objectFit: "contain",
                      }}
                      width={"100%"}
                      color={"transparent"}
                    />
                  </Box>
                  <Box
                    component={"p"}
                    lineHeight={"22px"}
                    fontSize={"14px"}
                    color={"hsla(0, 0%, 100%, .6)"}
                    sx={{
                      textAlign: { md: "left", xs: "center" },
                    }}
                  >
                    {industry?.label}
                  </Box>
                </Box>

                {IndustryList?.length - 1 !== index && (
                  <Box
                    sx={{
                      width: { md: "1px", xs: "107px" },
                    }}
                    bgcolor={"hsla(0, 0%, 100%, .2)"}
                    flexBasis={"1px"}
                  ></Box>
                )}
              </>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default IndustryRecognition;
