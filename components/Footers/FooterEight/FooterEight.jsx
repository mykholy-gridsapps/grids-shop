import React from "react";
// MATERIAL STUFF
import cls from "./footerEight.module.scss";
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

const FooterEight = () => {
  return (
    <Box component='footer' className={[cls.footer, cls.bgDark].join(' ')}>
      <FooterMiddle />
      <Container maxWidth="xl">
        <FooterBottom></FooterBottom>
      </Container>

    </Box>
  );
};

export default FooterEight;
