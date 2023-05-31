import React from "react";
// MATERIAL STUFF
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerNine.module.scss";

const FooterNine = ({bgColor}) => {
  return (
    <footer style={{backgroundColor: bgColor}}>

      <Container maxWidth="xl">
        <Box component='footer' className={[cls.footer, cls.bgDark].join(' ')}>
          <FooterMiddle />
          <Container maxWidth="xl">

            <FooterBottom />
          </Container>
        </Box>
      </Container>
    </footer>
  );
};

export default FooterNine;
