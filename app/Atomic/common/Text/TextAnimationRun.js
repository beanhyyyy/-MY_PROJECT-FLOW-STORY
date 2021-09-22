import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme) => ({
  styleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  styleStaticText: {
    color: "#ea4335",
    fontSize: "24px",
    fontWeight: 400,
  },
  styleDynamicText: {
    position: "relative",
  },
  styleSpan: {
    color: "#ea4335",
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
      borderLeft: "2px solid #ea4335",
    },
    "100%": {
      borderLeft: "2px solid #ea4335",
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