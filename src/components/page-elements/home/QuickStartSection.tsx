import { Box, Button, Stack } from "@mui/material";

import Input from "../../ui/input/Input";
import Container from "../../ui/container/Container";
import Heading from "../../ui/heading/Heading";

function QuickStartSection() {
  return (
    <Box
      bgcolor={"rgb(2 10 25)"}
      component={"section"}
      sx={{
        pb: { xs: "30px" },
        pt: {
          lg: " 120px",
          xs: "90px",
        },
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
          <Heading
            variant="h1"
            sx={{
              maxWidth: { lg: "498px", sm: "550px", xs: "100%" },
              color: (theme) => theme.hexnode.colors.textLight,
              textAlign: {
                xs: "center",
                sm: "inherit",
              },
            }}
            textAlign={"center"}
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
              <Input placeholder="Your Work Email" />
            </Box>

            <Button
              variant="contained"
              color="error"
              sx={{ maxWidth: { sm: "210px", xs: "340px" } }}
              fullWidth
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
