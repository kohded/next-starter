import { BaseProvider } from 'baseui';
import { enableAllPlugins } from 'immer';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { Client, Server } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { APP_NAME } from '../common/constants';
import reportWebVitals from '../common/report-web-vitals';
import ErrorBoundary from '../components/error-boundary';
import Layout from '../components/layout';
import '../styles/app.scss';
import theme from '../styles/theme';

enableAllPlugins();
reportWebVitals();

const engine = typeof window === 'undefined' ? new Server() : new Client();

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <StyletronProvider value={engine}>
          <BaseProvider
            overrides={{
              AppContainer: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100vh',
                },
              },
            }}
            theme={theme}
          >
            <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content="Next starter application" />
              <meta name="keywords" content="Next, React, Starter" />
              <title>{APP_NAME}</title>
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </BaseProvider>
        </StyletronProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </StrictMode>
);

export default App;
