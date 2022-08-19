import '../styles/globals.css'
import { ConvexProviderWithAuth0 } from 'convex/react-auth0'
import { ConvexReactClient } from 'convex/react'
import convexConfig from '../convex.json'
import { AppProps } from 'next/app'
import { Login } from '../components/Login'

const convex = new ConvexReactClient(convexConfig.origin)
const authInfo = convexConfig.authInfo[0]

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ConvexProviderWithAuth0
            client={convex}
            authInfo={authInfo}
            loggedOut={<Login />}
        >
            <Component {...pageProps} />;
        </ConvexProviderWithAuth0>
    )
}

export default MyApp
