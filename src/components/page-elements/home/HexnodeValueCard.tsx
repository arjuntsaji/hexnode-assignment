import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";
import Paragraph from "../../ui/heading/Paragraph";
import Slider from "react-slick";
const sliderData = [
  {
    quotes: '"Hexnode is of great value. Works great with Android and iOS!"',
    name: "Justin Modrak",
    desination: "Technology Coordinator",
    companyName: "East Troy Community School District",
    profileImageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1200&q=80",
  },
  {
    quotes:
      '"Most complete MDM solution I found, and I tested many of them, including major names"',
    name: "Dalibor Kruljac",
    desination: "",
    companyName: "KAMELEYA LTD",
    profileImageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1200&q=80",
  },
  {
    quotes: '"It seemed to be in-line with everything we were looking at."',
    name: "Chris Robinson",
    desination: "",
    companyName: "Executive Account Manager, NCS",
    profileImageUrl:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1200&q=80",
  },
];

function HexnodeValueCard() {
  const [status, setStatus] = useState({
    isLast: false,
    isFirst: true,
  });
  let sliderRef = useRef<any>(null);
  console.log(sliderRef, "sliderRefsliderRef");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    nextArrow: <NextArrow status={status} />,
    prevArrow: <PrevArrow status={status} />,
  };

  return (
    <Box
      sx={{
        pt: {
          mdlg: "120px",
          xs: "60px",
        },
        pb: {
          md: "60px",
          xs: "30px",
        },
      }}
      bgcolor={"rgb(247 247 247)"}
      component={"section"}
    >
      <Container>
        <Heading
          variant="h2"
          textAlign={"center"}
          sx={{
            pb: { md: "20px", xs: "0px" },
          }}
        >
          Why should you choose Hexnode?
        </Heading>
        <Box
          sx={{
            pb: { xs: "80px", mdlg: "0px" },
            maxWidth: {
              mdlg: "780px",
              md: "900px",
              sm: "400px",
              xs: "280px",
            },
            pt: "40px",
            mx: "auto",
            position: "relative",
          }}
        >
          <Box component={"ul"}>
            <Box position={"relative"}>
              <Slider
                ref={(slider) => (sliderRef.current = slider)}
                {...settings}
                beforeChange={(current, next) => {
                  const isLast = sliderData?.length - 1 === next;
                  const isFirst = next === 0;
                  console.log(current, next, "isLast");
                  //   console.log(isFirst, next, "isFirst");

                  setStatus(() => ({
                    isFirst,
                    isLast,
                  }));
                }}
              >
                {sliderData.map((data, index) => {
                  return (
                    <Box
                      width={"780px"}
                      display={"block"}
                      maxHeight={"100%"}
                      key={index}
                    >
                      <Box
                        display={"flex"}
                        borderRadius={"18px"}
                        position={"relative"}
                        sx={{
                          flexDirection: {
                            md: "row",
                            xs: "column",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              mdlg: "320px",
                              md: "unset",
                              sm: "400px",
                              xs: "280px",
                            },
                            height: {
                              mdlg: "320px",
                              md: "unset",
                              sm: "400px",
                              xs: "280px",
                            },
                            flexBasis: { md: "47%" },
                            maxWidth: { md: "320px" },
                            maxHeight: "400px",
                            lineHeight: "0px",
                            overflow: "hidden",
                          }}
                          position={"relative"}
                          mx={"auto"}
                        >
                          <Box
                            component={"img"}
                            sx={{
                              position: "absolute",
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              color: "transparent",
                              height: "100%",
                              width: "100%",
                              display: "block",
                              verticalAlign: "middle",
                              objectFit: "cover",
                              borderTopLeftRadius: "10px",
                              borderBottomLeftRadius: "10px",
                            }}
                            src={data?.profileImageUrl}
                          />
                        </Box>
                        <Box
                          sx={{
                            minHeight: {
                              md: "310px",
                            },
                            backgroundColor: "rgb(255 255 255)",
                          }}
                          display={"flex"}
                          justifyContent={"center"}
                          flexDirection={"column"}
                          flexGrow={1}
                          maxWidth={"640px"}
                        >
                          <Box
                            sx={{
                              scrollbarWidth: "none",
                              pr: {
                                md: "55px",
                                xs: "20px",
                              },
                              pl: {
                                md: "60px",
                                xs: "20px",
                              },
                              py: {
                                md: "0px",
                              },
                              pt: {
                                xs: "20px",
                                md: "0px",
                              },
                              pb: {
                                xs: "25px",
                                md: "0px",
                              },
                              overflow: {
                                md: "scroll",
                              },
                              maxHeight: {
                                md: "125px",
                              },
                              mt: {
                                md: "40px",
                              },
                              mb: {
                                md: "20px",
                              },
                            }}
                          >
                            <Heading
                              variant="h4"
                              sx={{
                                fontWeight: 700,
                                fontSize: {
                                  md: "24px",
                                  sm: "20px",
                                  xs: "16px",
                                },
                                lineHeight: {
                                  sm: "32px",
                                  xs: "24px",
                                },
                              }}
                            >
                              {data?.quotes}
                            </Heading>
                          </Box>
                          <Box
                            sx={{
                              pr: { md: "55px", xs: "20px" },
                              pl: { md: "60px", xs: "20px" },
                              py: {
                                md: "0px",
                              },
                              pt: {
                                xs: "20px",
                                md: "0px",
                              },
                              pb: {
                                xs: "25px",
                                md: "0px",
                              },
                              minHeight: {
                                md: "120px",
                              },
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              component={"span"}
                              sx={{
                                height: "2px",
                                width: "100%",
                                top: "-20px",
                                position: "relative",
                                borderRadius: "5px",
                                backgroundColor: "rgb(247 247 247)",
                              }}
                            ></Box>
                            <Box
                              component={"p"}
                              sx={{
                                m: 0,
                                lineHeight: { sm: "33px", xs: "11px" },
                                fontSize: {
                                  sm: "20px",
                                  xs: "14px",
                                },
                                fontWeight: "700",
                                color: "rgb(2 10 25)",
                                textAlign: {
                                  md: "left",
                                  xs: "center",
                                },
                                width: "100%",
                              }}
                            >
                              {data?.name}
                            </Box>
                            {data?.desination && (
                              <Box
                                component={"small"}
                                ml={"unset"}
                                sx={{
                                  lineHeight: { sm: "18px", xs: "16px" },
                                  fontSize: {
                                    sm: "14px",
                                    xs: "12px",
                                  },
                                  mr: {
                                    sm: "0px",
                                    md: "auto",
                                  },
                                  fontWeight: "400",
                                  color: "rgb(2 10 25)",
                                  maxWidth: "294px",
                                  width: "100%",
                                  textAlign: {
                                    md: "left",
                                    xs: "center",
                                  },
                                  opacity: "0.7",
                                }}
                              >
                                Technology Coordinator
                              </Box>
                            )}

                            <Box
                              component={"small"}
                              ml={"unset"}
                              sx={{
                                lineHeight: { sm: "18px", xs: "16px" },
                                fontSize: {
                                  sm: "14px",
                                  xs: "12px",
                                },
                                mr: {
                                  sm: "0px",
                                  md: "auto",
                                },
                                fontWeight: "400",
                                color: "rgb(2 10 25)",
                                maxWidth: "294px",
                                width: "100%",
                                textAlign: {
                                  md: "left",
                                  xs: "center",
                                },
                                opacity: "0.7",
                              }}
                            >
                              {data?.companyName}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Slider>
              <Box
                position={"absolute"}
                bottom={"-80px"}
                gap={"12px"}
                sx={{
                  display: {
                    mdlg: "none",
                    xs: "flex",
                  },
                  left: {
                    md: "50%",
                    xs: "30%",
                  },
                }}
              >
                <Box
                  component={"button"}
                  width={"56px"}
                  height={"56px"}
                  bgcolor={"rgb(255 255 255)"}
                  borderRadius={"12px"}
                  lineHeight={"0"}
                  border={"none"}
                  sx={{
                    cursor: status?.isFirst ? "not-allowed" : "pointer",

                    transform: {
                      mdlg: "translateY(50%)",
                    },
                  }}
                  onClick={() => {
                    if (!status?.isFirst) {
                      sliderRef?.current?.slickPrev();
                    }
                  }}
                >
                  <Box
                    alt="previous arrow"
                    component={"img"}
                    src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"
                    sx={{
                      opacity: status?.isFirst ? "0.25" : "0.75",
                    }}
                  />
                </Box>
                <Box
                  component={"button"}
                  width={"56px"}
                  height={"56px"}
                  bgcolor={"rgb(255 255 255)"}
                  borderRadius={"12px"}
                  lineHeight={"0"}
                  border={"none"}
                  sx={{
                    cursor: status?.isLast ? "not-allowed" : "pointer",
                    transform: {
                      mdlg: "translateY(50%)",
                    },
                  }}
                  onClick={() => {
                    if (!status?.isLast) {
                      sliderRef?.current?.slickNext();
                    }
                  }}
                >
                  <Box
                    alt="previous arrow"
                    component={"img"}
                    src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"
                    sx={{
                      opacity: status?.isLast ? "0.25" : "0.75",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HexnodeValueCard;
function PrevArrow(props: any) {
  const { className, style, onClick, status } = props;
  return (
    <Box
      component={"button"}
      width={"56px"}
      height={"56px"}
      position={"absolute"}
      bgcolor={"rgb(255 255 255)"}
      borderRadius={"12px"}
      lineHeight={"0"}
      bottom={"50%"}
      border={"none"}
      left={"-80px"}
      sx={{
        cursor: status?.isFirst ? "not-allowed" : "pointer",

        transform: {
          mdlg: "translateY(50%)",
        },
        display: {
          mdlg: "initial",
          xs: "none",
        },
      }}
      {...(!status?.isFirst && { onClick })}
    >
      <Box
        alt="previous arrow"
        component={"img"}
        src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"
        sx={{
          opacity: status?.isFirst ? "0.25" : "0.75",
        }}
      />
    </Box>
  );
}

function NextArrow(props: any) {
  const { className, style, onClick, status } = props;
  return (
    <Box
      component={"button"}
      width={"56px"}
      height={"56px"}
      position={"absolute"}
      bgcolor={"rgb(255 255 255)"}
      borderRadius={"12px"}
      lineHeight={"0"}
      right={"-80px"}
      bottom={"50%"}
      border={"none"}
      sx={{
        cursor: status?.isLast ? "not-allowed" : "pointer",
        transform: {
          mdlg: "translateY(50%)",
        },
        display: {
          mdlg: "initial",
          xs: "none",
        },
      }}
      {...(!status?.isLast && { onClick })}
    >
      <Box
        alt="previous arrow"
        component={"img"}
        src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"
        sx={{
          opacity: status?.isLast ? "0.25" : "0.75",
        }}
      />
    </Box>
  );
}
