import '../styles/globals.css'
import {useEffect} from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    //Fixing issue when render style (1)
    const jssStyles=document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[])

  return <Component {...pageProps} />
}

export default MyApp



{/*   COMMENTS

(1) When styling with MUI, style is aplied, but when refresing the page, styles were gone.
    To fix this issue, a DOM element is removed.
    This step is related with pages/_document.js -> (1)



*/}
