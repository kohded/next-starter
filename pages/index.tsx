import { Button } from 'baseui/button';
import { ButtonGroup } from 'baseui/button-group';
import { CheckIndeterminate, Plus } from 'baseui/icon';
import { Cell, Grid } from 'baseui/layout-grid';
import { Paragraph2 } from 'baseui/typography';
import { useRecoilState } from 'recoil';
import LayoutPage from '../components/layout-page';
import counterAtom from '../state/counter';

const Home = (): JSX.Element => {
  const [counter, setCounter] = useRecoilState(counterAtom);
  const homeText = 'Home';

  return (
    <LayoutPage description={homeText} keywords={homeText} title={homeText}>
      <Grid>
        <Cell span={12}>
          <Paragraph2>Counter: {counter}</Paragraph2>
        </Cell>
        <Cell span={12}>
          <ButtonGroup>
            <Button onClick={() => setCounter(counter - 1)}>
              <CheckIndeterminate />
            </Button>
            <Button onClick={() => setCounter(counter + 1)}>
              <Plus />
            </Button>
          </ButtonGroup>
        </Cell>
      </Grid>
    </LayoutPage>
  );
};

export default Home;
