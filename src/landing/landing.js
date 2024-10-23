import { Card, CardActions, CardContent, CardMedia, Chip, Divider, Grid2, Rating, Typography } from "@mui/material";
import Brand from "./brand/brand";
import Footer from "./footer/footer";
import Header from "./header/header";
import './landing.css';
import product1 from '../source-images/product-1.jpeg';
import product2 from '../source-images/product-2.jpeg';
import product3 from '../source-images/product-3.jpeg';
import product4 from '../source-images/product-4.jpeg';
import product5 from '../source-images/product-5.jpeg';
import product6 from '../source-images/product-6.jpeg';
import product7 from '../source-images/product-7.jpeg';
import product8 from '../source-images/product-8.jpeg';
import product9 from '../source-images/product-9.jpeg';
import product10 from '../source-images/product-10.jpeg';
import product11 from '../source-images/product-11.jpeg';
import product12 from '../source-images/product-12.jpeg';
import product13 from '../source-images/product-13.jpeg';
import cartIcon from '../source-images/svg/cart.svg'
import Slide from "./slide/slide";
import banner1 from "../source-images/banner1.jpeg"
import banner2 from "../source-images/banner2.jpeg"
import { useEffect, useState } from "react";
import axios from "axios";


const Landing = () => {

    const [data, setData] = useState({
        featuredProducts: [],
        topRatedProducts: [],
        specialOffers: [],
        bestSellers: []
    })

    async function fetchData() {
        try {
            let url = 'http://localhost:5000/api/home/homeData'
            const response = await axios.get(url, { withCredentials: true });
            if (response.status === 200) {
                let resultData = response?.data;
                setData(resultData);

            } else {
                setData({
                    featuredProducts: [],
                    topRatedProducts: [],
                    specialOffers: [],
                    bestSellers: []
                })
            }
        } catch (error) {
            console.log("error=", error);
            setData({
                featuredProducts: [],
                topRatedProducts: [],
                specialOffers: [],
                bestSellers: []
            })
        }

    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <Header />
            <div style={{ marginTop: "2%" }}>
                <Slide />
            </div>
            <Brand />
            <div style={{ marginLeft: "4%", marginRight: "4%", marginTop: "2%" }}>
                <Grid2 container size={12}>
                    <Grid2 size={8}>
                        <span style={{ fontSize: "15px", fontWeight: "650" }}>Feature Products</span>
                    </Grid2>
                    <Grid2 size={4} sx={{ display: "flex", justifyContent: "end", gap: 1, fontSize: "12px", fontWeight: "650", color: "#726f6f" }}>
                        <Chip label='All' style={{ borderRadius: 0, color: "white", backgroundColor: "#363636" }}></Chip>
                        <p>Power Tools</p>
                        <p>Hand Tools</p>
                        <p>Plumbing</p>
                    </Grid2>
                </Grid2>
                <Grid2 container size={12}>
                    {/* <Grid2 size={2.4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={product1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: "12px", fontWeight: "bold" }}>
                                    SKU: A43-44328-B
                                </Typography>
                                <Typography gutterBottom component="div" sx={{ fontSize: "15px", fontWeight: "bold" }}>
                                    Glossy Gray 19' Aluminium wheel AR 19
                                </Typography>
                                <Typography gutterBottom sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>$589.00</span>
                                    <img src={cartIcon} alt="card" style={{ width: "8%" }} />
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid2> */}
                    {
                        data?.featuredProducts?.map((item, index) => {
                            return (
                                <Grid2 size={2.4}>
                                    <Card sx={{ maxWidth: 345, height: "100%" }}>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            image={
                                                index === 0 ? product1 :
                                                    index === 1 ? product2 :
                                                        index === 2 ? product3 :
                                                            index === 3 ? product4
                                                                : product5
                                            }
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: "12px", fontWeight: "bold" }}>
                                                SKU: {item?.sku}
                                            </Typography>
                                            <Typography gutterBottom component="div" sx={{ fontSize: "15px", fontWeight: "bold" }}>
                                                {item?.name}
                                            </Typography>
                                            <Rating name="read-only" value={item?.rating} readOnly />
                                            <Typography gutterBottom sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <span style={{ fontSize: "12px", fontWeight: "bold" }}>{item?.currentPrice}</span>
                                                <img src={cartIcon} alt="card" style={{ width: "8%" }} />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        </CardActions>
                                    </Card>
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </div>

            <div className="offerImag">

                <div> <div className="mainDiv" style={{ position: 'relative', width: '100%' }}>
                    <div className="floatingContent">
                        <span className="offerSpan">MOTOR OILS</span>
                        {/* <h2 className="heading">{item.header}</h2> */}
                        <p className="subHeading">Synthetic motor oil with free shopping</p>
                        <p className="subHeading">Friction free life guaranteed</p>
                        <button className="button1">Shop Now</button>
                    </div>

                    <div style={{ width: '100%' }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <img src={banner1} width={"600px"} alt="banner" />
                        </div>
                    </div>
                </div></div>
                <div> <div className="mainDiv" style={{ position: 'relative', width: '100%' }}>
                    <div className="floatingContent">
                        <span className="offerSpan">Save UP TO $40</span>
                        {/* <h2 className="heading">{item.header}</h2> */}
                        <p className="subHeading">Luxurious interior part for real aesthetes</p>
                        <p className="subHeading">Leather,fabric,invory and more.</p>
                        <button className="button1">Shop Now</button>
                    </div>

                    <div style={{ width: '100%' }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <img src={banner2} width={"600px"} alt="banner" />
                        </div>
                    </div>
                </div></div>
            </div>
            <Grid2 container size={12} sx={{ display: "flex", marginLeft: "3%" }}>
                <Grid2 size={4.1}>
                    <span className="productTitle">Top Rated Products</span>
                </Grid2>
                {/* <Grid2 size={4}>
                    <span ></span>
                </Grid2> */}
                <Grid2 size={4.1}>
                    <span className="productTitle">Special Offers</span>
                </Grid2>
                <Grid2 size={3.8}>
                    <span className="productTitle">BestSellers</span>
                </Grid2>
            </Grid2>

            <div style={{ display: "flex", gap: 100, justifyContent: "center" }}>

                <div className="productContent">

                    {
                        data?.topRatedProducts?.map((item, index) => {
                            return (

                                <Card sx={{ maxWidth: 345, height: "100%" }}>

                                    <CardContent>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <CardMedia
                                                    sx={{ height: 70, width: 70 }}
                                                    image={
                                                        index === 0 ? product6 :
                                                            index === 1 ? product7 : product8
                                                    }
                                                    title="green iguana"
                                                />
                                            </div>
                                            <div >
                                                {/* <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: "12px", fontWeight: "bold" }}>
                                                SKU: {item?.sku}
                                            </Typography> */}
                                                <Typography gutterBottom component="div" sx={{ fontSize: "15px", fontWeight: "bold" }}>
                                                    {item?.name}
                                                </Typography>
                                                <Rating name="read-only" value={item?.rating} readOnly />
                                                <Typography gutterBottom >
                                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>{item?.currentPrice}</span>
                                                </Typography>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }
                </div>

                <div className="productContent">

                    {
                        data?.specialOffers?.map((item, index) => {
                            return (

                                <Card sx={{ maxWidth: 345, height: "100%" }}>

                                    <CardContent>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <CardMedia
                                                    sx={{ height: 70, width: 70 }}
                                                    image={
                                                        index === 0 ? product9 :
                                                            index === 1 ? product10 : product11
                                                    }
                                                    title="green iguana"
                                                />
                                            </div>
                                            <div>
                                                {/* <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: "12px", fontWeight: "bold" }}>
                                                SKU: {item?.sku}
                                            </Typography> */}
                                                <Typography gutterBottom component="div" sx={{ fontSize: "15px", fontWeight: "bold" }}>
                                                    {item?.name}
                                                </Typography>
                                                <Rating name="read-only" value={item?.rating} readOnly />
                                                <Typography gutterBottom >
                                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>{item?.currentPrice}</span>
                                                </Typography>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }
                </div>

                <div className="productContent">

                    {
                        data?.bestSellers?.map((item, index) => {
                            return (

                                <Card sx={{ maxWidth: 345, height: "100%" }}>

                                    <CardContent>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <CardMedia
                                                    sx={{ height: 70, width: 70 }}
                                                    image={
                                                        index === 0 ? product12 :
                                                            index === 1 ? product13 : product9
                                                    }
                                                    title="green iguana"
                                                />
                                            </div>
                                            <div>
                                                {/* <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: "12px", fontWeight: "bold" }}>
                                                SKU: {item?.sku}
                                            </Typography> */}
                                                <Typography gutterBottom component="div" sx={{ fontSize: "15px", fontWeight: "bold" }}>
                                                    {item?.name}
                                                </Typography>
                                                <Rating name="read-only" value={item?.rating} readOnly />
                                                <Typography gutterBottom >
                                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>{item?.currentPrice}</span>
                                                </Typography>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;