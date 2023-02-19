/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import lightVars from "./../../../theme/lightVars/lightVars";
import darkVars from "./../../../theme/darkVars/darkVars";

import Cookies from "universal-cookie";
const cookie = new Cookies();

import cls from "./modeSwitch.module.scss";

const ModeSwitch = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [mode, setMode] = useState(
    cookie.get("grids-apps-shop-mode") || "light"
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setMode(cookie.get("grids-apps-shop-mode"));
  }, [mode]);

  const switchMode = () => {
    if (cookie.get("grids-apps-shop-mode") === "light") {
      cookie.set("grids-apps-shop-mode", "dark", { path: "/" });
      darkVars();
      setMode("dark");
    } else {
      cookie.set("grids-apps-shop-mode", "light", { path: "/" });
      lightVars();
      setMode("light");
    }
  };

  if (!hasMounted) return null;

  return (
    <div className={cls.modeSwitch} onClick={switchMode}>
      {cookie.get("grids-apps-shop-mode") &&
      cookie.get("grids-apps-shop-mode") === "light" ? (
        <i className="fa-light fa-moon"></i>
      ) : (
        <i className="fa-light fa-sun"></i>
      )}
    </div>
  );
};

export default ModeSwitch;
