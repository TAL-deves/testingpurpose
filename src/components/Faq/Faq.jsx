import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Lottie from "lottie-react";
import faqAnimation from "./support.json";
import faqAnimation_dark from "./support_dark.json";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import api from "../../api/Axios"

const FAQ_URL = "/api/faq";

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    const [faq, setFaq] = React.useState([])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const style = {
        height: "80%",
        width: "80%",
        marginLeft: "3rem",

    };

    let fetchFaq = async () => {
        await api.post(`${process.env.REACT_APP_API_URL}/api/allcourses`)
            .then((data) => {
                setFaq(data.data)
            })
    }

    useEffect(() => {

    })
    return (
        <Box sx={{ margin: "5%" }}>
            <Container>
                <Typography sx={{textAlign:"center", fontSize:"2rem", color:"primary.main"}}>FAQ-Frequently Asked Question</Typography>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                    <Grid xs={12} sm={6} md={6} lg={6} xl={6}>

                        {/* {faq.map((faq) => {
                            return ( */}
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            How are you?
                                        </Typography>
                                        {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {faq.question}
                                </Typography> */}

                                    </AccordionSummary>
                                    <AccordionDetails sx={{backgroundColor:"#e0e0e0"}}>
                                        <Typography>
                                            Mast
                                        </Typography>
                                    </AccordionDetails>

                                    {/* <AccordionDetails>
                                <Typography>
                                {faq.answer}
                                </Typography>
                            </AccordionDetails> */}
                                </Accordion>
                            {/* )})} */}
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box>
                            {localStorage.getItem("theme")=== "darkTheme"?
                            <Lottie
                                animationData={faqAnimation}
                                style={style}
                            />
                            :
                            <Lottie
                                animationData={faqAnimation_dark}
                                style={style}
                            />

                        }
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
