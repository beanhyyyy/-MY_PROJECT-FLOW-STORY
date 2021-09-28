import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TextAnimationRun from "../../../Atomic/common/Text/TextAnimationRun";

// import B1 from "images/B1.png";
import welcomeBackground2 from 'images/welcomeBackground2.jpg';

import B2 from "images/B2.jpg";
import B22 from 'images/B22.jpg';
import B23 from 'images/B23.jpg';
import B24 from 'images/B24.jpg';
import B25 from 'images/B25.jpg';
import B26 from 'images/B26.jpg';
import B27 from 'images/B27.jpg';
import B28 from 'images/B28.jpg';

import B3 from "images/B3.jpg";
import B32 from "images/B32.jpg";
import B33 from "images/B33.jpg";

import B4 from "images/B4.jpg";
import B42 from "images/B42.jpg";
import B43 from "images/B43.jpg";
import B44 from "images/B44.jpg";
import B45 from "images/B45.jpg";
import B46 from "images/B46.jpg";
import B47 from "images/B47.jpg";
import B48 from "images/B48.jpg";

import B5 from "images/B5.jpg";

import PageBackground from "Atomic/templates/PageBackground";
import makeStyles from "@material-ui/styles/makeStyles";

import AtomButtonLink from "../../../Atomic/molecules/Button/AtomButtonLink";
import AtomTypography from "../../../Atomic/atoms/Typography";
import { linearColor } from "../../../Atomic/_settings/variables";
import ViewMediaGDS from "../../../Atomic/common/Image/ViewMediaGDS";
import AtomCardMedia43 from "../../../Atomic/atoms/CardMedia/AtomCardMedia43";
import MakeGrid from "../../../Atomic/molecules/Grid/MakeGrid";
import AtomCardContent from "../../../Atomic/atoms/CardContent";
import AtomDivider from "../../../Atomic/atoms/Divider";
import SectionTemplate from "../../../Atomic/templates/SectionTemplate";

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
    [theme.breakpoints.down('sm')]: {
      top: '10vh',
    },
    [theme.breakpoints.down('md')]: {
      width: '90vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25vw',
    },
  },
  styleImage: {
    position: 'relative',
    borderRadius: '9px',
    height: '100%',

    "& #styleDivContent": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 0,
      overflow: "hidden",
    },
    "& #image1": {
      width: "100%",
      verticalAlign: "top",
      transition: "all 1s ease",
      transition: "all 1s ease",
    },

    [theme.breakpoints.down('md')]: {
      "& #styleDivContent": {
        height: "30%",
        [theme.breakpoints.down('md')]: {
          height: "50%",
        },
        transition: "all 1s ease",
        color: "white",
        backgroundColor: theme.palette.action.active,
        borderRadius: '9px',
      },
      "& #image1": {
        transition: "all 1s ease",
        transform: "scale(1.3,1.3)",
      },
    },


    "&:hover": {
      // opacity: 0.6,
      // transform: 'scale(1.5,1.5)',
      "& #styleDivContent": {
        height: "50%",
        [theme.breakpoints.down('md')]: {
          height: "50%",
        },
        transition: "all 1s ease",
        color: "white",
        backgroundColor: theme.palette.action.active,
        borderRadius: '9px',
      },
      "& #image1": {
        transition: "all 1s ease",
        transform: "scale(1.3,1.3)",
      },
    },
  },
  // styleHover: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  //   borderRadius: '9px',
  //   '&:hover': {
  //     backgroundColor: theme.palette.action.selected,
  //     transition: `${theme.transitions.duration.standard}ms`,
  //   },
  // },
  styleContentImage: {
    paddingTop: '20vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    [theme.breakpoints.down('md')]: {
      paddingTop: '15vh',
    },
  },


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
         allGridProps={{xs:12, sm: 6, md: 3}}
         grids={[{
           children: (
            <ViewMediaGDS
            mediaProps={[
              {
                src: B2,
                alt: 'B2',
              },{
              src: B22,
              alt: 'B22',
            },{
              src: B23,
              alt: 'B23',
            },{
              src: B24,
              alt: 'B24',
            },{
              src: B25,
              alt: 'B25',
            },{
              src: B26,
              alt: 'B26',
            },{
              src: B27,
              alt: 'B27',
            },{
              src: B28,
              alt: 'B28',
            }]}
          >
            <AtomCardMedia43
              image={B2}
              alt='B2'
              className={classes.styleImage}
            >
              <div id="styleDivContent">
               <AtomCardContent>
             <SectionTemplate spacing={1}> 
             <AtomTypography variant='body2'><b>Title</b></AtomTypography>
               <AtomDivider style={{width: '20%', background: 'white'}} />
                <AtomTypography variant='caption'>Content</AtomTypography>
             </SectionTemplate>
               </AtomCardContent>
              </div>
            </AtomCardMedia43>
          </ViewMediaGDS>
           )
         }, {
           children: (
            <ViewMediaGDS
            mediaProps={[
              {
                src: B3,
                alt: 'B3',
              },{
              src: B32,
              alt: 'B32',
            },{
              src: B33,
              alt: 'B33',
            }]}
          >
            <AtomCardMedia43
              image={B3}
              alt='B3'
              className={classes.styleImage}
            >
                   <div id="styleDivContent">
               <AtomCardContent>
               <SectionTemplate spacing={1}> 
             <AtomTypography variant='body2'><b>Title</b></AtomTypography>
               <AtomDivider style={{width: '20%', background: 'white'}} />
                <AtomTypography variant='caption'>Content</AtomTypography>
             </SectionTemplate>
               </AtomCardContent>
              </div>
            </AtomCardMedia43>
          </ViewMediaGDS>
           )
         },
         {
          children: (
           <ViewMediaGDS
           mediaProps={[
            {
              src: B4,
              alt: 'B4',
            },{
            src: B42,
            alt: 'B42',
          },{
            src: B43,
            alt: 'B43',
          },{
            src: B44,
            alt: 'B44',
          },{
            src: B45,
            alt: 'B45',
          },{
            src: B46,
            alt: 'B46',
          },{
            src: B47,
            alt: 'B47',
          },{
            src: B48,
            alt: 'B48',
          }]}
         >
           <AtomCardMedia43
             image={B4}
             alt='B4'
             className={classes.styleImage}
           >
                <div id="styleDivContent">
               <AtomCardContent>
               <SectionTemplate spacing={1}> 
             <AtomTypography variant='body2'><b>Title</b></AtomTypography>
               <AtomDivider style={{width: '20%', background: 'white'}} />
                <AtomTypography variant='caption'>Content</AtomTypography>
             </SectionTemplate>
               </AtomCardContent>
              </div>
           </AtomCardMedia43>
         </ViewMediaGDS>
          )
        },
        {
          children:(
           <ViewMediaGDS
           mediaProps={[{
            src: B5,
            alt: 'B5',
          }]}
         >
           <AtomCardMedia43
             image={B5}
             alt='B5'
             className={classes.styleImage}
           >
               <div id="styleDivContent">
               <AtomCardContent>
               <SectionTemplate spacing={1}> 
             <AtomTypography variant='body2'><b>Title</b></AtomTypography>
               <AtomDivider style={{width: '20%', background: 'white'}} />
                <AtomTypography variant='caption'>Content</AtomTypography>
             </SectionTemplate>
               </AtomCardContent>
              </div>
           </AtomCardMedia43>
         </ViewMediaGDS>
          )
        }]} />}          </div>

         
        
        <PageBackground image={welcomeBackground2} />
      </div>
    </>
  );
}
