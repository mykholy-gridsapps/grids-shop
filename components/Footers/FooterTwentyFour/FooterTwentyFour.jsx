import React from "react";
// MATERIAL STUFF
import Box from "@mui/material/Box";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerTwentyFour.module.scss";

const FooterTwentyFour = () => {
  return (
    <Box component='footer' className={cls.footer}>
      <Container maxWidth="xxl">
        <FooterMiddle />
        <FooterBottom></FooterBottom>
      </Container>

    </Box>
  );
};

export default FooterTwentyFour;
