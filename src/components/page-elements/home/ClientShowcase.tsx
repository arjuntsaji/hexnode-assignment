import { Box } from "@mui/material";
import React from "react";
import Container from "../../ui/container/Container";
import Slider from "react-slick";

const ClientList = [
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
    alt: "Polaris logo",
  },
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    alt: "Gorillas logo",
  },
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
    alt: "Wolt logo",
  },
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    alt: "Marriott International logo",
  },
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    alt: "Merck logo",
  },
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
    alt: "Costco logo",
  },
  {
    url: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    alt: "SAIC logo",
  },
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
      bgcolor={(theme) => theme.hexnode.colors.bodyLightGrey}
      component={"section"}
    >
      <Container>
        <Slider {...settings} arrows={false} aria-label="Client logos carousel">
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
                <Box
                  component={"img"}
                  src={client.url}
                  alt={`Logo of client ${client.alt}`}
                />
              </Box>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
}

export default React.memo(ClientShowcase);
