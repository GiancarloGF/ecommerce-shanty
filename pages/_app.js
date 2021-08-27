import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    //Fixing issue when render style (1)
    const jssStyles=document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[]);

  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  );
}

export default MyApp;



{/*   COMMENTS

(1) When styling with MUI, style is aplied, but when refresing the page, styles were gone.
    To fix this issue, a DOM element is removed.
    This step is related with pages/_document.js -> (1)



*/}
