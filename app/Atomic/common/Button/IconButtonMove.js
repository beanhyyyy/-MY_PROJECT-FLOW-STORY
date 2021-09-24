import React from "react";
import PropTypes from "prop-types";

import AtomIconButton from "../../atoms/IconButton";
import { ClickAwayListener } from "@material-ui/core";
import AtomPopper from "../../atoms/Popper";
import AtomFade from "../../atoms/Fade";
import AtomPaper from "../../atoms/Paper";
import makeStyles from "@material-ui/styles/makeStyles";
import { colorTypo, linearColor } from "../../_settings/variables";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  stylePaper: {
    background: linearColor,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    fontSize: theme.typography.caption.fontSize,
    maxWidth: "25vw",
    overflow: "hidden",
  },
  styleIcon: {
    fontSize: theme.spacing(10),
    animation: "$scaleButton 1.5s alternate infinite ease-in",
    color: colorTypo,
  },

  "@keyframes scaleButton": {
    from: { transform: "scale(0.7)" },
    to: { transform: "scale(1.2)" },
  },
}));
export default function IconButtonMove({ left, right, go, back, content }) {
  const classes = useStyles();

  /* handle đóng mở popper */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "date-range-picker-popper" : undefined;

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  /* handle click TextField */
  const handleClickButton = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <AtomIconButton color="primary" onClick={handleClickButton}>
          {left && <ArrowBackIcon className={classes.styleIcon} />}
          {right && <ArrowForwardIcon className={classes.styleIcon} />}
          {go && <ArrowUpwardIcon className={classes.styleIcon} />}
          {back && <ArrowDownwardIcon className={classes.styleIcon} />}
        </AtomIconButton>

        <AtomPopper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <AtomFade timeout={350} {...TransitionProps}>
              <AtomPaper elevation={0} className={classes.stylePaper}>
                {content}
              </AtomPaper>
            </AtomFade>
          )}
        </AtomPopper>
      </div>
    </ClickAwayListener>
  );
}

IconButtonMove.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  go: PropTypes.bool,
  back: PropTypes.bool,
  content: PropTypes.any,
};
