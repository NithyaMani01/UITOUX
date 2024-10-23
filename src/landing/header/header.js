import './header.css';
import logo from '../../source-images/logo.png'
import carIcon from '../../source-images/svg/car.svg'
import heartIcon from '../../source-images/svg/heart.svg'
import personIcon from '../../source-images/svg/person.svg'
import cartIcon from '../../source-images/svg/cart-20.svg'
import searchIcon from '../../source-images/svg/search.svg'


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Autocomplete, Badge, Button, Card, Divider, Grid2, InputAdornment, Menu, MenuItem, Select, TextField } from '@mui/material';
import React, { Fragment } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <div className='mainDiv1'>
                <div className="header1">
                    <p>About Us</p>
                    <p>Contacts</p>
                    <p>Store Location</p>
                    <p>Track Order</p>
                    <p>Blog</p>
                </div>
                <div className="header2">
                    <p>Compare: 2</p>
                    <p>Currency: RS</p>
                    <p>Language: EN</p>
                </div>
            </div>
            <Grid2 container style={{ marginLeft: "4%", marginBottom: "1%" }}>
                <Grid2 size={1.2} >
                    <img src={logo} alt='UiUx' className='logo' />
                </Grid2>
                <Grid2 size={7.5} sx={{ display: "flex", alignItems: "center", gap: 0.5, marginTop: "1%" }}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        style={{
                            backgroundColor: '#FFD700',
                            color: '#2c2c2c',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            padding: '4px 4px',
                            borderRadius: 0,
                            fontSize: "12px",
                            width: "24%"
                        }}
                        startIcon={<img src={carIcon} alt='car' style={{ width: "82%" }} />}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Select Vehicle
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem style={{ fontSize: "12px" }} onClick={handleClose}>Car 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }} onClick={handleClose}>Car 2</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }} onClick={handleClose}>Car 3</MenuItem>
                    </Menu>

                    <Autocomplete
                        disablePortal
                        onMouseDown={(e) => e.stopPropagation()}
                        noOptionsText={<span className='textColor'>No Options</span>}
                        id="combo-box-demo"
                        value={''}
                        className={`autocompleteField auto-complete-field auto-complete-field-wrapper`}
                        options={[]}
                        sx={{ width: 300, backgroundColor: "#efefef" }}

                        renderInput={(params) => <TextField {...params} size="small"
                            //  placeholder='Enter Key or Part Number'
                            onClick={(e) => { e.stopPropagation() }}
                            slotProps={{
                                // ...params.InputProps,
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end" style={{ marginRight: '10px', color: "#726f6f" }}>
                                            <img src={searchIcon} alt='search' style={{ width: "82%" }} />
                                        </InputAdornment>

                                    ),
                                }
                            }}
                        />}
                    />
                </Grid2>
                <Grid2 size={0.5}>
                    {/* <Badge badgeContent={4} color="primary"
                    > */}
                    <img src={heartIcon} alt='like' style={{ width: "50%" }} />
                    {/* </Badge> */}
                </Grid2>
                <Grid2 size={0.3}>

                    <img src={personIcon} alt='acc' style={{ width: "83%" }} />
                </Grid2>
                <Grid2 size={1}>
                    <div>
                        <span style={{ whiteSpace: "nowrap", fontSize: "12px", color: "#726f6f", fontWeight: "600" }}> Hello, LogIn</span><br />
                        <span style={{ whiteSpace: "nowrap", fontSize: "13px", fontWeight: "650" }}> My Account</span>
                    </div>
                </Grid2>
                <Grid2 size={0.3}>
                    {/* <Badge badgeContent={4} color="primary"> */}
                    <img src={cartIcon} alt='cart' style={{ width: "83%" }} />
                    {/* </Badge> */}
                </Grid2>
                <Grid2 size={1}>

                    <div>
                        <span style={{ whiteSpace: "nowrap", fontSize: "12px", color: "#726f6f", fontWeight: "600" }}> Shopping Cart</span><br />
                        <span style={{ whiteSpace: "nowrap", fontSize: "13px", fontWeight: "650" }}>1468.60</span>
                    </div>
                </Grid2>

            </Grid2>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "3%", marginRight: "3%", fontSize: "12px" }}>
                <div style={{ display: "flex", gap: "2%", width: "83%", alignItems: "center" }}>
                    <Select
                        value={'Shop By Category'}
                        style={{ fontSize: "12px", fontWeight: "650" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // This removes the border
                            },
                        }}
                    >
                        <MenuItem value='Shop By Category' style={{ fontSize: "12px" }}>Shop By Category</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Category 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Category 2</MenuItem>
                    </Select>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Select
                        value={'Megamenu'}
                        style={{ fontSize: "12px", fontWeight: "650" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // This removes the border
                            },
                        }}
                    >
                        <MenuItem value='Megamenu' style={{ fontSize: "12px" }}>Megamenu</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Menu 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Menu 2</MenuItem>
                    </Select>
                    <Select
                        value={'Shop'}
                        style={{ fontSize: "12px", fontWeight: "650" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // This removes the border
                            },
                        }}
                    >
                        <MenuItem value='Shop' style={{ fontSize: "12px" }}>Shop</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Shop 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Shop 2</MenuItem>
                    </Select>
                    <Select
                        value={'Blog'}
                        style={{ fontSize: "12px", fontWeight: "650" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // This removes the border
                            },
                        }}
                    >
                        <MenuItem value='Blog' style={{ fontSize: "12px" }}>Blog</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Blog 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Blog 2</MenuItem>
                    </Select>
                    <Select
                        value={'Account'}
                        style={{ fontSize: "12px", fontWeight: "650" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // This removes the border
                            },
                        }}
                    >
                        <MenuItem value='Account' style={{ fontSize: "12px" }}>Account</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Account 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Account 2</MenuItem>
                    </Select>
                    <Select
                        value={'Pages'}
                        style={{ fontSize: "12px", fontWeight: "650" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // This removes the border
                            },
                        }}
                    >
                        <MenuItem value='Pages' style={{ fontSize: "12px" }}>Pages</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Page 1</MenuItem>
                        <MenuItem style={{ fontSize: "12px" }}>Page 2</MenuItem>
                    </Select>

                    <span style={{ fontSize: "12px", fontWeight: "650" }}>Buy Theme</span>


                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: "#726f6f", fontWeight: "600" }}>Call Us </span>
                    <span style={{ fontSize: "12px", fontWeight: "650" }}> : 089252978707</span>
                </div>
            </div>

            <Divider />


        </Fragment>
    )
}

export default Header;