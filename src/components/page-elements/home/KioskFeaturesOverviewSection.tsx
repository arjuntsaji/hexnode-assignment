import React, { useEffect, useRef, useState } from "react";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";
import { Box, Stack } from "@mui/material";
import AnimatedBox from "../../ui/animation/AnimatedBox";

const AccordionData = [
  {
    label: "Effortless kiosk deployment & management",
    content:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    imageSrc:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Feffortless-kiosk-deployement-image.jpg&w=640&q=80",
  },
  {
    label: "Customized interface for brand visibility",
    content:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    imageSrc:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fcustomized-interface-image.jpg&w=640&q=80",
  },
  {
    label: "What more can you do with Hexnode kiosk?",
    content:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features",
    imageSrc:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fpower-up-protection-image.jpg&w=640&q=80",
  },
  {
    label: "Secure and update your app ecosystem",
    content:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    imageSrc:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fsecure-app-ecosystem.jpg&w=640&q=80",
  },
  {
    label: "Provide an easy-to-use interface for end-users",
    content:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    imageSrc:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Feasy-to-use-interface-image.jpg&w=640&q=80",
  },
];

function KioskFeaturesOverviewSection() {
  const [hover, setHover] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const prevActiveAccordion = useRef(activeAccordion);
  const direction =
    activeAccordion > prevActiveAccordion.current ? "top" : "bottom";

  useEffect(() => {
    prevActiveAccordion.current = activeAccordion;
  }, [activeAccordion]);
  return (
    <Box
      component={"section"}
      sx={{
        pb: { mdlg: "120px", xs: "60px" },
      }}
      aria-labelledby="kiosk-features-heading"
    >
      <Container>
        <Stack
          sx={{
            gap: {
              md: "40px",
            },
          }}
        >
          <Heading
            variant="h2"
            sx={{
              maxWidth: {
                sm: "800px",
                xs: "340px",
              },
              pb: {
                xs: "20px",
                md: "20px",
              },
              mx: "auto",
            }}
            textAlign={"center"}
            id="kiosk-features-heading"
          >
            What additional possibilities does the Kiosk mode offer?
          </Heading>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            aria-live="polite"
          >
            <Box
              sx={{
                maxWidth: { md: "545px" },
                width: { md: "50%" },
                maxHeight: "545px",
                mr: "20px",
                position: "relative",
                display: {
                  mdlg: "initial",
                  xs: "none",
                },
              }}
              flex={1}
            >
              <Box
                sx={{
                  maxWidth: {
                    md: "calc(100% - 25px)",
                  },
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <AnimatedBox
                  key={AccordionData[activeAccordion ?? 0]?.imageSrc}
                  direction={direction}
                >
                  <Box
                    component={"img"}
                    sx={{ maxWidth: "100%" }}
                    src={AccordionData[activeAccordion ?? 0]?.imageSrc}
                  />
                </AnimatedBox>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  top: hover ? "19%" : "20%",
                  pl: "25px",
                  py: "15px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Box
                  component={"p"}
                  m={0}
                  sx={{
                    backgroundColor: "hsla(0,0%,100%,.9)",
                    pl: {
                      sm: "50px",
                    },
                    pr: "30px",
                    py: "15px",
                    border: "1px solid rgb(242 242 242)",
                    borderRadius: "8px",
                  }}
                  position={"relative"}
                >
                  <Box
                    component={"span"}
                    position={"absolute"}
                    top={"17px"}
                    sx={{
                      left: {
                        sm: "15px",
                        xs: "8px",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="https://static.hexnode.com/v2/assets/img/ads-pages/ads-tick-green.svg"
                      sx={{
                        objectFit: "contain",
                      }}
                      alt="Tick icon"
                    />
                  </Box>
                  <Box
                    component={"span"}
                    sx={{
                      m: 0,
                      lineHeight: { sm: "26px", xs: "22px" },
                      fontSize: {
                        sm: "18px",
                        xs: "16px",
                      },
                      fontWeight: "600",
                      color: "rgb(51 51 51)",
                    }}
                  >
                    Zero touch kiosk
                  </Box>
                </Box>
              </Box>
            </Box>
            <Stack flex={1} role="tablist" aria-label="Accordion tabs">
              {AccordionData.map((data, index) => {
                return (
                  <Stack
                    key={index}
                    sx={{
                      pb: {
                        mdlg: "25px",
                        xs: "20px",
                      },
                      ...(index !== 0 && {
                        pt: {
                          mdlg: "25px",
                          xs: "20px",
                        },
                      }),
                      borderBottom: (theme) =>
                        `1px solid ${theme.hexnode.colors.bodyLightGrey}`,
                    }}
                  >
                    <Box
                      position={"relative"}
                      sx={{
                        maxWidth: "calc(320px + 15px)",
                        display: {
                          mdlg: "none",
                          xs: activeAccordion === index ? "initial" : "none",
                          // xs: "none",
                        },
                      }}
                      borderRadius={"10px"}
                      my={"20px"}
                      mx={"auto"}
                      display={"block"}
                    >
                      <Box maxWidth={"320px"}>
                        <Box
                          component={"img"}
                          maxHeight={"320px"}
                          maxWidth="100%"
                          height="auto"
                          src={AccordionData[activeAccordion ?? 0]?.imageSrc}
                          alt={data.label}
                        />
                      </Box>
                    </Box>
                    <Heading
                      variant="h3"
                      sx={{
                        fontSize: { xs: "24px", sm: "26px" },
                        lineHeight: { xs: "36px", sm: "40px" },
                        cursor: "pointer",
                        m: 0,
                      }}
                      onClick={() => {
                        setActiveAccordion(index);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveAccordion(index);
                          e.preventDefault();
                        }
                      }}
                      role="tab"
                      id={`tab-${index}`}
                      aria-selected={activeAccordion === index}
                      tabIndex={0}
                    >
                      {data.label}
                    </Heading>
                    <Box
                      sx={{
                        transitionProperty: "all",
                        transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                        transitionDuration: "0.3s",
                        height: {
                          xl: activeAccordion === index ? "138px" : "0px",
                          mobile: activeAccordion === index ? "166px" : "0px",
                          mdlg: activeAccordion === index ? "194px" : "0px",
                          xs: activeAccordion === index ? "222px" : "0px",
                        },
                        overflow: "hidden",
                      }}
                      role="tabpanel"
                      aria-labelledby={`tab-${index}`}
                    >
                      <Stack>
                        <Box
                          component={"p"}
                          sx={{
                            m: 0,
                            lineHeight: "28px",
                            fontSize: "18px",
                            fontWeight: "400",
                            pt: "20px",
                          }}
                        >
                          {data.content}
                        </Box>
                        <Box
                          component={"a"}
                          display={"inline-flex"}
                          mt={"10px"}
                          sx={{
                            "&:hover .svg-parent": {
                              ml: "6px",
                            },
                          }}
                        >
                          <Box
                            component={"span"}
                            sx={{
                              color: "rgb(221 7 53)",
                              lineHeight: "23px",
                              textTransform: "uppercase",
                              fontWeight: "600",
                              fontSize: "18px",
                            }}
                          >
                            Try For Free
                          </Box>
                          <Box
                            ml={"4px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            sx={{
                              transition: "margin 0.5s ease-out",
                            }}
                            className="svg-parent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6.575"
                              height="11.737"
                              className="ml-[5px] translate-x-0 group-hover/tabLink:translate-x-[3px] transition-all duration-300 ease-out"
                            >
                              <path
                                fill="none"
                                stroke="#dd0735"
                                strokeLinecap="round"
                                d="m.707.707 5.161 5.161-5.161 5.161"
                                data-name="arrow - icon"
                              />
                            </svg>
                          </Box>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default KioskFeaturesOverviewSection;
