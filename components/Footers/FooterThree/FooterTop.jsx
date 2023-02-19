import { listSubheaderClasses } from "@mui/material";
import React from "react";
import cls from './footerTop.module.scss'


const FooterTop = () => {
    return (
        <div className={cls.footerTop}>
            <div className={cls.footerLeft}>
                <div className={cls.widgetNewsletterInfo}>
                    <h5 className={cls.widgetNewsletterTitle}>subscribe newsletter</h5>
                    <p className={cls.widgetNewsletterContent}>Get all the latest information on Events, Sales
                        and Offers.</p>
                </div>
                <form action="#">
                    <div className={cls.footerSubmitWrapper}>
                        <input type="email" className={cls.formControl} placeholder="Email address..." size="40" required />
                        <button type="submit" className={cls.btn}>Subscribe</button>
                    </div>
                </form>
            </div>
            <div className={cls.footerRight}>
                <div className={cls.socialIcons}>
                    <a href="#" className={[cls.socialIcon, cls.socialFacebook].join(' ')} target="_blank"></a>
                    <a href="#" className={[cls.socialIcon, cls.socialTwitter].join(' ')} target="_blank"></a>
                    <a href="#" className={[cls.socialIcon, cls.socialInstagram].join(' ')} target="_blank"></a>
                </div>
            </div>
        </div>
    )
}

export default FooterTop;