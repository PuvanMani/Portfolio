import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Home() {
    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "12px", p: "20px" }}>
            <Typography variant='h3' component='h3' className='heading'>ABOUT ME</Typography>
            <Typography variant='p' component='p' className='content' sx={{ textAlign: "justify", py: "10px" }}>
                Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile <b>full-stack developer</b> with a keen interest in exploring the latest cutting-edge technologies.
                My journey in the world of web development has been nothing short of exhilarating, and
                I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </Typography>
            <Typography variant='h5' component='h5' className='heading title' sx={{ py: "10px" }}>What I do!</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Typography className='heading icon title card-title' variant='h6' component='h6'>  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#FF9C1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 10V12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12V10M14 10L17 14M14 14L17 10" stroke="#FF9C1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>&nbsp;   Frontend Development</Typography>
                        <Typography variant='p' component='p' className='content'>
                            As a developer, I find myself most
                            captivated by the power and flexibility of
                            ReactJS. I'm always eager to dive into new
                            projects that leverage ReactJS and
                            discover innovative ways to create fast,
                            scalable, and user-friendly applications.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='card blue'>
                        <Typography className='heading icon title card-title' variant='h6' component='h6'> <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z" fill="#E80505" />
                        </svg> &nbsp; Backend Development</Typography>
                        <Typography variant='p' component='p' className='content'>
                            As a Backend developer, I have a strong Knowlage in
                            ExpressJS/NodeJS. I'm always eager to dive into new
                            projects that leverage ExpressJS/NodeJS and
                            discover innovative ways to create fast,
                            efficient REST API for several applications.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Typography className='heading icon title card-title' variant='h6' component='h6'> <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_43_118)">
                                <path d="M9.75008 16.5C9.63804 16.5 9.52601 16.5164 9.41914 16.5511C8.81164 16.7484 8.17273 16.875 7.50008 16.875C6.82742 16.875 6.18851 16.7484 5.58054 16.5511C5.47367 16.5164 5.36211 16.5 5.25008 16.5C2.34101 16.5 -0.015393 18.8662 7.57256e-05 21.7791C0.00663823 23.01 1.01867 24 2.25008 24H12.7501C13.9815 24 14.9935 23.01 15.0001 21.7791C15.0155 18.8662 12.6591 16.5 9.75008 16.5ZM7.50008 15C9.98539 15 12.0001 12.9853 12.0001 10.5C12.0001 8.01469 9.98539 6 7.50008 6C5.01476 6 3.00008 8.01469 3.00008 10.5C3.00008 12.9853 5.01476 15 7.50008 15ZM27.7501 0H9.75008C8.50929 0 7.50008 1.04297 7.50008 2.32453V4.5C8.59789 4.5 9.61414 4.81781 10.5001 5.33438V3H27.0001V16.5H24.0001V13.5H18.0001V16.5H14.4263C15.3216 17.2823 15.9788 18.3155 16.2868 19.5H27.7501C28.9909 19.5 30.0001 18.457 30.0001 17.1755V2.32453C30.0001 1.04297 28.9909 0 27.7501 0Z" fill="#E80505" />
                            </g>
                            <defs>
                                <clipPath id="clip0_43_118">
                                    <rect width="30" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg> &nbsp; Mentorship</Typography>
                        <Typography variant='p' component='p' className='content'>
                            I have also found great joy in sharing my
                            knowledge with others. Being a technical
                            mentor allows me to give back to the
                            community that has supported me
                            throughout my career.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Home
