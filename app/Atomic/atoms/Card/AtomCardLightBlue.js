import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';

/* card màu xanh nhạt */
const AtomCardLightBlue = withStyles(
  theme => ({
    root: {
      backgroundColor:
        theme.palette.type === 'light'
          ? '#D9F5FF'
          : theme.palette.background.default,
      wordBreak: 'break-word',
      boxShadow: 'none',
    },
  }),
  { name: 'AtomCardLightBlue' },
)(AtomCard);
export default AtomCardLightBlue;
