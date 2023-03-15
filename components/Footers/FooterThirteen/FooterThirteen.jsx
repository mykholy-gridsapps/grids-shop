import React from "react";
// MATERIAL STUFF
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerThirteen.module.scss";
const FooterThirteen = () => {
  return (
    <Box component='footer' className={[cls.footer, cls.positionRelative].join(' ')}>
      <FooterMiddle />
      <Container maxWidth="xl">
        <FooterBottom></FooterBottom>
      </Container>

    </Box>
  );
};

export default FooterThirteen;
