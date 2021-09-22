import React from "react";
import { Helmet } from "react-helmet";
import makeStyles from "@material-ui/core/styles/makeStyles";

import AtomButton from "Atomic/atoms/Button";
import AtomContainer from "Atomic/atoms/Container";
import PageBackground from "Atomic/templates/PageBackground";
import MakeGrid from "Atomic/molecules/Grid/MakeGrid";
import AtomTypography from "Atomic/atoms/Typography";

import HahaloloLogoIcon from "icons/HahaloloLogoIcon";
import imageHHLL from "images/imageHHLL.jpg";
import AtomRouterLink from "../../../Atomic/atoms/RouterLink";

const useStyle = makeStyles((theme) => ({
  styleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  styleStaticText: {
    color: "#fff",
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

export default function SchoolPage() {
  const classes = useStyle();

  return (
    <>
      <Helmet titleTemplate="%s - HOME PAGE" defaultTitle="HOME PAGE">
        <meta name="description" content="A VLU : HOME PAGE" />
      </Helmet>
      <div>
        <div className={classes.styleWrapper}>
          <div className={classes.styleStaticText}>i'm&nbsp;</div>
          <span className={classes.styleDynamicText}>
            <span className={classes.styleSpan}>123123123 21321</span>
          </span>
        </div>
        <PageBackground image={imageHHLL} />
      </div>
    </>
  );
}
