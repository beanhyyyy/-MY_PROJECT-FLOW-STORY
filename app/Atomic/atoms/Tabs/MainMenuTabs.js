import { withStyles } from '@material-ui/core';
import AtomTabs from '.';

const MainMenuTabs = withStyles(
  () => ({
    root: {},
  }),
  {
    name: 'MainMenuTabs',
  },
)(AtomTabs);

export default MainMenuTabs;
