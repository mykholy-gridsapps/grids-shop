import React from "react";
// MATERIAL STUFF
import Box from "@mui/material/Box";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerSixteen.module.scss";

const FooterSixteen = () => {
  return (
    <Box component='footer' className={cls.footer}>
      <FooterMiddle />
      <Container maxWidth="xl">
        <FooterBottom></FooterBottom>
      </Container>

    </Box>
  );
};

export default FooterSixteen;
