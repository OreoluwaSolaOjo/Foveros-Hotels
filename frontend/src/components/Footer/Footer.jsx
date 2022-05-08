import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import GoaLabsLogoWhite from "../../images/GoaLabsLogoWhite.png";
import FacebookIcon from "../../images/facebook_icon.svg";
import TwitterIcon from "../../images/twitter_icon.svg";
import InstagramIcon from "../../images/instagram_icon.svg";
import LinkedInIcon from "../../images/linkedin_icon.svg";
import MapPin from "../../images/location.png";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import { Typography } from "@mui/material";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_background}>
                <div className="body_container">
                    <div className={classes.footer_grid}>
                        <div className={classes.goalabs_summary}>
                            <div >
                                <Typography variant="h4" style={{ color: 'white' }}> Foveros Hotels</Typography>
                            </div>
                            <p>
                                At Foveros Hotels, we are working to give you the best experience in luxury
                                and care all around major cities in africa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam neque repudiandae reiciendis voluptatem nesciunt porro magnam libero aut consectetur!
                            </p>
                        </div>

                        <div className={classes.about_us}>
                            <h3>About Us</h3>
                            <Typography variant="h6" color={'secondary.main'}>Who We Are</Typography>
                            <Typography variant="h6" color={'secondary.main'}>Meet our team</Typography>
                            <Typography variant="h6" color={'secondary.main'}>Our Goals</Typography>
                            <Typography variant="h6" color={'secondary.main'}>What's Next</Typography>
                            <Typography variant="h6" component="h6" color={'secondary.main'}> FAQ</Typography>
                        </div>

                        <div className={classes.policy}>
                            <h3>Policy</h3>
                            <Typography variant="h6" color={'secondary.main'}>Terms of Service</Typography>
                            <Typography variant="h6" color={'secondary.main'}>Date Usage</Typography>
                            <Typography variant="h6" color={'secondary.main'}> Privacy Policy</Typography>





                        </div>

                        <div className={classes.get_in_touch}>
                            <h3>Get In Touch</h3>

                            <img src={MapPin} alt="" /> Lagos, Nigeria


                            <img src={Phone} alt="" />
                            +234 810 0000 0000


                            <img src={Email} alt="" />
                            foveroshotels@gmail.com

                        </div>
                    </div>

                    <div className={classes.follow}>
                        <h3>Follow Us On Social Media</h3>
                        <div className={classes.follow_icons}>

                            <img src={FacebookIcon} alt="facebook icon" />


                            <img src={TwitterIcon} alt="twitter icon" />

                            <img src={InstagramIcon} alt="instagram icon" />


                            <img src={LinkedInIcon} alt="linkedin icon" />

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
