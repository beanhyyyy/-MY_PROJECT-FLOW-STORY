import React from "react";
import { Helmet } from "react-helmet";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AtomBox from "../../../Atomic/atoms/Box";
import AtomRouterLink from "../../../Atomic/atoms/RouterLink";
import { colorTypo } from "../../../Atomic/_settings/variables";
import imageWelcome from "images/imageWelcome.jpg";
import PageBackground from "Atomic/templates/PageBackground";

const useStyle = makeStyles((theme) => ({
  body: {
    // background: imageWelcome,
    height: "100vh",
    width: "100%",
  },
  container: {
    textAlign: "center",
    position: "absolute",
    top: "20%",
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

    color: "#ffff33",

    position: "relative",
    animation: "$text1 3s 1",
  },
  text2: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#ffff33",
    animation: "$text2 1.5s ease infinite",
  },
  text3: {
    fontSize: "26px",
    fontWeight: "700",
    color: 'white',
    background: colorTypo,
    width: '35vw',
    textAlign: "center",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,-50%)",
    marginTop: '5vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
      width: '100vw',
    },
  },

  // heart: {
  //   display: 'inline-block',
  //   height: theme.spacing(25),
  //   width: theme.spacing(25),
  //   margin: '0 10px',
  //   position: 'absolute',
  //   top: 0,
  //   backgroundColor: 'red',
  //   transform: 'rotate(-45deg)',

  //   '&::before': {
  //     content: `''`,
  //     left: 0,
  //     top: -theme.spacing(12),
  //     position: 'absolute',
  //     width: theme.spacing(25),
  //     height: theme.spacing(25),
  //     borderRadius: '50%',
  //     backgroundColor: 'red'
  //   },

  //   '&::after': {
  //     content: `''`,
  //     left: theme.spacing(12),
  //     top: 0,
  //     position: 'absolute',
  //     width: theme.spacing(25),
  //     height: theme.spacing(25),
  //     borderRadius: '50%',
  //     backgroundColor: 'red'
  //   }
  // },
  "@keyframes text1": {
    from: { color: "white", marginBottom: "-60px" },
    "30%": { letterSpacing: "25px", marginBottom: "-60px" },
    "85%": { letterSpacing: "8px", marginBottom: "-60px" },
  },
  "@keyframes text2": {
    from: { color: "white" },
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
            <span className={classes.text1}>WELCOME TO</span>
            <span className={classes.text2}>Sohu</span>
            <span className={classes.text3}>
              <b>CHÀO ĐÓN K27 KHOA XÃ HỘI VÀ NHÂN VĂN</b>
            </span>
            {/* <img src={imageHHLL} alt="123" /> */}

            {/* <span className={classes.heart} /> */}
          </div>
        </AtomBox>
        <PageBackground image={imageWelcome} />
      </div>
    </>
  );
}
