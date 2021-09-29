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
      top: -2,
      left: 0,
      bottom: 0,
      width: "100vw",
      height: "110%",
      background: linearColor,
      // borderLeft: "2px solid white",
      animation: "$typing 6s steps(40) infinite",
    },
  },
  "@keyframes typing": {
    "0%": {
      // borderLeft: `2px solid ${colorTypo}`,
    },
    "100%": {
      // borderLeft: `2px solid ${colorTypo}`,
      left: "100vw",
      margin: "0px -35px 0px 35px",
    },
  },
}));

export default function TextAnimationRun({ title, content, propsContent }) {
  const classes = useStyle();

  return (
    <span className={classes.styleWrapper}>
      <span className={classes.styleStaticText}>{title}&nbsp;</span>
      <span className={classes.styleDynamicText}>
        <span className={classes.styleSpan} {...propsContent}>{content}</span>
      </span>
    </span>
  );
}
