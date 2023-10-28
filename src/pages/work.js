import { Box, Divider, Grid, Typography } from '@mui/material';
import AruviProject from '../assets/image/Aruvi.jpg';
import JioMartProject from '../assets/image/Jio Mart.jpg';
import VegitableECom from '../assets/image/Vegitable E-Com.jpg';
import Portfolio from '../assets/image/Portfolio.jpg';
import React from 'react';
function Work() {
    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "12px", p: "20px" }}>
            <Typography variant='h3' component='h3' className='heading' sx={{ mb: "20px" }}>PORTFOLIO <Divider /></Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box>
                            <img style={{ borderRadius: "12px" }} width='100%' alt='Aruvi' src={AruviProject} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Static Website</Typography>
                                <Typography variant='p' component='p' className='content role'>Aruvi Institue of Learning</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box >
                            <img style={{ borderRadius: "12px" }} width='100%' alt='Aruvi' src={JioMartProject} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Static Website</Typography>
                                <Typography variant='p' component='p' className='content role'>Jio Mart Clone</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box >
                            <img style={{ borderRadius: "12px" }} width='100%' alt='Aruvi' src={Portfolio} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Dynamic Website</Typography>
                                <Typography variant='p' component='p' className='content role'>Own Portfolio</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box >
                            <img style={{ borderRadius: "12px" }} width='100%' alt='Aruvi' src={VegitableECom} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Dynamic Website</Typography>
                                <Typography variant='p' component='p' className='content role'>Vegitables Selling E-commerce</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Work
