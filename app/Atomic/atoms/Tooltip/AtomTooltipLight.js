import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

/* tooltip màu trắng */
const AtomTooltipLight = withStyles(
  theme => ({
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      padding: theme.spacing(2),
      fontSize: theme.typography.caption.fontSize,
      border: `1px solid ${theme.palette.divider}`,
    },
    arrow: {
      color: theme.palette.background.paper,
      '&:before': {
        boxShadow: theme.shadows[2],
      },
    },
  }),
  { name: 'AtomTooltipLight' },
)(Tooltip);

export default AtomTooltipLight;
