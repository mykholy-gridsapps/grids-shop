import React from "react";
// MATERIAL STUFF
import cls from "./footerOne.module.scss";
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

const FooterOne = ({label}) => {
  return (
    <Box component='footer' className={[cls.footer, cls.bgDark, cls.positionRelative].join(' ')}>
      <FooterMiddle label={label} />
      <Container maxWidth="xl">
        <FooterBottom></FooterBottom>
      </Container>

    </Box>
  );
};

export default FooterOne;
