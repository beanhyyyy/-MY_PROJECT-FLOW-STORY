import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';

const AtomCard = withStyles(
  theme => ({
    root: {
      borderRadius: theme.spacing(1),
    },
  }),
  { name: 'AtomCard' },
)(Card);
export default AtomCard;
