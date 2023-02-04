import FooterTen from "../Footers/FooterTen/FooterTen";
import FooterNine from "../Footers/FooterNine/FooterNine";
import FooterEight from "../Footers/FooterEight/FooterEight";
import FooterSeven from "../Footers/FooterSeven/FooterSeven";
import FooterSix from "../Footers/FooterSix/FooterSix";
import FooterFive from "../Footers/FooterFive/FooterFive";
import FooterFour from "../Footers/FooterFour/FooterFour";
import FooterThree from "../Footers/FooterThree/FooterThree";
import FooterTwo from "../Footers/FooterTwo/FooterTwo";
import FooterOne from "../Footers/FooterOne/FooterOne";

import HeaderOne from "../Headers/HeaderOne/HeaderOne";
import HeaderTwo from "../Headers/HeaderTwo/HeaderTwo";
import HeaderThree from "../Headers/HeaderThree/HeaderThree";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderOne />
      {/* <HeaderTwo /> */}
      {/* <HeaderThree /> */}
      {children}
      <FooterTen />
    </>
  );
};

export default MainLayout;
