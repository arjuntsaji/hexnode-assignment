import * as React from "react";
import MUIAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppNameIcon, CloseIcon, MenuIcon } from "../icons";
import { Stack, useScrollTrigger, useTheme } from "@mui/material";
import Footer from "../footer/Footer";

interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}

const drawerMaxLgWidth = "50vw";
const drawerMaxUnderSM = "100vw";

export default function AppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        display={"flex"}
        justifyContent={"end"}
        py={theme.hexnode.spacing.l}
        px={"30px"}
        position={"relative"}
      >
        <Box position={"absolute"} top={"26px"} right={"30px"}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: theme.hexnode.colors.dividerBgColor,
        }}
      />
      <Stack px={"30px"} pt={"30px"} pb={"20px"} gap={"20px"}>
        <Button variant="contained" color="error">
          14 DAY FREE TRIAL
        </Button>
        <Box>Login</Box>
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Stack>
      <MUIAppBar
        component="nav"
        sx={{
          backgroundColor: trigger
            ? theme.hexnode.colors.bodyBgColor
            : theme.hexnode.colors.headerBgColor,
          display: "flex",
          alignItems: "center",
          paddingTop: "7px",
          paddingBottom: "2px",
          boxShadow: "none",
          borderBottom: trigger ? "1px solid #dbd9d2" : "none",
          "&:hover": {
            backgroundColor: {
              lg: theme.hexnode.colors.bodyBgColor,
            },
            transition: {
              lg: "all 0.3s linear",
            },
            "& .navLogo": {
              fill: {
                lg: "#020a19 !important",
              },
            },
          },
        }}
      >
        <Toolbar
          sx={{
            width: "88%",
            maxWidth: "1300px",
            minHeight: {
              xs: "auto",
            },
            py: theme.hexnode.spacing.xxs,
            px: {
              xs: 0,
            },

            transition: "all 0.3s linear",
            mb: { lg: trigger ? "5px" : "0px" },
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            sx={{ display: { xs: "flex", lg: "none" } }}
          >
            <Box
              component="a"
              sx={{
                flexGrow: 1,
                display: { lg: "none" },
                width: "50px",
              }}
              display={"flex"}
            >
              <AppNameIcon color={trigger ? "#020a19" : "#fff"} />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { lg: "none" },
              }}
            >
              <MenuIcon
                color={trigger ? "#020a19" : theme.hexnode.colors.bodyBgColor}
              />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
              width: "50px",
              mt: "5px",
              mb: {
                lg: "auto",
              },
            }}
          >
            <AppNameIcon color={trigger ? "#020a19" : "#fff"} />
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Button
              variant="contained"
              color="error"
              sx={{
                fontSize: "15px",
                lineHeight: "24px",
                fontFamily: "inherit",
              }}
            >
              14 DAY FREE TRIAL
            </Button>
          </Box>
        </Toolbar>
      </MUIAppBar>
      <nav>
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              maxWidth: { sm: drawerMaxUnderSM, md: drawerMaxLgWidth },
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ px: 0 }}>
        {props?.children}
      </Box>
      <Footer />
    </Stack>
  );
}
