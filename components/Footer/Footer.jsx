import React from "react";
// MATERIAL STUFF
import Container from "@mui/material/Container";
// STYLES
import cls from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <Container className={cls.footer__wrapper}>
        <h5>This is footer</h5>
      </Container>
    </div>
  );
};

export default Footer;
