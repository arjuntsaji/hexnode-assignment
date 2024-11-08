import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";
import Paragraph from "../../ui/heading/Paragraph";

import TabPanel from "../../ui/tabs/TabPanel";
import Tabs from "../../ui/tabs/Tabs";

const TabItems = [
  { label: "Single App Kiosk", value: 0 },
  { label: "Multi-App Kiosk", value: 1 },
  { label: "Web-based Kiosk", value: 2 },
  { label: "Digital Signage", value: 3 },
  { label: "ASAM Kiosk", value: 4 },
];
const TabPanelData = [
  {
    label: "Powerful Single-App Kiosk solutions for enhanced control",
    value: 0,
    items: [
      {
        label:
          "Provision the devices to run one specialized application, with limited functionalities.",
      },
      {
        label:
          "Customize the device settings to cater to a specific use-case each time.",
      },
      {
        label:
          "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      },
      {
        label:
          "Empower your administrators with full control over the kiosk devices.",
      },
    ],
    imageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=640&q=100",
  },
  {
    label: "Elevate efficiency with Multi-App Kiosk",
    value: 1,
    items: [
      {
        label:
          "Limit device access to approved apps, ensuring focus and productivity.",
      },
      {
        label:
          "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      },
      {
        label:
          "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      },
      {
        label:
          "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      },
    ],
    imageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fmulti-app-kiosk-image.jpg&w=640&q=100",
  },
  {
    label: "Explore the new way to manage web apps and websites",
    value: 2,
    items: [
      {
        label:
          "Let users access essential and approved web apps, website and files only.",
      },
      {
        label:
          "Make the best use of website kiosk with Hexnode's advanced settings.",
      },
      {
        label: "Tailor your experience to match your unique use case.",
      },
      {
        label:
          "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      },
    ],
    imageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=640&q=100",
  },
  {
    label: "Capture attention with Digital Signage Kiosks",
    value: 3,
    items: [
      {
        label:
          "Transform your devices into captivating digital signage kiosks that grab attention.",
      },
      {
        label:
          "Engage your audience with vibrant images and seamless video streaming.",
      },
      {
        label:
          "Customize media files with trimming, muting, and background music.",
      },
      {
        label:
          "Advertise and show off your brand aesthetics to attract customers in different ways.",
      },
      {
        label:
          "Take control with Hexnode to reestablish your brand's presence.",
      },
    ],
    imageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fdigital-signage-kiosk-image.jpg&w=640&q=100",
  },
  {
    label: "Unlock the power of Autonomous Single App Mode (ASAM)",
    value: 4,
    items: [
      {
        label:
          "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      },
      {
        label:
          "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
      },
      {
        label:
          "Create focused, efficient and secure digital environments to match your requirements.",
      },
      {
        label:
          "Configure ASAM effortlessly and elevate your user experience like never before.",
      },
    ],
    imageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fasam-kiosk-image.jpg&w=640&q=100",
  },
];
function KioskModeSection() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabClick = (value: number) => {
    setTabValue(value);
  };

  return (
    <Box
      sx={{
        py: { mdlg: "120px", xs: "60px" },
      }}
      textAlign={"center"}
    >
      <Container>
        <Stack
          sx={{
            gap: { sm: "60px", xs: "40px" },
          }}
        >
          <Typography variant="h2" maxWidth={"900px"} mx={"auto"}>
            Specific kiosk modes for unique use cases
          </Typography>
          <Box>
            <Tabs
              tabItems={TabItems}
              handleChange={handleTabClick}
              tabValue={tabValue}
            />
            {TabPanelData?.map((data) => {
              return (
                <TabPanel currentTabValue={tabValue} value={data.value}>
                  <Box
                    display={"flex"}
                    sx={{
                      gap: { mdlg: "40px", xs: "0px" },
                      mb: {
                        mdlg: "0px",
                        xs: "20px",
                      },
                      flexDirection: {
                        mdlg: "row",
                        xs: "column-reverse",
                      },
                    }}
                  >
                    <Stack flex={1} sx={{ gap: { mdlg: "40px", xs: "15px" } }}>
                      <Heading variant="h3">{data.label}</Heading>
                      <Box
                        component={"ul"}
                        m="0"
                        display={"flex"}
                        flexDirection={"column"}
                        sx={{
                          gap: {
                            mdlg: "25px",
                            xs: "10px",
                          },
                        }}
                      >
                        {data?.items?.map((item) => {
                          return (
                            <Box
                              component={"li"}
                              sx={{
                                listStyleType: "none",
                              }}
                            >
                              <Box position={"relative"}>
                                <Box
                                  sx={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "8px",
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.393"
                                    height="10.111"
                                  >
                                    <path
                                      fill="none"
                                      stroke="#60c458"
                                      strokeWidth={2}
                                      d="M.697 4.107 5.45 8.718l8.247-8"
                                      data-name="tick - icon"
                                    />
                                  </svg>
                                </Box>
                                <Paragraph
                                  sx={{
                                    pl: { sm: "30px", xs: "25px" },
                                  }}
                                >
                                  {item.label}
                                </Paragraph>
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </Stack>
                    <Box
                      flex={1}
                      sx={{
                        mb: { mdlg: "0", xs: "20px" },
                        maxWidth: { sm: "460px", xs: "308px" },
                        width: "100%",
                      }}
                    >
                      <Box borderRadius={"10px"} overflow={"hidden"}>
                        <Box
                          component={"figure"}
                          m="0"
                          sx={{
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            width: "auto",
                            position: "relative",
                          }}
                        >
                          <Box
                            component={"img"}
                            sx={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                            src={data.imageUrl}
                          ></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default KioskModeSection;
