import { Box, Button, keyframes } from "@mui/material";
import Container from "../../ui/container/Container";
import Input from "../../ui/input/Input";
import { useState } from "react";
import { emailPattern } from "../../../utils/common.regex";

const showErrorAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const hideErrorAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;
function FreeTrialSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onSubmit = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Please enter your work email");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (!emailPattern.test(trimmedEmail)) {
      setError("Invalid email format");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    setError("");
    console.log("Email submitted:", trimmedEmail);
  };
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
              fontSize: { xs: "30px", md: "42px" },
              lineHeight: { xs: "38px", md: 1.3 },
              mb: "20px",
              textAlign: "center",
              color: (theme) => theme.hexnode.colors.textLight,
            }}
          >
            Sign up and try Hexnode free for 14 days!
          </Box>
          <Box maxWidth={"580PX"} mx={"auto"}>
            <Box>
              <Box maxWidth={"527PX"} mx={"auto"} position={"relative"}>
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
                      <Input
                        placeholder="Your Work Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Box>

                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        maxWidth: { md: "195px", xs: "325px", width: "100%" },
                        mt: { md: "0", xs: "15px" },
                        height: "53px",
                        fontSize: "17px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        textTransform: "uppercase",
                      }}
                      aria-label="Get started button"
                      onClick={onSubmit}
                    >
                      GET STARTED
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    pt: "0px",
                    position: "relative",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      lineHeight: "24px",
                      fontWeight: "200",
                      fontSize: "14px",
                      // textAlign: "center",
                      p: 0,
                      m: 0,
                      width: "100%",
                      display: "block",
                      animation: `${
                        error ? showErrorAnimation : hideErrorAnimation
                      } 2s both`,
                    }}
                    color={(theme) => theme.hexnode.colors.textLight}
                    position={"absolute"}
                    top={0}
                    left={"0"}
                  >
                    {error}
                  </Box>
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
                  href="#request-demo"
                  aria-label="Request a demo link"
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
