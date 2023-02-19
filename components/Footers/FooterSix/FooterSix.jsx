import React from "react";
// MATERIAL STUFF
import cls from "./footerSix.module.scss";
import { Box } from "@mui/material";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";

const FooterSix = () => {
  return (
    <Box component='footer' className={cls.footer}>
      <Container className={cls.container} maxWidth="xxl">
        <FooterTop />
        <FooterMiddle />
      </Container>

    </Box>
  );
};

export default FooterSix;
