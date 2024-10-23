import { Fragment } from 'react';
import { Button, Grid2, IconButton, TextField } from '@mui/material';
import payments from '../../source-images/payments.png';
import { ImFacebook2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import './footer.css'
import Offer from './offer';


const Footer = () => {

    return (
        <Fragment>
            <Offer />
            <div className='body'>

                <Grid2 container
                    style={{ columnGap: '5%', display: "flex", justifyContent: "center" }}
                >
                    <Grid2 item xs={8} sm={8} md={8} lg={8} style={{ textAlign: 'start' }}>
                        <p className='header'>
                            Contact Us
                        </p>

                        <p className='subHeaderWithOutCap'>Hi, we are always open for cooperation and suggestions,<br />
                            contact us in one of the ways below:</p>

                        <Grid2 container style={{ columnGap: '15%' }}>
                            <Grid2 item xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'start' }}>

                                <p className='subHeader'>Phone Number</p>
                                <p className='paragraph'>08925297807</p>
                            </Grid2>

                            <Grid2 item xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'start' }}>

                                <p className='subHeader'>Email Address</p>
                                <p className='paragraph'>careers@uitouxsolutions.com</p>
                            </Grid2>
                        </Grid2>

                        <Grid2 container style={{ columnGap: '5%' }}>
                            <Grid2 item xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'start' }}>

                                <p className='subHeader'>Our Location</p>
                                <p className='paragraph'>102, Athipalayam Rd,<br />
                                    Ramakrishnapuram,<br /> Chinnavedampatti,
                                    <br />Coimbatore, Tamilnadu
                                    <br />641049</p>
                            </Grid2>

                            <Grid2 item xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'start' }}>

                                <p className='subHeader'>Working Hours</p>
                                <p className='paragraph'>Mon-Fri 10:00am - 06:00pm</p>
                            </Grid2>

                        </Grid2>

                    </Grid2>

                    <Grid2 item xs={2} sm={2} md={2} lg={2} style={{ textAlign: 'start' }}>
                        <p className='header'>
                            Information
                        </p>

                        <ol className='orderList'>
                            <li>About Us</li>
                            <br />
                            <li>Delivery Information</li>
                            <br />
                            <li>Privacy Policy</li>
                            <br />
                            <li>Brands</li>
                            <br />
                            <li>Contact Us</li>
                            <br />
                            <li>Returns</li>
                            <br />
                            <li>Site Map</li>
                        </ol>
                    </Grid2>

                    <Grid2 item xs={2} sm={2} md={2} lg={2} style={{ textAlign: 'start' }}>
                        <p className='header'>
                            My Account
                        </p>

                        <ol className='orderList'>
                            <li>Store Location</li>
                            <br />
                            <li>Order History</li>
                            <br />
                            <li>Wish List</li>
                            <br />
                            <li>Newsletter</li>
                            <br />
                            <li>Special Offers</li>
                            <br />
                            <li>Gift Certificates</li>
                            <br />
                            <li>Affiliate</li>
                        </ol>

                    </Grid2>

                    <Grid2 item xs={2} sm={2} md={2} lg={2} style={{ textAlign: 'start' }}>
                        <p className='header'>
                            Newsletter
                        </p>

                        <p className='subHeaderWithOutCap'>
                            Enter your email address below to subscribe to our newsletter<br />
                            and keep up to date with discounts and special offers.</p>

                        <Grid2 container style={{ columnGap: '1%' }}>
                            <Grid2 item xs={6} sm={6} md={6} lg={6} >
                                <TextField
                                    value='user@example.com'
                                    size='small'
                                    className='searchText'
                                >
                                </TextField>
                            </Grid2>

                            <Grid2 item xs={6} sm={6} md={6} lg={6}>
                                <Button className='button' size='medium' >
                                    Subscribe
                                </Button>
                            </Grid2>
                        </Grid2>

                        <p className='subHeaderWithOutCap'>
                            Follow us on social networks</p>

                        <IconButton>
                            <ImFacebook2 size={18} style={{ backgroundColor: 'whitesmoke', color: '#1e84dd' }} />
                        </IconButton>

                        <IconButton>
                            <AiFillTwitterCircle size={18} style={{ backgroundColor: 'whitesmoke', color: '#5dadf3' }} />
                        </IconButton>

                        <IconButton>
                            <FaYoutube size={18} style={{ backgroundColor: 'whitesmoke', color: '#e14343' }} />
                        </IconButton>
                    </Grid2>
                </Grid2>

            </div>
            <div className='secondDiv'>
                <Grid2 container sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-around" }}>
                    <Grid2 item xs={6} sm={6} md={6} lg={6} >
                        <p className='subHeaderWithOutCap' style={{ marginLeft: "-10%" }}>Powered by <span className='spanHighlight'>React / Next.js</span> - Designed by <span className='spanHighlight'>UITOUX Solutions</span></p>
                    </Grid2>
                    <Grid2 item xs={6} sm={6} md={6} lg={6}>
                        <img src={payments} alt='payment' />
                    </Grid2>
                </Grid2>
            </div>
        </Fragment>
    );
}
export default Footer;