import { Cell, Grid } from 'baseui/layout-grid';
import { Paragraph2 } from 'baseui/typography';
import LayoutPage from '../components/layout-page';

const Error404 = (): JSX.Element => {
  const pageNotFoundText = '404 - Page Not Found';

  return (
    <LayoutPage description={pageNotFoundText} keywords={pageNotFoundText} title={pageNotFoundText}>
      <Grid>
        <Cell span={12}>
          <Paragraph2>{pageNotFoundText}</Paragraph2>
        </Cell>
      </Grid>
    </LayoutPage>
  );
};

export default Error404;
