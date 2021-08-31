import React from "react";
import { Helmet } from "react-helmet";
// import makeStyles from "@material-ui/core/styles/makeStyles";

// import AtomButton from "Atomic/atoms/Button";
// import AtomContainer from "Atomic/atoms/Container";
// import PageBackground from "Atomic/templates/PageBackground";
// import MakeGrid from "Atomic/molecules/Grid/MakeGrid";
// import AtomTypography from "Atomic/atoms/Typography";

// import HahaloloLogoIcon from "icons/HahaloloLogoIcon";
// import imageHHLL from "images/imageHHLL.jpg";
// import AtomRouterLink from "../../../Atomic/atoms/RouterLink";

// const useStyle = makeStyles((theme) => ({
//   divIcon: {
//     animation: "$logo 1.5s alternate infinite ease-in",
//     padding: theme.spacing(3),
//     borderRadius: "100%",
//     border: "5px solid red",
//     borderColor: theme.palette.primary.main,
//   },
//   styleIcon: {
//     display: "flex",
//     alignItems: "center",

//     color: theme.palette.primary.main,
//     fontSize: theme.spacing(20),
//   },
//   "@keyframes logo": {
//     from: { transform: "scale(0.7)" },
//     to: { transform: "scale(1.2)" },
//   },
//   loginPage: {
//     position: "relative",
//     minHeight: "100vh",
//   },
//   loginPageBody: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "85vh",
//   },
//   styleTypo: {
//     letterSpacing: ".7rem",
//   },
//   // heart: {
//   //   display: 'inline-block',
//   //   height: theme.spacing(25),
//   //   width: theme.spacing(25),
//   //   margin: '0 10px',
//   //   position: 'absolute',
//   //   top: 0,
//   //   backgroundColor: 'red',
//   //   transform: 'rotate(-45deg)',

//   //   animation: '$logo 1.5s ease infinite',

//   //   '&::before': {
//   //     content: `''`,
//   //     left: 0,
//   //     top: -theme.spacing(12),
//   //     position: 'absolute',
//   //     width: theme.spacing(25),
//   //     height: theme.spacing(25),
//   //     borderRadius: '50%',
//   //     backgroundColor: 'red'
//   //   },

//   //   '&::after': {
//   //     content: `''`,
//   //     left: theme.spacing(12),
//   //     top: 0,
//   //     position: 'absolute',
//   //     width: theme.spacing(25),
//   //     height: theme.spacing(25),
//   //     borderRadius: '50%',
//   //     backgroundColor: 'red'
//   //   }
//   // },
//   // styleIcon: {
//   //   display: 'flex',
//   //   alignItems: 'center',
//   //   position: 'absolute',

//   //   animation: '$logo 1.5s infinite ease-in',

//   //   color: theme.palette.primary.main,
//   //   fontSize: theme.spacing(20)
//   // },
//   // '@keyframes logo': {
//   //   from: { transform: 'scale(0.7)' },
//   //   to: { transform: 'scale(1.2)' }
//   // }
// }));

export default function HomePage() {
  const classes = useStyle();

  return (
    <>
      <Helmet titleTemplate="%s - HOME PAGE" defaultTitle="HOME PAGE">
        <meta name="description" content="A VLU : HOME PAGE" />
      </Helmet>
      <div>HOME</div>
    </>
  );
}
