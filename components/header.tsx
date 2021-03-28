import { Cell, Grid } from 'baseui/layout-grid';
import { StyledLink } from 'baseui/link';
import Link from 'next/link';

const Header = (): JSX.Element => (
  <Grid>
    <Cell span={12}>
      <Link href="/" passHref>
        <StyledLink>Logo</StyledLink>
      </Link>
    </Cell>
  </Grid>
);

export default Header;
