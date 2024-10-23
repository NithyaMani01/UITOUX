import { Card, Grid2 } from "@mui/material";
import { Fragment } from "react";
import './brand.css'
import Brand1 from '../../source-images/brand-1.png';
import Brand2 from '../../source-images/brand-2.png';
import Brand3 from '../../source-images/brand-3.png';
import Brand4 from '../../source-images/brand-4.png';
import Brand5 from '../../source-images/brand-5.png';
import Brand6 from '../../source-images/brand-6.png';
import Brand7 from '../../source-images/brand-7.png';
import Brand8 from '../../source-images/brand-8.png';
import Brand9 from '../../source-images/brand-9.png';
import Brand10 from '../../source-images/brand-10.png';
import Brand11 from '../../source-images/brand-11.png';
import Brand12 from '../../source-images/brand-12.png';
import Brand13 from '../../source-images/brand-13.png';
import Brand14 from '../../source-images/brand-14.png';
import Brand15 from '../../source-images/brand-15.png';
import Brand16 from '../../source-images/brand-16.png';

const Brand = () => {
    return (
        <Fragment>
            <div style={{ marginLeft: "4%", marginRight: "4%" }}>
                <Grid2 container size={12}>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand1} alt='brand1' className="brandImg" />
                            <span className="brandName">AIMPARTS</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand2} alt='brand2' className="brandImg" />
                            <span className="brandName">WINDENGINE</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand3} alt='brand3' className="brandImg" />
                            <span className="brandName">TURBOELECRIC</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand4} alt='brand4' className="brandImg" />
                            <span className="brandName">STARTONE</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand5} alt='brand5' className="brandImg" />
                            <span className="brandName">BRANDIX</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand6} alt='brand6' className="brandImg" />
                            <span className="brandName">ABS-BRAND</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand7} alt='brand7' className="brandImg" />
                            <span className="brandName">GREATCIRCLE</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand8} alt='brand8' className="brandImg" />
                            <span className="brandName">JUSTROMB</span>
                        </Card>
                    </Grid2>


                </Grid2>
                <Grid2 container size={12}>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand9} alt='brand9' className="brandImg" />
                            <span className="brandName">FASTWHEEL</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand10} alt='brand10' className="brandImg" />
                            <span className="brandName">STROYKA</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand11} alt='brand11' className="brandImg" />
                            <span className="brandName">MISSION51</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand12} alt='brand12' className="brandImg" />
                            <span className="brandName">FUELCORP</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand13} alt='brand13' className="brandImg" />
                            <span className="brandName">REDGATE</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand14} alt='brand14' className="brandImg" />
                            <span className="brandName">BLOCKS</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand15} alt='brand15' className="brandImg" />
                            <span className="brandName">BLACKBOX</span>
                        </Card>
                    </Grid2>
                    <Grid2 size={1.5}>
                        <Card className="card">
                            <img src={Brand16} alt='brand16' className="brandImg" />
                            <span className="brandName">SQUAREGARAGE</span>
                        </Card>
                    </Grid2>



                </Grid2>
            </div>
        </Fragment>
    )
}
export default Brand;