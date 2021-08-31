import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';

/* card có chiều cao 100% */
const AtomCardFullHeight = withStyles(
  () => ({
    root: {
      height: '100%',
      wordBreak: 'break-word',
    },
  }),
  { name: 'AtomCardFullHeight' },
)(AtomCard);
export default AtomCardFullHeight;
