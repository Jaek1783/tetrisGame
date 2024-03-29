import '../styles/globals.css';
import React from 'react';
import type {AppProps} from 'next/app';
import Layout from '../components/layout/Layout';
const MyApp = ({Component, pageProps}:AppProps) => {
    return <Layout>
        <Component {...pageProps}/>
    </Layout>
    
}

export default MyApp;