import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colorTypo } from '../../_settings/variables';

const useStyle = makeStyles((theme) => ({
  styleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  styleStaticText: {
    color: colorTypo,
    fontSize: "24px",
    fontWeight: 400,
  },
  styleDynamicText: {
    position: "relative",
  },
  styleSpan: {
    color: colorTypo,
    listStyle: "none",
    fontSize: "24px",
    fontWeight: 500,
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      width: "100%",
      height: "100%",
      // borderLeft: "2px solid white",
      animation: "$typing 2s steps(10)",
    },
  },
  "@keyframes typing": {
    "0%": {
      borderLeft: `2px solid ${colorTypo}`,
    },
    "100%": {
      borderLeft: `2px solid ${colorTypo}`,
      left: "90%",
      margin: "0px -35px 0px 35px",
    },
  },
}));

export default function TextAnimationRun({title, content}) {
    const classes = useStyle();

    return(
        <div className={classes.styleWrapper}>
        <div className={classes.styleStaticText}>{title}&nbsp;</div>
        <span className={classes.styleDynamicText}>
          <span className={classes.styleSpan}>{content}</span>
        </span>
      </div>
    )
}