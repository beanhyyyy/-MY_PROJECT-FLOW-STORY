import React from "react";
import PropTypes from "prop-types";

import makeStyles from "@material-ui/styles/makeStyles";
import { colorTypo } from "../../_settings/variables";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  styleIcon: {
    fontSize: theme.spacing(6),
    animation: "$scaleButton 1.5s alternate infinite ease-in",
    color: colorTypo,
  },

  "@keyframes scaleButton": {
    from: { transform: "scale(0.8)" },
    to: { transform: "scale(1.4)" },
  },
}));
export default function ButtonMove({ left, right, go, back, button }) {
  const classes = useStyles();

  return (
    <>
    {left && <ArrowBackIcon className={classes.styleIcon} />}
    {right && <ArrowForwardIcon className={classes.styleIcon} />}
    {go && <ArrowUpwardIcon className={classes.styleIcon} />}
    {back && <ArrowDownwardIcon className={classes.styleIcon} />}
    {button && <div className={classes.styleIcon}>{button}</div>}
  </>
  );
}

ButtonMove.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  go: PropTypes.bool,
  back: PropTypes.bool,
  button: PropTypes.any,
};
