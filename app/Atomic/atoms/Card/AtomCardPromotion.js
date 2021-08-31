import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';

/* card khuyến mãi, có viền kẻ đứt màu đỏ */
const AtomCardPromotion = withStyles(
  theme => ({
    root: {
      borderRadius: theme.spacing(1),
      border: `1px dashed ${theme.palette.error.main}`,
      backgroundColor: '#fef7f7',
      wordBreak: 'break-word',
      boxShadow: 'none',
    },
  }),
  { name: 'AtomCardPromotion' },
)(AtomCard);
export default AtomCardPromotion;
