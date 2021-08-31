import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';
import { cardShadow, cardShadowSmall } from '../../_settings/variables';

/* card chứa shadow */
const AtomCardShadow = withStyles(
  theme => ({
    root: {
      boxShadow: theme.palette.type === 'light' ? cardShadowSmall : undefined,
      wordBreak: 'break-word',
      // overflow: 'unset',
      [theme.breakpoints.up('sm')]: {
        boxShadow: theme.palette.type === 'light' ? cardShadow : undefined,
      },
    },
  }),
  { name: 'AtomCardShadow' },
)(AtomCard);
export default AtomCardShadow;
