import { Box } from "@mui/material";
import React from "react";

const FooterItems = ["Terms of Use", "Privacy", "Cookies"];
function Footer() {
  return (
    <footer>
      <Box sx={{ padding: { xs: "30px 0", sm: "20px 0" } }}>
        <Box maxWidth={"1300px"} width={"88%"} mx={"auto"}>
          <Box
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              justifyContent: {
                xs: "inherit",
                sm: "space-between",
              },
              alignItems: {
                xs: "center",
                sm: "inherit",
              },
              gap: {
                xs: "20px",
                sm: "0px",
              },
            }}
          >
            <Box display={"flex"}>
              {FooterItems?.map((label, index) => (
                <>
                  <Box
                    key={index}
                    component={"a"}
                    lineHeight={"24px"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"rgb(85 101 117)"}
                    sx={{
                      cursor: "pointer",
                      ...(FooterItems?.length - 1 !== index && {
                        "::after": {
                          content: '"-"',
                          fontSize: "14px",
                          padding: "0px 5px",
                        },
                      }),
                    }}
                  >
                    {label}
                  </Box>
                </>
              ))}
            </Box>
            <Box
              component={"a"}
              lineHeight={"24px"}
              fontWeight={"500"}
              fontSize={"12px"}
              color={"rgb(85 101 117)"}
            >
              Copyright © 2024 Mitsogo Inc. All Rights Reserved.
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
