import { Cell, Grid } from 'baseui/layout-grid';
import { Paragraph2 } from 'baseui/typography';
import LayoutPage from '../components/layout-page';

const Error500 = (): JSX.Element => {
  const serverSideErrorText = '500 - Server-side error occurred';

  return (
    <LayoutPage
      description={serverSideErrorText}
      keywords={serverSideErrorText}
      title={serverSideErrorText}
    >
      <Grid>
        <Cell span={12}>
          <Paragraph2>{serverSideErrorText}</Paragraph2>
        </Cell>
      </Grid>
    </LayoutPage>
  );
};

export default Error500;
