import React from "react";
// MATERIAL STUFF
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerTwentyThree.module.scss";

const FooterTwentyThree = () => {
  return (
    <footer className={cls.footer}>
      <Container maxWidth="xl">
        <FooterMiddle />
      </Container>
      <Container maxWidth="xl">
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default FooterTwentyThree;
