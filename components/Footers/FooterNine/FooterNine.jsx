import React from "react";
// MATERIAL STUFF
import cls from "./FooterNine.module.scss";
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

const FooterNine = () => {
  return (
    <Container maxWidth="xl">
      <Box component='footer' className={[cls.footer, cls.bgDark].join(' ')}>
        <FooterMiddle />
        <Container maxWidth="xl">

          <FooterBottom />
        </Container>
      </Box>
    </Container>
  );
};

export default FooterNine;
