import withStyles from '@material-ui/core/styles/withStyles';
import { cardShadow } from '../../_settings/variables';
import AtomTab from '../Tab';

/* page menu */
const AtomMenuTab = withStyles(
  theme => ({
    root: {
      minHeight: theme.spacing(4),
      minWidth: 0,
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: `0 ${theme.spacing(2.5)}px`,
      boxShadow: cardShadow,
      padding: theme.spacing(1, 2),
      textTransform: 'none',
      transition: `${theme.transitions.duration.standard}ms`,
      '&:hover': {
        backgroundColor:
          theme.palette.type === 'light'
            ? theme.palette.grey[100]
            : theme.palette.background.default,
      },
    },
    wrapper: {
      flexDirection: 'row',
      '& > *:first-child:not(:last-child)': {
        marginBottom: `0 !important`,
        marginRight: theme.spacing(1),
      },
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }),
  { name: 'AtomMenuTab' },
)(AtomTab);
export default AtomMenuTab;
