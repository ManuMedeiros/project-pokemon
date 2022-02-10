import '../styles/globals.css'
import { GlobalStyle } from 'styles/style'
import Head from 'next/dist/next-server/lib/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Pokemon</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
