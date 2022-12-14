import { Grid } from "@mui/material";
import React from "react";
import cls from './footerTop.module.scss'


const FooterTop = () => {
    return (
        <div className={cls.footerTop}>
            <div className={[cls.widget, cls.widgetNewsletter].join(' ')}>
                <Grid container spacing={1}>
                    <Grid item md={6} lg={4} sm={12} xs={9}>
                        <h4 className={cls.widgetTitle}>subscribe newsletter</h4>
                        <p className={cls.widgetNewsletterContent}>Get all the latest information on Events, Sales and Offers. Sign up for newsletter today. </p>
                    </Grid>

                    <Grid item md={6} lg={6} sm={7} alignItems='center' display='flex'>

                        <form action="#">
                                <input type="email" className={cls.formControl} placeholder="Email address..." size="40" required />
                                <button type="submit" className={cls.btn}>Subscribe</button>
                        </form>
                    </Grid>
                    <Grid item md={12} lg={2} sm={5} alignItems='center' display='flex'>
                        <div className={cls.socialIcons}>
                            <a href="#" className={[cls.socialIcon, cls.socialFacebook].join(' ')} target="_blank"></a>
                            <a href="#" className={[cls.socialIcon, cls.socialTwitter].join(' ')} target="_blank"></a>
                            <a href="#" className={[cls.socialIcon, cls.socialInstagram].join(' ')} target="_blank"></a>
                        </div>
                    </Grid>

                </Grid>


            </div>
        </div>
    )
}

export default FooterTop;