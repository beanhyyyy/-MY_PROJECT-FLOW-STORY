import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';

/* card màu xám nhạt */
const AtomCardGrey = withStyles(
  theme => ({
    root: {
      // backgroundColor: '#f9f9fb',
      backgroundColor: theme.palette.background.default,
      wordBreak: 'break-word',
      boxShadow: 'none',
    },
  }),
  { name: 'AtomCardGrey' },
)(AtomCard);
export default AtomCardGrey;
