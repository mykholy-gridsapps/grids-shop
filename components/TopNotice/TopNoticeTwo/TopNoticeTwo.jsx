import { Container } from "@mui/system";
import React from "react";
import cls from "./topNoticeTwo.module.scss"


const TopNoticeTwo = () => {
    const [close, setClose] = React.useState(false);
    const handleClick = () => {
        setClose(current => !current)
    }
    return (
        <div className={cls.topNotice} style={{ display: close ? 'none' : 'block' }}>
            <Container maxWidth="xl" className={cls.container}>
                <div className={cls.notifyLeft}>
                    <h5>
                        <strong>10% OFF</strong>
                    </h5>

                    <div className={cls.mainHeading}>
                        <h5>Use<b>PORTO10</b>Coupon Code</h5>
                        <h6>
                            <small>* Minimal Purchase Price</small>
                        </h6>
                    </div>
                </div>

                <div className={cls.notifyRight}>
                    <h4>
                        <b>FREE NEXT DAY DELIVERY*</b>
                    </h4>
                    <h6>
                        <small>* On Business Days - On Orders Over $25</small>
                    </h6>
                </div>
                <button title="Close (Esc)" onClick={handleClick} type="button">×</button>
            </Container>
        </div>
    )
}

export default TopNoticeTwo;