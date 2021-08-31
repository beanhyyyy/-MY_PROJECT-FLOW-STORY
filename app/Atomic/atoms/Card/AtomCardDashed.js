import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';

/* card có border vạch đứt màu xám */
const AtomCardDashed = withStyles(
  theme => ({
    root: {
      border: `2px dashed ${theme.palette.grey[200]}`,
      wordBreak: 'break-word',
      boxShadow: 'none',
    },
  }),
  { name: 'AtomCardDashed' },
)(AtomCard);
export default AtomCardDashed;
