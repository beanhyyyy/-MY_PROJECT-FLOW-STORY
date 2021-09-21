import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AtomBox from "../../../Atomic/atoms/Box";
import AtomRouterLink from "../../../Atomic/atoms/RouterLink";

const useStyle = makeStyles((theme) => ({
  body: {
    background: "#000",
    height: "100vh",
    width: "100%",
  },
  container: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",

    "& span": {
      textTransform: "uppercase",
      display: "block",
    },
  },
  text1: {
    fontSize: "60px",
    fontWeight: "700",
    letterSpacing: "8px",
    marginBottom: "20px",

    color: "white",
    background: "black",

    position: "relative",
    animation: "$text1 3s 1",
  },
  text2: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#ea4335",
    animation: "$text2 1.5s ease infinite",
  },
  "@keyframes text1": {
    from: { color: "black", marginBottom: "-40px" },
    "30%": { letterSpacing: "25px", marginBottom: "-40px" },
    "85%": { letterSpacing: "8px", marginBottom: "-40px" },
  },
  "@keyframes text2": {
    from: {},
    "30%": { letterSpacing: "20px" },
    "85%": { letterSpacing: "8px" },
  },
}));

export default function HomePage() {
  const classes = useStyle();

  return (
    <>
      <Helmet titleTemplate="%s - HOME PAGE" defaultTitle="HOME PAGE">
        <meta name="description" content="A VLU : HOME PAGE" />
      </Helmet>
      <div className={classes.body}>
        <AtomBox component={AtomRouterLink} to="/SchoolPage">
          <div className={classes.container}>
            <span className={classes.text1}>WELCOME IN</span>
            <span className={classes.text2}>VLU</span>
          </div>
        </AtomBox>
      </div>
    </>
  );
}
