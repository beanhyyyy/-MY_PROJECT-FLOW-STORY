import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TextAnimationRun from "../../../Atomic/common/Text/TextAnimationRun";

import SwipeableViews from "react-swipeable-views";

// import B1 from "images/B1.png";
import welcomeBackground2 from "images/welcomeBackground2.jpg";

import B2 from "images/B2.jpg";
import B22 from "images/B22.jpg";
import B23 from "images/B23.jpg";
import B24 from "images/B24.jpg";
import B25 from "images/B25.jpg";
import B26 from "images/B26.jpg";
import B27 from "images/B27.jpg";
import B28 from "images/B28.jpg";

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

import B231 from "images/B231.jpg";
import B241 from "images/B241.jpg";
import B251 from "images/B251.jpg";
import B431 from "images/B431.jpg";
import B432 from "images/B432.jpg";
import B433 from "images/B433.jpg";
import B451 from "images/B451.jpg";
import B51 from "images/B51.jpg";
import B29 from "images/B29.jpg";
import B34 from "images/B34.jpg";
import B35 from "images/B35.jpg";
import B36 from "images/B36.jpg";
import B37 from "images/B37.jpg";

import B66 from "images/B66.png";

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

import Pagination from "../../../Atomic/common/Pagination";

import ReactAudioPlayer from "react-audio-player";

import B1Audio from "./B1Audio.mp3";
import B2Audio from "./B2Audio.mp3";
import B3Audio from "./B3Audio.mp3";
import B4Audio from "./B4Audio.mp3";
import B5Audio from "./B5Audio.mp3";
import B6Audio from "./B6Audio.mp3";

import startVideo from "video/startVideo.mp4";
import AtomBox from "../../../Atomic/atoms/Box";
import AtomIconButton from "../../../Atomic/atoms/IconButton";
import ButtonMove from "../../../Atomic/common/Button/ButtonMove";

const useStyles = makeStyles((theme) => ({
  styleDiv: {
    position: "relative",
  },
  styleButtonTop: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "90vh",
    [theme.breakpoints.down("sm")]: {
      top: "80vh",
    },
  },
  styleContent: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "80vh",
    overflow: "hidden",
    background: linearColor,

    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      top: "10vh",
    },
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "40vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "35vw",
    },
  },
  styleImage: {
    position: "relative",
    borderRadius: "9px",
    height: "100%",

    "& #styleDivContent": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 0,
      overflow: "hidden",
      transition: "all 1s ease",
    },
    "& #image1": {
      width: "100%",
      verticalAlign: "top",
      transition: "all 1s ease",
    },

    [theme.breakpoints.down("md")]: {
      "& #styleDivContent": {
        height: "30%",
        [theme.breakpoints.down("md")]: {
          height: "50%",
        },
        transition: "all 1s ease",
        color: "white",
        backgroundColor: theme.palette.action.active,
        borderRadius: "9px",
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
        height: "25%",
        [theme.breakpoints.down("md")]: {
          height: "35%",
        },
        transition: "all 1s ease",
        color: "white",
        backgroundColor: theme.palette.action.active,
        borderRadius: "9px",
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
    paddingTop: "5vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    [theme.breakpoints.down("md")]: {
      paddingTop: "5vh",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "25vh",
    },
  },
  styleRadio: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: "90vh",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
}));

const dataStep = [
  {
    mediaDialog: [
      {
        src: B2,
        alt: "B2",
      },
      {
        src: B22,
        alt: "B22",
      },
      {
        src: B23,
        alt: "B23",
      },
      {
        src: B231,
        alt: "B231",
      },
      {
        src: B24,
        alt: "B24",
      },
      {
        src: B241,
        alt: "B241",
      },
      {
        src: B25,
        alt: "B25",
      },
      {
        src: B251,
        alt: "B251",
      },
      {
        src: B26,
        alt: "B26",
      },
      {
        src: B27,
        alt: "B27",
      },
      {
        src: B28,
        alt: "B28",
      },
      {
        src: B29,
        alt: "B29",
      },
    ],
    title: "Tòa F",
    content: "Bấm để tiếp tục tham quan tòa F nhé!",
    audio: B2Audio,
    link: 0,
    video: 0,
  },
  {
    mediaDialog: [
      {
        src: B3,
        alt: "B3",
      },
      {
        src: B32,
        alt: "B32",
      },
      {
        src: B33,
        alt: "B33",
      },
      {
        src: B34,
        alt: "B34",
      },
      {
        src: B35,
        alt: "B35",
      },
      {
        src: B36,
        alt: "B36",
      },
      {
        src: B37,
        alt: "B37",
      },
    ],

    title: "Tòa G",
    content: "Bấm để tiếp tục tham quan tòa G nhé!",
    audio: B3Audio,
    link: 0,
    video: 0,
  },
  {
    mediaDialog: [
      {
        src: B4,
        alt: "B4",
      },
      {
        src: B42,
        alt: "B42",
      },
      {
        src: B43,
        alt: "B43",
      },
      {
        src: B431,
        alt: "B431",
      },
      {
        src: B432,
        alt: "B432",
      },
      {
        src: B433,
        alt: "B433",
      },
      {
        src: B44,
        alt: "B44",
      },
      {
        src: B45,
        alt: "B45",
      },
      {
        src: B451,
        alt: "B451",
      },
      {
        src: B46,
        alt: "B46",
      },
      {
        src: B47,
        alt: "B47",
      },
      {
        src: B48,
        alt: "B48",
      },
    ],

    title: "Tòa LV",
    content: "Bấm để tham quan tòa LV nhé!",
    audio: B4Audio,
    link: 0,
    video: 0,
  },
  {
    mediaDialog: [
      {
        src: B5,
        alt: "B5",
      },
      {
        src: B51,
        alt: "B51",
      },
    ],

    title: "Hội trường Trịnh Công Sơn",
    content: "Bấm để tham quan Hội trường Trịnh Công Sơn nhé!",
    audio: B5Audio,
    link: 0,
    video: 0,
  },
  {
    mediaDialog: [
      {
        src: B66,
        alt: "B66",
      },
    ],

    title: " Chiếc Kinh khí cầu của K27 nhà SOHU",
    content:
      "Chiếc Kinh khí cầu của K27 nhà SOHU sắp cất cánh, bấm vào để bay lên trải nghiệm cùng Ban Tổ chức nhé!",
    audio: B6Audio,
    link: 1,
    video: 1,
  },
];
export default function SchoolPage() {
  const classes = useStyles();

  const [showImage, setShowImage] = useState(false);

  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleStepGo = () => {
    setActiveStep(step + 1);
  };

  const handleShowImage = () => {
    setShowImage(true);
  };
  return (
    <>
      <Helmet titleTemplate="%s - SCHOOL PAGE" defaultTitle="SCHOOL PAGE">
        <meta name="description" content="A VLU : SCHOOL PAGE" />
      </Helmet>
      <div className={classes.styleDiv}>
        <div className={classes.styleButtonTop}>
          {!showImage && (
            <AtomButtonLink color="primary" onClick={handleShowImage}>
              <AtomTypography variant="h5">
                <b>Let's go</b>
              </AtomTypography>
            </AtomButtonLink>
          )}

          {showImage && (
            <AtomIconButton color="primary" onClick={handleStepGo}>
              <ButtonMove go />
            </AtomIconButton>
          )}
        </div>
        <span className={classes.styleContent}>
          <TextAnimationRun
            content="Chào các bạn sinh viên đến với khuôn viên trường ĐH Văn Lang!"
            propsContent={{ style: { fontSize: "20px", textAlign: "center" } }}
          />
        </span>

        <div className={classes.styleContentImage}>
          {!showImage && (
            <div className={classes.styleRadio}>
              <ReactAudioPlayer src={B1Audio} autoPlay controls />
            </div>
          )}

          {showImage && (
            <div>
              <MakeGrid
                containerProps={{ justifyContent: "center" }}
                allGridProps={{ xs: 12, sm: 9, md: 9, lg: 6 }}
                grids={[
                  {
                    children: (
                      <SwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                      >
                        {dataStep.map((step, index) => {
                          const slideKey = `slideKey-${index}`;
                          return (
                            <div key={slideKey}>
                              {Math.abs(activeStep - index) <= 2 ? (
                                <div style={{ position: "relative" }}>
                                  <ViewMediaGDS
                                    mediaProps={step.mediaDialog}
                                    audioProps={step.audio}
                                    linkProps={step.link}
                                    videoProps={step.video}
                                  >
                                    <AtomCardMedia43
                                      image={step.mediaDialog[0].src}
                                      alt="step.mediaDialog[0].src"
                                      className={classes.styleImage}
                                    >
                                      <div id="styleDivContent">
                                        <AtomCardContent>
                                          <SectionTemplate spacing={1}>
                                            <AtomTypography variant="body2">
                                              <b>{step.title}</b>
                                            </AtomTypography>
                                            <AtomDivider
                                              style={{
                                                width: "20%",
                                                background: "white",
                                              }}
                                            />
                                            <AtomTypography variant="caption">
                                              {step.content}
                                            </AtomTypography>
                                          </SectionTemplate>
                                        </AtomCardContent>
                                      </div>
                                    </AtomCardMedia43>
                                  </ViewMediaGDS>
                                  <Pagination
                                    dots={dataStep.length}
                                    index={activeStep}
                                    onChangeIndex={handleStepChange}
                                  />
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </SwipeableViews>
                    ),
                  },
                ]}
              />
            </div>
          )}
        </div>

        <PageBackground image={welcomeBackground2} />
      </div>
    </>
  );
}
