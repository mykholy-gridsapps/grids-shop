import { Container } from "@mui/system";
import { i18n, useTranslation } from "next-i18next";
import React from "react";

import cls from "./topNoticeThree.module.scss"


const TopNoticeThree = () => {
    const { t, i18n } = useTranslation("common");
    const [close, setClose] = React.useState(false);
    const handleClick = () => {
        setClose(current => !current)
    }
    return (
        <section className={cls.topNotice}>
            <span className={cls.btn} title="Close (Esc)" onClick={handleClick} type="button">×</span>
            <h2>Special Offer!</h2>

            <h3>Rewarding all customers with a 15% discount.</h3>

            <p>This offer is available from 9th December to 19th December.</p>
        </section >
    )
}

export default TopNoticeThree;