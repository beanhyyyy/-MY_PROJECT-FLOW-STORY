import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colorTypo, linearColor } from "../../_settings/variables";

const useStyle = makeStyles((theme) => ({
  styleWrapper: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // minHeight: "100vh",
  },
  styleStaticText: {
    color: colorTypo,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 400,
  },
  styleDynamicText: {
    position: "relative",
  },
  styleSpan: {
    color: colorTypo,
    listStyle: "none",
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 500,

    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "100vw",
      height: "100%",
      background: linearColor,
      // borderLeft: "2px solid white",
      animation: "$typing 4s steps(30) infinite",
    },
  },
  "@keyframes typing": {
    "0%": {
      borderLeft: `2px solid ${colorTypo}`,
    },
    "100%": {
      borderLeft: `2px solid ${colorTypo}`,
      left: "25vw",
      margin: "0px -35px 0px 35px",
    },
  },
}));

export default function TextAnimationRun({ title, content }) {
  const classes = useStyle();

  return (
    <div className={classes.styleWrapper}>
      <div className={classes.styleStaticText}>{title}&nbsp;</div>
      <span className={classes.styleDynamicText}>
        <span className={classes.styleSpan}>{content}</span>
      </span>
    </div>
  );
}
