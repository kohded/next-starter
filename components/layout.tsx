import { FC, PropsWithChildren, ReactNode } from 'react';
import ErrorBoundary from './error-boundary';
import Footer from './footer';
import Header from './header';
import LayoutContainer from './layout-container';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>): JSX.Element => (
  <>
    <ErrorBoundary>
      <LayoutContainer role="banner" Tag="header">
        <Header />
      </LayoutContainer>
    </ErrorBoundary>
    <ErrorBoundary>
      <LayoutContainer isFlex role="main" Tag="main">
        {children}
      </LayoutContainer>
    </ErrorBoundary>
    <ErrorBoundary>
      <LayoutContainer role="contentinfo" Tag="footer">
        <Footer />
      </LayoutContainer>
    </ErrorBoundary>
  </>
);

export default Layout;
