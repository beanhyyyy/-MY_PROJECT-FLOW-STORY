import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

const AtomTooltip = withStyles(
  theme => ({
    tooltip: {
      padding: theme.spacing(1),
      // fontSize: theme.typography.caption.fontSize,
    },
  }),
  { name: 'AtomTooltip' },
)(Tooltip);

export default AtomTooltip;
