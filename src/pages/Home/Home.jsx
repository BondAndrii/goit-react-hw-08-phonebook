import React from "react";

import { HomeStyled, Text, Tittle } from "./Home.styled";
// import { Container, Grid, Paper, Typography } from "@mui/material";

// import { createStyles, makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


// import { Theme } from "@mui/material";

// import styled from "./Home.module.css"
// const useStyles = makeStyles((theme: Theme) =>
// createStyles({
//     mainFeaturesPost: {
//         position: "relative",
//         color: theme.palette.common.white,
//         margineTop: theme.spacing(8),
//         margineBottom: theme.spacing(4),
//         backgroundSize: "cover",
//         bacgroundRepeat: 'no-repeat',
//         backgroundPosition: "center",
//     }
// }))

// const theme = createTheme();
const Home = () => {
    // const classes = useStyles();
    return (
    // <ThemeProvider theme={theme}>
    //             <main>
    //         <Paper
    //             className={classes.mainFeaturesPost}
    //         style={{backgroundimage:`url(https://unblast.com/wp-content/uploads/2020/06/Contacts-App-UI-Kit-Template-2.jpg)`}}>
    //             <Container fixed>
    //                 <Grid Container>
    //                     <Grid item md={6}>
    //                         <div
    //                             // className={classes.mainFeaturesPostContent}
    //                         >
    //                             <Typography
    //                                 component="h2"
    //                                 color="inherit"
    //                                 gutterBottom
    //                             >
    //                                 Welcome to Phonebook!
    //                             </Typography>
    //                             <Typography
    //                                 component="h2"
    //                                 color="inherit"
    //                                 paragraph
    //                             >
    //                                 В цьому застосунку ви можете зберігати найцінніші телефонні номери, дадавати нові, змінювати та видаляти існуючі.
    //                                 Легко шукати потрібний контакт за допомогою фільту. Наша команда надіється, що Вам сподобається наш додаток
    //                                 і Ви з задоволенням будете ним користуватись та радити друзям.
    //                             </Typography>
    //                         </div>
    //                     </Grid>
    //                 </Grid>
    //             </Container>
    //         </Paper>  
    //     </main>
    // </ThemeProvider>

        <HomeStyled>
            <Tittle>Welcome to Phonebook!</Tittle>
            <Text>
                В цьому застосунку ви можете зберігати найцінніші телефонні номери, дадавати нові, змінювати та видаляти існуючі.
                Легко шукати потрібний контакт за допомогою фільту. Наша команда надіється, що Вам сподобається наш додаток
                і Ви з задоволенням будете ним користуватись та радити друзям.
            </Text>
        </HomeStyled>
        // <div className={styled.Home}>
        //     <h1 className={styled.Tittle} >Welcome to Phonebook!</h1>
        //     <p className={styled.Text}>
        //         В цьому застосунку ви можете зберігати найцінніші телефонні номери, дадавати нові, змінювати та видаляти існуючі.
        //         Легко шукати потрібний контакт за допомогою фільту. Наша команда надіється, що Вам сподобається наш додаток
        //         і Ви з задоволенням будете ним користуватись та радити друзям.
        //     </p>
        // </div>
    )
}

export default Home;