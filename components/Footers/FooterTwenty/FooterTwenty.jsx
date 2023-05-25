import React from "react";
// MATERIAL STUFF
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerTwenty.module.scss";

const FooterTwenty = () => {
  return (
    <Box component='footer' className={cls.footer}>
      <FooterMiddle />
      <Container maxWidth="xl">
        <FooterBottom />
      </Container>
    </Box>
  );
};

export default FooterTwenty;
