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
import HeaderOne from "../HeaderOne/HeaderOne";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterTen />
    </>
  );
};

export default MainLayout;
