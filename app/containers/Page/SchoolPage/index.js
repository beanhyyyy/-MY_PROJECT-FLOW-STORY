import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TextAnimationRun from "../../../Atomic/common/Text/TextAnimationRun";
import B1 from "images/B1.png";
import B2 from "images/B2.jpg";
import B3 from "images/B2.jpg";
import B4 from "images/B4.jpg";
import B5 from "images/B5.jpg";

import PageBackground from "Atomic/templates/PageBackground";
import makeStyles from "@material-ui/styles/makeStyles";

import AtomButtonLink from "../../../Atomic/molecules/Button/AtomButtonLink";
import AtomTypography from "../../../Atomic/atoms/Typography";
import { linearColor } from "../../../Atomic/_settings/variables";
import ViewMediaGDS from "../../../Atomic/common/Image/ViewMediaGDS";
import AtomCardMedia43 from "../../../Atomic/atoms/CardMedia/AtomCardMedia43";
import MakeGrid from "../../../Atomic/molecules/Grid/MakeGrid";

const useStyles = makeStyles((theme) => ({
  styleDiv: {
    position: "relative",
  },
  styleButtonTop: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: '50%',
    top: '90vh',
  },
  styleContent:{
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: '50%',
    top: '80vh',
    overflow: 'hidden',
    background: linearColor,
    [theme.breakpoints.down('md')]: {
      width: '90vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    },
  },
  styleImage: {
    position: 'relative',
    borderRadius: '9px',
    height: '100%',
  },
  styleHover: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '9px',
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
      transition: `${theme.transitions.duration.standard}ms`,
    },
  },
  styleContentImage: {
    paddingTop: '20vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',

  }
}));
export default function SchoolPage() {
  const classes = useStyles();

  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(!showImage);
  }
  return (
    <>
      <Helmet titleTemplate="%s - SCHOOL PAGE" defaultTitle="SCHOOL PAGE">
        <meta name="description" content="A VLU : SCHOOL PAGE" />
      </Helmet>
      <div className={classes.styleDiv}>
        <div className={classes.styleButtonTop}>
        <AtomButtonLink color='primary' onClick={handleShowImage}>
          <AtomTypography variant='h5'>
          <b>Let's go !!!</b>
          </AtomTypography>
        </AtomButtonLink>
        </div>
        <span className={classes.styleContent}>
            <TextAnimationRun content="Chào mọi người đến với khuôn viên của Trường!" propsContent={{style: {fontSize: '20px', textAlign: 'center'}}} />
          </span>

          <div className={classes.styleContentImage}>
          {showImage && <MakeGrid
         allGridProps={{xs:6, sm: 3}}
         grids={[{
           children: (
            <ViewMediaGDS
            mediaProps={{
              src: B2,
              alt: 'B2',
            }}
          >
            <AtomCardMedia43
              image={B2}
              alt='B2'
              className={classes.styleImage}
            >
              <div className={classes.styleHover} />
            </AtomCardMedia43>
          </ViewMediaGDS>
           )
         }, {
           children: (
            <ViewMediaGDS
            mediaProps={{
              src: B3,
              alt: 'B3',
            }}
          >
            <AtomCardMedia43
              image={B3}
              alt='B3'
              className={classes.styleImage}
            >
              <div className={classes.styleHover} />
            </AtomCardMedia43>
          </ViewMediaGDS>
           )
         },
         {
          children: (
           <ViewMediaGDS
           mediaProps={{
             src: B4,
             alt: 'B4',
           }}
         >
           <AtomCardMedia43
             image={B4}
             alt='B4'
             className={classes.styleImage}
           >
             <div className={classes.styleHover} />
           </AtomCardMedia43>
         </ViewMediaGDS>
          )
        },
        {
          children:(
           <ViewMediaGDS
           mediaProps={{
             src: B5,
             alt: 'B5',
           }}
         >
           <AtomCardMedia43
             image={B5}
             alt='B5'
             className={classes.styleImage}
           >
             <div className={classes.styleHover} />
           </AtomCardMedia43>
         </ViewMediaGDS>
          )
        }]} />}          </div>

         
        
        <PageBackground image={B1} />
      </div>
    </>
  );
}
