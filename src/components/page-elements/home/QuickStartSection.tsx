import { Box, Button, keyframes, Stack } from "@mui/material";

import Input from "../../ui/input/Input";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";
import { useCallback, useState } from "react";
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

function QuickStartSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onSubmit = useCallback(() => {
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
  }, [email]);
  return (
    <Box
      bgcolor={(theme) => theme.hexnode.colors.headerBgColor}
      component={"section"}
      sx={{
        pb: { xs: "30px" },
        pt: {
          lg: " 120px",
          xs: "90px",
        },
      }}
      aria-labelledby="quick-start-section"
    >
      <Container
        display={"flex"}
        sx={{
          flexDirection: {
            xs: "column-reverse",
            lg: "row",
          },
          justifyContent: {
            xs: "inherit",
            lg: "space-between",
          },
          alignItems: {
            xs: "center",
            lg: "inherit",
          },
        }}
      >
        <Stack
          justifyContent={"center"}
          sx={{
            gap: { md: "40px", xs: "20px" },
          }}
        >
          <Heading
            variant="h1"
            sx={{
              maxWidth: { lg: "498px", sm: "550px", xs: "100%" },
              color: (theme) => theme.hexnode.colors.textLight,
              textAlign: {
                xs: "center",
                sm: "inherit",
              },
              lineHeight: {
                mdlg: "53px",
                xs: "44px",
              },
              fontSize: {
                mdlg: "42px",
                xs: "34px",
              },
              fontWeight: "700",
            }}
            textAlign={"center"}
            aria-labelledby="quick-start-heading"
          >
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </Heading>
          <Box position={"relative"}>
            <Box
              display={"flex"}
              sx={{
                gap: { sm: "8px", xs: "20px" },
                flexDirection: {
                  sm: "row",
                  xs: "column",
                },
                alignItems: {
                  xs: "center",
                  sm: "initial",
                },
                // alignItems: "center",
              }}
              component={"form"}
            >
              <Box
                width={"100%"}
                sx={{ maxWidth: { sm: "280px", xs: "340px" } }}
              >
                <Input
                  placeholder="Your Work Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Button
                variant="contained"
                color="error"
                sx={{ maxWidth: { sm: "210px", xs: "340px" } }}
                fullWidth
                onClick={onSubmit}
                aria-label="Get Started Now"
              >
                GET STARTED NOW!
              </Button>
            </Box>
            <Box
              sx={{
                pt: "20px",
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
                left={"40%"}
              >
                {error}
              </Box>
            </Box>
          </Box>
        </Stack>
        <Box
          sx={{
            maxWidth: { md: "597px", xs: "100%" },
          }}
        >
          <Box
            component={"img"}
            sx={{
              maxWidth: "100%",
            }}
            alt="Hexnode kiosk setup interface"
            src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=640&q=90"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default QuickStartSection;
