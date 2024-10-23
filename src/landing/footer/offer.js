import { Card, Grid2 } from "@mui/material";
import { Fragment } from "react";
import './offer.css'
import freeDeliveryIcon from '../../source-images/svg/free-delivery.svg'
import hourIcon from '../../source-images/svg/24-hours.svg'
import securityIcon from '../../source-images/svg/payment-security.svg'
import tagIcon from '../../source-images/svg/tag.svg'

const Offer = () => {
    return (
        <Fragment>
            <div style={{ marginLeft: "4%", marginRight: "4%" }}>
                <Card style={{ padding: "3%" }}>
                    <Grid2 container size={12} sx={{ marginLeft: "4%" }}>
                        <Grid2 size={3} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <div>
                                <img src={freeDeliveryIcon} alt='freeShipping' />

                            </div>
                            <div>
                                <span style={{ fontSize: "13px", fontWeight: "600" }}>Free Shipping </span> <br />
                                <span style={{ fontSize: "13px", fontWeight: "650", color: "#726f6f" }}> For orders from $50</span>
                            </div>
                        </Grid2>
                        <Grid2 size={3} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <div>
                                <img src={hourIcon} alt='24hour' />
                            </div>
                            <div>
                                <span style={{ fontSize: "13px", fontWeight: "600" }}>Support 24/7 </span> <br />
                                <span style={{ fontSize: "13px", fontWeight: "650", color: "#726f6f" }}> Call us anytime</span>
                            </div>
                        </Grid2>
                        <Grid2 size={3} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <div>
                                <img src={securityIcon} alt='security' />
                            </div>
                            <div>
                                <span style={{ fontSize: "13px", fontWeight: "600" }}>100% Safety </span> <br />
                                <span style={{ fontSize: "13px", fontWeight: "650", color: "#726f6f" }}> Only secure payments</span>
                            </div>
                        </Grid2>
                        <Grid2 size={3} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <div>
                                <img src={tagIcon} alt='offer' />
                            </div>
                            <div>
                                <span style={{ fontSize: "13px", fontWeight: "600" }}>Hot Offers </span> <br />
                                <span style={{ fontSize: "13px", fontWeight: "650", color: "#726f6f" }}> Discounts up to 90%</span>
                            </div>
                        </Grid2>
                    </Grid2>
                </Card>
            </div>
        </Fragment>
    )
}
export default Offer;