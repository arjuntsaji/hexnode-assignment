import { Box } from "@mui/material";
import React from "react";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";

const PlatFormsList = [
  {
    src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg",
    alt: "Android platform logo",
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg",
    alt: "Windows platform logo",
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg",
    alt: "iOS platform logo",
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg",
    alt: "Android TV platform logo",
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg",
    alt: "Apple TV platform logo",
  },
  {
    src: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fplatform%2Famazon-fire.png&w=256&q=100",
    alt: "Amazon Fire platform logo",
  },
];

function PlatFormSupport() {
  return (
    <Box
      sx={{
        py: {
          mdlg: "120px",
          xs: "60px",
        },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      component={"section"}
      aria-labelledby="platform-support-heading"
    >
      <Container>
        <Heading
          variant="h2"
          sx={{ mb: { sm: "60px", xs: "40px" } }}
          id="platform-support-heading"
        >
          Platforms supported
        </Heading>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexWrap={"wrap"}
          role="list"
          aria-label="Supported platforms list"
        >
          {PlatFormsList.map((platform, index) => {
            return (
              <Box
                key={index}
                sx={{
                  flexBasis: {
                    mdlg: "calc(100%/6)",
                    md: "33.333333%",
                    xs: "50%",
                  },
                  mb: {
                    sm: "15px",
                    xs: "25px",
                  },
                  px: "12px",
                  borderRadius: "10px",
                  flexShrink: 0,
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    maxWidth: {
                      sm: "190px",
                      xs: "150px",
                    },
                    height: {
                      sm: "72px",
                      xs: "60px",
                    },
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    // mx: "auto",
                  }}
                >
                  <Box
                    component={"img"}
                    sx={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={platform.src}
                    alt={platform.alt}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default React.memo(PlatFormSupport);
