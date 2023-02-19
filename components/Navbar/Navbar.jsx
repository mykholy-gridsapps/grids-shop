import Container from "@mui/material/Container";
import Link from "next/link";
import { useRouter } from "next/router";
// COMPONENTS
import LangSwitch from "../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../switches/ModeSwitch/ModeSwitch";
// STYLES
import cls from "./navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={cls.navbar}>
      <Container className={cls.navbar__wrapper}>
        <ul className={cls.navbar__links}>
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? cls.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={router.pathname === "/cart" ? cls.active : ""}
            >
              cart
            </Link>
          </li>
        </ul>
        <div className={cls.switches}>
          <LangSwitch />
          <ModeSwitch />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
