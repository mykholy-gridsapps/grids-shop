
import { Box, Grid } from "@mui/material"
import { Container } from "@mui/system"
import cls from "./topHeader.module.scss"
import LangSwitch from '../switches/LangSwitch/LangSwitch'
import CurrencySwitch from "../switches/CurrencySwitch/CurrencySwitch"
import DropDownLinks from "../UIs/DropDownLinks/DropDownLinks"

const TopHeader = () => {
    return (
        <div className={[cls.headerTop, cls.bgPrimary, ' text-uppercase'].join(' ')}>
            <Container maxWidth="xl">
                <Grid container>
                    <Box className={cls.headerLeft}>
                        <Box >
                            <LangSwitch />
                        </Box>
                        <Box sx={{ ml: 1, pl: 1 }}>
                            <CurrencySwitch />
                        </Box>
                    </Box>
                    <Box className={cls.headerRight} sx={{ ml: 'auto' }}>
                        <div className={[cls.headerRight, cls.headerDropdowns].join(' ')}>
                            <Box component="p" className={[cls.topMessage]} sx={{ mb:0 , display: {xs: 'none', sm: 'block'} }} >Welcome To Porto!</Box>
                            
                                    <Box component="ul" sx={{ display: {lg: 'block', xs:'none'}}}>
                                        <li><a href="dashboard.html">My Account</a></li>
                                        <li><a href="demo1-contact.html">Contact Us</a></li>
                                        <li><a href="wishlist.html">My Wishlist</a></li>
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="#" class="login-link">Log In</a></li>
                                    </Box>

                                    <Box sx={{ display: {lg: 'none', xs:'block'}}}>
                                        <DropDownLinks  />
                                    </Box>
                               
                            <span className={cls.separator}></span>

                            <div class="social-icons">
                                <Box component="a" href="#" className={[cls.socialIcon, cls.socialFacebook, "fa-brands fa-facebook-f"].join(' ')}  target="_blank"></Box>
                                <Box component="a" href="#" className={[cls.socialIcon, cls.socialTwitter, "fa-brands fa-twitter icon-twitter"].join(' ')} xs={{ ml: 0}} target="_blank"></Box>
                                <Box component="a" href="#" className={[cls.socialIcon, cls.socialInstagram, "fa-brands fa-instagram icon-instagram ml-0"].join(' ')} xs={{ ml: 0}} target="_blank"></Box>
                            </div>
                        </div>
                    </Box>
            </Grid>
        </Container>
        </div >
    )
}

export default TopHeader