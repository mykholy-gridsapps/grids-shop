// MATERIAL STUFF
import { Box } from "@mui/material";
import FooterMiddle from "./FooterMiddle";
import { Container } from "@mui/system";
import FooterBottom from "./FooterBottom";

import cls from "./footerNineteen.module.scss";

const FooterNineteen = () => {
  return (
    <Box component='footer' className={`${cls.footer} ${cls.positionRelative}`}>
      <FooterMiddle />
      <Container maxWidth="xl">
        <FooterBottom></FooterBottom>
      </Container>
    </Box>
  );
};

export default FooterNineteen;