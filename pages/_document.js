import  Document, {Head, Html, Main, NextScript} from "next/document";
import {ServerStyleSheets} from '@material-ui/core/styles'
import React from "react";

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

//This will execute before rendering MyDocument. (1) 
MyDocument.getInitialProps = async (cxt)=>{
    const sheets=new ServerStyleSheets();
    const originalRenderPage=cxt.renderPage;
    cxt.renderPage=()=>{
        return originalRenderPage({
            enhanceApp: (App)=>(props)=>sheets.collect(<App {...props}/>)
        })
    }

    const initialProps= await Document.getInitialProps(cxt);

    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ]
    }
}

{/* COMMENTS

(1) This step is important to fix issue on pages/_app.js ->(1)


*/}