import React,{ useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
    const { state, dispatch } = useContext(Store);
    const { darkMode, cart } = state;

    // Switch botton issue is fixed partialy with this code. Look up another ways to fix this.!!!!
    // if(darkMode===true){
    //     document.getElementsByClassName('MuiButtonBase-root')[0].classList.add('Mui-checked')
    // }

    const theme= createTheme({
        typography: {
            h1: {
              fontSize: '1.6rem',
              fontWeight: 400,
              margin: '1rem 0',
            },
            h2: {
              fontSize: '1.4rem',
              fontWeight: 400,
              margin: '1rem 0',
            },
          },
          palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
              main: '#f0c000',
            },
            secondary: {
              main: '#208080',
            },
          },
    })
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Shanty` : 'Shanty'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      {/* ThemeProvider is necessary for createTheme */}
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* CssBaseline is necessary for createTheme */}
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Shanty</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
            <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
              <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Shanty.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
