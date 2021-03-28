import Head from 'next/head';
import { PropsWithChildren, ReactNode } from 'react';
import { APP_NAME } from '../common/constants';

interface LayoutPageProps {
  children: ReactNode;
  description: string;
  elements?: ReactNode;
  keywords?: string;
  title: string;
}

const LayoutPage = ({
  children,
  description,
  elements,
  keywords,
  title,
}: PropsWithChildren<LayoutPageProps>): JSX.Element => (
  <>
    <Head>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <title>
        {APP_NAME} | {title}
      </title>
      {elements}
    </Head>
    {children}
  </>
);

export default LayoutPage;
