import React from "react";
// MATERIAL STUFF
import Box from "@mui/material/Box";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerTwentyOne.module.scss";

const FooterTwentyOne = () => {
  return (
    <Box component='footer' className={cls.footer}>
      <FooterMiddle />
      <FooterBottom />
    </Box>
  );
};

export default FooterTwentyOne;
