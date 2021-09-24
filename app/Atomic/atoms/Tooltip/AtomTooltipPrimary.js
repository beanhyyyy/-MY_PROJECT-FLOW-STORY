import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import { linearColor } from "../../_settings/variables";

/* tooltip màu xanh */
const AtomTooltipPrimary = withStyles(
  (theme) => ({
    tooltip: {
      background: linearColor,
      color: theme.palette.common.white,
      padding: theme.spacing(1),
      fontSize: theme.typography.caption.fontSize,
      maxWidth: "25vw",
      overflow: "hidden",
    },
    arrow: {
      color: theme.palette.primary.main,
    },
  }),
  { name: "AtomTooltipPrimary" }
)(Tooltip);

export default AtomTooltipPrimary;
