import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

/* tooltip màu đen */
const AtomTooltipDark = withStyles(
  theme => ({
    tooltip: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.default,
      boxShadow: theme.shadows[1],
      padding: theme.spacing(2),
      fontSize: theme.typography.caption.fontSize,
    },
    arrow: {
      color: theme.palette.text.primary,
      '&:before': {
        boxShadow: theme.shadows[1],
      },
    },
  }),
  { name: 'AtomTooltipDark' },
)(Tooltip);

export default AtomTooltipDark;
