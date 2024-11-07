import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import React from "react";
import Input from "../../ui/input/Input";
import Container from "../../ui/container/Container";

function QuickStartSection() {
  return (
    <Box
      bgcolor={"rgb(2 10 25)"}
      component={"section"}
      sx={{
        pb: { lg: "0", xs: "30px" },
      }}
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
          <Typography
            variant="h1"
            sx={{
              maxWidth: { lg: "498px", sm: "550px", xs: "100%" },
              color: (theme) => theme.hexnode.colors.textLight,
            }}
          >
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </Typography>
          <Box
            display={"flex"}
            sx={{
              gap: { sm: "8px", xs: 0 },
            }}
          >
            <Box width={"100%"} sx={{ maxWidth: { sm: "280px", xs: "340px" } }}>
              <Input />
            </Box>

            <Button
              variant="contained"
              color="error"
              sx={{ maxWidth: { sm: "210px", xs: "340px" } }}
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
            alt="hexnode"
            src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=640&q=90"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default QuickStartSection;
