import { Container } from "@mui/system";
import React from "react";
import cls from "./topNoticeOne.module.scss"


const TopNoticeOne = () => {
    const [close, setClose] = React.useState(false);
    const handleClick = ()=> {
        setClose(current => !current)
    }
    return (
        <div className={cls.topNotice} style={{display : close ? 'none' : 'block'}}>
            <Container maxWidth="xl" className={cls.container}>
                <h5>Get Up to <b>40% OFF</b> New-Season Styles</h5>
                <a href="demo1-shop.html" className={cls.category}>MEN</a>
                <a href="demo1-shop.html" className={cls.category}>WOMEN</a>
                <small>* Limited time only.</small>
                <button title="Close (Esc)" onClick={handleClick} type="button">×</button>
            </Container>
        </div>
    )
}

export default TopNoticeOne;