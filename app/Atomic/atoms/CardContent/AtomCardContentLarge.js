import withStyles from '@material-ui/core/styles/withStyles';
import AtomCardContent from '.';

/* card content có padding lớn hơn */
const AtomCardContentLarge = withStyles(
  () => ({
    root: {
      // [theme.breakpoints.up('xl')]: {
      //   padding: theme.spacing(3),
      //   '&:last-child': {
      //     paddingBottom: theme.spacing(4),
      //   },
      // },
    },
  }),
  { name: 'AtomCardContentLarge' },
)(AtomCardContent);
export default AtomCardContentLarge;
