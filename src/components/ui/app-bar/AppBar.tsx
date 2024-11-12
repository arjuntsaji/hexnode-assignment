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
  activeMdTopBar?: {
    scrollStart: boolean;
    active: boolean;
    downward: boolean;
  };
}

const drawerMaxLgWidth = "50vw";
const drawerMaxUnderSM = "100vw";

export default function AppBar(props: Props) {
  const { window, activeMdTopBar } = props;
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
        role="presentation"
      >
        <Box position={"absolute"} top={"26px"} right={"30px"}>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: theme.hexnode.colors.dividerBgColor,
        }}
        role="separator"
      />
      <Stack px={"30px"} pt={"30px"} pb={"20px"} gap={"20px"}>
        <Button
          variant="contained"
          color="error"
          aria-label="Start 14 day free trial"
        >
          14 DAY FREE TRIAL
        </Button>
        <Box
          role="link"
          component={"a"}
          tabIndex={0}
          aria-label="Login"
          href="#login"
          sx={{
            cursor: "pointer",
            display: "block",
            fontSize: "16px",
            lineHeight: "24px",
            whiteSpace: "nowrap",
            padding: "10px 30px",
            minHeight: "48px",
            borderRadius: "3px",
            textAlign: "center",
            backgroundColor: "#fff",
            color: "#020a19",
            fontWeight: "500",
          }}
        >
          Login
        </Box>
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
            <Box>
              <Button
                variant="contained"
                color="error"
                aria-label="Start 14 day free trial"
                sx={{
                  mr: "50px",
                  display: {
                    xs: "none",
                    sm: "initial",
                    lg: "none",
                  },
                  transition:
                    "opacity .3s ease-in-out .1s, transform .3s ease-in-out",
                  zIndex: activeMdTopBar?.active ? "2000" : "1",
                  visibility: activeMdTopBar?.active ? "visible" : "hidden",
                  opacity: activeMdTopBar?.active ? 1 : 0,
                }}
              >
                14 DAY FREE TRIAL
              </Button>
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
      <Box
        sx={{
          transform: `translateY(${
            activeMdTopBar?.active && activeMdTopBar?.downward ? "-67" : "-1"
          }px)`,
          zIndex: activeMdTopBar?.active && !mobileOpen ? "2000" : "1",
          visibility:
            activeMdTopBar?.active && !mobileOpen ? "visible" : "hidden",
          opacity: activeMdTopBar?.active && !mobileOpen ? 1 : 0,
          transition: {
            sm: "opacity .3s ease-in-out .05s, transform .3s ease-in-out",
            xs: "opacity .3s ease-in-out .1s, transform .3s ease-in-out",
          },
          backgroundColor: (theme) => theme.hexnode.colors.textLight,
          borderBottom: "1px solid rgb(219 217 210)",
          width: "100%",
          position: "fixed",
          top: "67px",
          left: 0,
          display: {
            xs: "initial",
            sm: "none",
          },
        }}
      >
        <Box mx={"auto"} textAlign={"right"} py={"13px"} width={"88%"}>
          <Button
            variant="contained"
            color="error"
            aria-label="Start 14 day free trial"
          >
            14 DAY FREE TRIAL
          </Button>
        </Box>
      </Box>
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
