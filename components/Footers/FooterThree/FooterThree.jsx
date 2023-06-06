import React from "react";
// MATERIAL STUFF
import cls from "./footerThree.module.scss";
import { Box } from "@mui/material";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

const FooterThree = ({bgColor, color}) => {
  return (
    <Box component='footer' className={cls.footer} style={{backgroundColor: bgColor, color: color}}>
      <Container className={cls.container} maxWidth="xxl">
        <FooterTop  color={color}/>
        <FooterMiddle color={color}/>
        <FooterBottom></FooterBottom>
      </Container>

    </Box>
  );
};

export default FooterThree;
