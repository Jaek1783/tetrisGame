import '../styles/globals.css';
import React from 'react';
import type {AppProps} from 'next/app';
import Layout from '../components/layout/Layout';
const MyApp = ({Component, pageProps}:AppProps) => {
    return <Component {...pageProps}/>
    
}

export default MyApp;