import { Box, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";
import Paragraph from "../../ui/heading/Paragraph";
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
  const [tabValue, setTabValue] = useState<number | null>(0);

  const handleTabClick = useCallback((value: number) => {
    setTabValue(value);
  }, []);

  return (
    <Box
      sx={{
        py: { mdlg: "120px", xs: "60px" },
      }}
      textAlign={"center"}
      component={"section"}
      role="region"
      aria-labelledby="kiosk-mode-section-heading"
    >
      <Container>
        <Stack
          sx={{
            gap: { sm: "60px", xs: "40px" },
          }}
        >
          <Typography
            variant="h2"
            maxWidth={"900px"}
            mx={"auto"}
            fontFamily={"inherit"}
            letterSpacing={"auto"}
            aria-describedby="kiosk-mode-section-description"
            fontWeight={"700"}
            sx={{
              fontSize: {
                xs: "32px",
                sm: "40px",
              },
              lineHeight: {
                sm: "1.3",
                xs: "40px",
              },
            }}
          >
            Specific kiosk modes for unique use cases
          </Typography>
          <Box
            sx={{
              display: {
                md: "initial",
                xs: "none",
              },
            }}
            overflow={"hidden"}
          >
            <Tabs
              tabItems={TabItems}
              handleChange={handleTabClick}
              tabValue={tabValue ?? 0}
              aria-labelledby="kiosk-tabs"
            >
              {TabPanelData?.map((data) => {
                return (
                  <Tabs.TabPanel
                    currentTabValue={tabValue ?? 0}
                    value={data.value}
                    aria-labelledby={`tab-panel-${data.value}`}
                    role="tabpanel"
                  >
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
                      <Stack
                        flex={1}
                        sx={{ gap: { mdlg: "40px", xs: "15px" } }}
                      >
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
                                aria-labelledby={`item-${item.label}`}
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
                                    id={`item-${item.label}`}
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
                              alt={data.label}
                              aria-labelledby={`image-${data.label}`}
                            ></Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Tabs.TabPanel>
                );
              })}
            </Tabs>
          </Box>

          <Box
            sx={{
              display: {
                md: "none",
                xs: "initial",
              },
            }}
            role="region"
            aria-labelledby="kiosk-tab-section-heading"
          >
            {TabPanelData?.map((tabPanelData, index) => {
              const tabData = TabItems?.find(
                (data) => data.value === tabPanelData.value
              );
              return (
                <>
                  <Stack
                    sx={{
                      borderColor: "rgba(0,0,0,.1)",
                      borderWidth: "1px",
                      borderBottomWidth: 0,
                      borderRadius: "4px",
                      borderStyle: "solid",
                      overflow: "hidden",
                      width: "100%",
                      cursor: "pointer",
                    }}
                    bgcolor={(theme) =>
                      tabValue === tabPanelData.value
                        ? theme.hexnode.colors.headerBgColor
                        : theme.hexnode.colors.textLight
                    }
                    onClick={() => {
                      setTabValue((prev) => {
                        if (prev !== tabPanelData?.value) {
                          return tabPanelData?.value;
                        }
                        return null;
                      });
                    }}
                    role="button"
                    aria-expanded={
                      tabValue === tabPanelData.value ? "true" : "false"
                    }
                    aria-controls={`tabpanel-${tabPanelData.value}`}
                    aria-labelledby={`tab-${tabPanelData.value}`}
                  >
                    <Box
                      component={"span"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      sx={{
                        lineHeight: "26px",
                        fontWeight: "700",
                        fontSize: "18px",
                        textAlign: "left",
                        padding: "16px",
                      }}
                      color={(theme) =>
                        tabValue === tabPanelData?.value
                          ? theme.hexnode.colors.textLight
                          : "rgba(2,10,25,.5)"
                      }
                      width={"100%"}
                    >
                      <Box component={"span"}>{tabData?.label}</Box>
                      <Box
                        component={"span"}
                        sx={{
                          transitionDuration: ".3s",
                          height: "20px",
                          transformOrigin: "center",
                          transform: `rotate(${
                            tabValue === tabPanelData?.value ? "180" : "0"
                          }deg)`,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          role="presentation"
                        >
                          <g id="Arrow" transform="translate(-901 -5212)">
                            <rect
                              id="Rectangle_2293"
                              data-name="Rectangle 2293"
                              width={20}
                              height={20}
                              transform="translate(901 5212)"
                              fill="none"
                            />
                            <path
                              id="Arrow-2"
                              className="  fill-[#020a19]/50"
                              data-name="Arrow"
                              d="M13.893,7.015a.78.78,0,0,1-.5-.18L7.352,1.784,1.305,6.657a.776.776,0,0,1-.49.174.756.756,0,0,1-.083,0,.786.786,0,0,1-.525-.286L.2,6.529A.778.778,0,0,1,.306,5.393L6.847.128A.775.775,0,0,1,7.275,0l.052,0h.024a.778.778,0,0,1,.5.178l6.545,5.455a.78.78,0,0,1-.5,1.379Z"
                              transform="translate(903.812 5218.563)"
                              fill={
                                tabValue === tabPanelData?.value
                                  ? "rgb(255 255 255"
                                  : "rgba(2,10,25,.5)"
                              }
                            />
                          </g>
                        </svg>
                      </Box>
                    </Box>
                  </Stack>

                  <Stack
                    px={"15px"}
                    bgcolor={(theme) => theme.hexnode.colors.bodyLightGrey}
                    flexDirection={"column-reverse"}
                    width={"100%"}
                    maxHeight={
                      tabValue === tabPanelData.value ? "1000px" : "0px"
                    }
                    justifyContent={"space-between"}
                    sx={{
                      transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                      transitionDuration: ".5s",
                      transitionProperty: "all",
                    }}
                    overflow={"hidden"}
                    role="tabpanel"
                    aria-labelledby={`tab-${tabPanelData.value}`}
                    aria-hidden={
                      tabValue !== tabPanelData.value ? "true" : "false"
                    }
                  >
                    <Box
                      textAlign={"left"}
                      flex={"1 1 0%"}
                      maxWidth={"760px"}
                      mb={"20px"}
                    >
                      <Box
                        component={"h3"}
                        m={0}
                        p={0}
                        lineHeight={"26px"}
                        fontWeight={"700"}
                        fontSize={"20px"}
                        pb={"15px"}
                        color={(theme) => theme.hexnode.colors.headerBgColor}
                        maxWidth={"670px"}
                      >
                        {tabPanelData?.label}
                      </Box>
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
                        {tabPanelData?.items?.map((item) => {
                          return (
                            <Box
                              component={"li"}
                              sx={{
                                listStyleType: "none",
                              }}
                              role="listitem"
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
                    </Box>
                    <Box
                      sx={{
                        mb: "20px",
                        maxWidth: "308px",
                        width: "100%",
                        height: {
                          sm: "210px",
                          xs: "auto",
                        },
                        mt: "15px",
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
                            height: {
                              sm: "220px",
                            },
                          }}
                        >
                          <Box
                            component={"img"}
                            sx={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                            src={
                              "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=640&q=100"
                            }
                            alt={tabPanelData?.label}
                            aria-labelledby={`image-${tabPanelData.value}`}
                          ></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default React.memo(KioskModeSection);
