import { Cell, Grid } from 'baseui/layout-grid';
import { Paragraph2 } from 'baseui/typography';
import { APP_NAME } from '../common/constants';

const Footer = (): JSX.Element => (
  <Grid>
    <Cell span={12}>
      <Paragraph2>Copyright &#xA9; {`${new Date().getFullYear()} ${APP_NAME}`}</Paragraph2>
    </Cell>
  </Grid>
);

export default Footer;
