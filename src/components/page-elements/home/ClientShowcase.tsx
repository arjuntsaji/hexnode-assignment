import { Box } from "@mui/material";
import React from "react";
import Container from "../../ui/container/Container";
import Slider from "react-slick";

const ClientList = [
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
];
function ClientShowcase() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1500,
    cssEase: "linear",
    variableWidth: true,
  };
  return (
    <Box
      sx={{
        pb: {
          mdlg: "120px",
          xs: "60px",
        },
        pt: {
          md: "20px",
          xs: "10px",
        },
      }}
      bgcolor={"rgb(247 247 247)"}
      component={"section"}
    >
      <Container>
        <Slider {...settings} arrows={false}>
          {ClientList.map((client, index) => {
            return (
              <Box
                component={"figure"}
                m={"0"}
                sx={{
                  maxWidth: {
                    sm: "150px",
                    xs: "130px",
                    width: "100%",
                  },
                }}
              >
                <Box component={"img"} src={client} />
              </Box>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
}

export default ClientShowcase;
