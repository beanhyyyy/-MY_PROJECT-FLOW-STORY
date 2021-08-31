import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';

/* card màu xanh */
const AtomCardPrimary = withStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
  { name: 'AtomCardPrimary' },
)(AtomCard);
export default AtomCardPrimary;
