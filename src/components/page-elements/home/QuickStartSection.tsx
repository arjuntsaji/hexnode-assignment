import { Box, Button, Stack } from "@mui/material";

import Input from "../../ui/input/Input";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";
import { useState } from "react";

function QuickStartSection() {
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    console.log(email, "email");
  };
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
          >
            <Box width={"100%"} sx={{ maxWidth: { sm: "280px", xs: "340px" } }}>
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
