import { Container, Grid } from "@mui/material";
import React from "react";
import CategoriesFourtySeven from "../../Categories/CategoriesFourtySeven/CategoriesFourtySevenCarousel";
import Collectio105 from "../../Collections/Collection105/Collection105";
import FeaturesEighteen from "../../Features/FeaturesEighteen/FeaturesEighteen";
import HeaderEleven from "../../Headers/HeaderSeven/HeaderSeven";
import NewsletterEight from "../../Newsletter/NewsletterSix/NewsletterSix";

import cls from "./template20.module.scss"


const Template20 = () => {
  return (
    <>
      <FeaturesEighteen />
      <HeaderEleven />
      <Container maxWidth="xl">
        <CategoriesFourtySeven />
      </Container>
      <div className={cls.collection}>
        <Container maxWidth="xl">
          <Collectio105 />
        </Container>
      </div>
      <Container maxWidth="xl">
        <NewsletterEight />
      </Container>
    </>
  );
};

export default Template20;

