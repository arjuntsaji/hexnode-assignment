import { Box, Button } from "@mui/material";
import Container from "../../ui/container/Container";
import Input from "../../ui/input/Input";

function FreeTrialSection() {
  return (
    <Box
      component={"section"}
      sx={{
        py: {
          md: "0",
          xs: "50px",
        },
        height: {
          md: "330px",
        },
      }}
      bgcolor={(theme) => theme.hexnode.colors.headerBgColor}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container>
        <Box
          textAlign={"center"}
          maxWidth={"1000px"}
          width={"100%"}
          mx={"auto"}
        >
          <Box
            component={"h3"}
            sx={{
              m: "auto",
              fontWeight: 700,
              fontSize: { xs: "30px", md: "38px" },
              lineHeight: { xs: "38px", md: 1.3 },
              mb: "20px",
              textAlign: "center",
              color: (theme) => theme.hexnode.colors.textLight,
            }}
          >
            Sign up and try Hexnode free for 14 days!
          </Box>
          <Box maxWidth={"580PX"} mx={"auto"}>
            <Box maxWidth={"527PX"} mx={"auto"}>
              <Box component={"form"} p={0} m={0}>
                <Box
                  display={"flex"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: {
                      md: "row",
                      xs: "column",
                    },
                  }}
                >
                  <Box
                    width={"100%"}
                    sx={{ maxWidth: "325px", mr: { md: "8px" } }}
                  >
                    <Input placeholder="Your Work Email" />
                  </Box>

                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      maxWidth: { md: "195px", xs: "325px", width: "100%" },
                      mt: { md: "0", xs: "15px" },
                      height: "53px",
                    }}
                  >
                    GET STARTED
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box pt={"10px"} position={"relative"}>
              <Box
                component={"p"}
                m={0}
                p={0}
                color={"rgb(85 101 117)"}
                lineHeight={"24px"}
                fontWeight={"500"}
                textAlign={"center"}
                pt={"10px"}
              >
                No credit cards required.
                <Box
                  component={"a"}
                  display={"inline-flex"}
                  mt={"10px"}
                  sx={{
                    "&:hover .svg-element": {
                      ml: "8px",
                    },
                  }}
                  pl={"4px"}
                >
                  <Box
                    component={"span"}
                    sx={{
                      color: "rgb(221 7 53)",
                      lineHeight: "24px",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Request a demo
                  </Box>
                  <Box
                    ml={"6px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      transition: "margin 0.5s ease-out",
                    }}
                    className="svg-element"
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FreeTrialSection;
