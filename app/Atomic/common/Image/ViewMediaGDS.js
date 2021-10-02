import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

import AtomToolbar from "Atomic/atoms/Toolbar";
import HaloDialog from "Atomic/molecules/HaloDialog";
import MakeGrid from "Atomic/molecules/Grid/MakeGrid";
import AtomIconButtonDark from "Atomic/atoms/IconButton/AtomIconButtonDark";
import CloseIcon from "icons/CloseIcon";
import AtomBox from "../../atoms/Box";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import ReactAudioPlayer from "react-audio-player";
import AtomTypography from "../../atoms/Typography";
import AtomLink from "../../atoms/Link";

import startVideo from "video/startVideo.mp4";
import middleVideo2 from "video/middleVideo2.mp4";
import endVideo from "video/endVideo.mp4";

import B2AudioEnd from "end/B2AudioEnd.mp3";
import B2ImageEnd from "end/B2ImageEnd.jpg";

import B3AudioEnd from "end/B3AudioEnd.mp3";
import B3ImageEnd from "end/B3ImageEnd.gif";

import B4AudioEnd from "end/B4AudioEnd.mp3";

import B5ImageEnd from "end/B5ImageEnd.png";

const breakpoint = "md"; // điểm chuyển layout

export const useStyles = makeStyles((theme) => ({
  dialogContent: {
    overflowY: "auto",

    overflow: "hidden",
  },
  dialogContentLeft: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.up(breakpoint)]: {
      height: "100vh",
    },
  },
  // hiển thị ảnh/video
  mediaContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up(breakpoint)]: {
      padding: theme.spacing(4),
    },
  },
  mediaItem: {
    // maxWidth: '100%',
    // width: '100%',
    maxHeight: "100%",
    objectFit: "contain",
    outline: "none",
    borderRadius: "9px",
    transition: "all 2s ease",

    "&:hover": {
      transform: "scale(1.2, 1.2)",
    },
  },
  mediaToolbar: {
    position: "absolute",
    top: theme.spacing(2),
    left: 0,
    right: 0,
    zIndex: 1,
  },
  navButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.action.focus,
    },
  },
  prevButton: {
    left: 0,
  },
  nextButton: {
    right: 0,
  },
  styleRadio: {
    display: "none",
  },
}));

/* dialog xem media */
export default function ViewMediaGDS({
  children,
  mediaProps,
  audioProps,
  linkProps,
  videoProps,
  ...restProps
}) {
  const classes = useStyles();

  const theme = useTheme(); // check màn hình
  const isMobie = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [indexImage, setIndexImage] = useState(0);

  const handleBackImage = () => {
    if (indexImage - 1 > -1) {
      setIndexImage(indexImage - 1);
    }
  };

  const handleNextImage = () => {
    if (
      indexImage + 1 <
      (videoProps ? mediaProps.length + 5 : mediaProps.length)
    ) {
      setIndexImage(indexImage + 1);
    }
  };

  const [fire, setFire] = React.useState(false);

  const handleFire = () => {
    setFire(true);
  };

  useEffect(() => {
    setIndexImage(0);
  }, []);

  return (
    <React.Fragment>
      <AtomBox
        style={{ cursor: "pointer", height: "100%" }}
        onClick={handleOpen}
        {...restProps}
      >
        {children}
      </AtomBox>

      <HaloDialog
        open={open}
        dialogProps={{
          fullScreen: true,
        }}
        fullScreenMobile
        contentCustomize={
          <div className={classes.dialogContent}>
            <div className={classes.styleRadio}>
              <ReactAudioPlayer src={audioProps} autoPlay controls />
            </div>

            <MakeGrid
              containerProps={{ spacing: 0 }}
              grids={[
                {
                  children: (
                    <div className={classes.dialogContentLeft}>
                      {/* thanh công cụ */}
                      <AtomToolbar
                        variant="dense"
                        className={classes.mediaToolbar}
                      >
                        <MakeGrid
                          containerProps={{
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          grids={[
                            {
                              children: (
                                <AtomIconButtonDark
                                  aria-label="close"
                                  onClick={handleClose}
                                >
                                  <CloseIcon />
                                </AtomIconButtonDark>
                              ),
                              props: { xs: true },
                            },
                            // {
                            //   children: (
                            //     <AtomIconButtonDark aria-label="full screen">
                            //       <FullScreenIcon />
                            //     </AtomIconButtonDark>
                            //   ),
                            // },
                            // {
                            //   children: (
                            //     <AtomIconButtonDark aria-label="tagging">
                            //       <TagIcon />
                            //     </AtomIconButtonDark>
                            //   ),
                            // },
                          ]}
                        />
                      </AtomToolbar>

                      <div className={classes.mediaContainer}>
                        <img
                          className={classes.mediaItem}
                          src={
                            mediaProps[indexImage] && mediaProps[indexImage].src
                          }
                          alt={
                            mediaProps[indexImage] && mediaProps[indexImage].alt
                          }
                        />
                        <>
                          {indexImage === mediaProps.length && videoProps && (
                            <video
                              width={isMobie ? "320" : "800"}
                              height={isMobie ? "400" : "500"}
                              controls
                            >
                              <source src={startVideo} type="video/mp4" />
                            </video>
                          )}

                          {indexImage === mediaProps.length + 1 && (
                            <video
                              width={isMobie ? "320" : "800"}
                              height={isMobie ? "400" : "500"}
                              controls
                            >
                              <source src={middleVideo2} type="video/mp4" />
                            </video>
                          )}

                          {indexImage === mediaProps.length + 2 && (
                            <>
                              {!fire ? (
                                <>
                                  <img
                                    className={classes.mediaItem}
                                    src={B2ImageEnd}
                                    alt="B2ImageEnd"
                                    onClick={handleFire}
                                  />
                                  <div className={classes.styleRadio}>
                                    <ReactAudioPlayer
                                      src={B2AudioEnd}
                                      autoPlay
                                      controls
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <img
                                    className={classes.mediaItem}
                                    src={B3ImageEnd}
                                    alt="B3ImageEnd"
                                  />
                                  <div className={classes.styleRadio}>
                                    <ReactAudioPlayer
                                      src={B3AudioEnd}
                                      autoPlay
                                      controls
                                    />
                                  </div>
                                </>
                              )}
                            </>
                          )}

                          {indexImage === mediaProps.length + 3 && (
                            <video
                              width={isMobie ? "320" : "800"}
                              height={isMobie ? "400" : "500"}
                              controls
                            >
                              <source src={endVideo} type="video/mp4" />
                            </video>
                          )}

                          {indexImage === mediaProps.length + 4 && (
                            <>
                              <img
                                className={classes.mediaItem}
                                src={B5ImageEnd}
                                alt="B5ImageEnd"
                              />
                              <div className={classes.styleRadio}>
                                <ReactAudioPlayer
                                  src={B4AudioEnd}
                                  autoPlay
                                  controls
                                />
                              </div>
                            </>
                          )}
                        </>
                      </div>
                      {linkProps && indexImage < mediaProps.length && (
                        <div
                          style={{
                            position: "absolute",
                            top: "80vh",
                            left: "10vw",
                          }}
                        >
                          <AtomTypography component="div" variant='h6'>
                            Cùng nhau check-in nhé:&nbsp;
                            <AtomTypography
                              component={AtomLink}
                              href="https://forms.office.com/pages/responsepage.aspx?id=S6URMF0KKUm_AqAHh4d8ahrkA1XRKVxGpJlrT6kdWGRUQjdPODVYSTBJRTZRSUpGRFlOUlNEOENLWC4u&fbclid=IwAR2sYwpQZTdejBPTejMOpimfCEfixfyE9pgLhRhtvRumF9L-Dm1_GIZbwFI"
                              target="_blank"
                              variant="body2"
                            >
                              <b>Tại đây</b>
                            </AtomTypography>
                            &nbsp; hoặc
                            <AtomTypography
                              component={AtomLink}
                              href="https://forms.office.com/pages/responsepage.aspx?id=S6URMF0KKUm_AqAHh4d8ahrkA1XRKVxGpJlrT6kdWGRUNVZXUTI5NFVORzIyUDhDWDZTWTBXQk02Wi4u&fbclid=IwAR0d9ZEBo-nwZu8I6GhuZ5gHnUbinD5agQy2BB2fA9akP4vdlk-6sP7-oD4"
                              target="_blank"
                              variant="body2"
                            >
                              &nbsp;<b>Tại đây</b>&nbsp;
                            </AtomTypography>
                            nhé !
                          </AtomTypography>
                        </div>
                      )}

                      {/* thanh điều hướng */}
                      <nav>
                        <div
                          className={clsx(
                            classes.navButton,
                            classes.prevButton
                          )}
                        >
                          <AtomIconButtonDark
                            aria-label="previous"
                            onClick={handleBackImage}
                          >
                            <NavigateBeforeIcon />
                          </AtomIconButtonDark>
                        </div>
                        <div
                          className={clsx(
                            classes.navButton,
                            classes.nextButton
                          )}
                        >
                          <AtomIconButtonDark
                            aria-label="next"
                            onClick={handleNextImage}
                          >
                            <NavigateNextIcon />
                          </AtomIconButtonDark>
                        </div>
                      </nav>
                    </div>
                  ),
                  props: { xs: 12, md: true },
                },
              ]}
            />
          </div>
        }
      />
    </React.Fragment>
  );
}
ViewMediaGDS.propTypes = {
  children: PropTypes.node, // thành phần để mở ảnh
  mediaProps: PropTypes.any, // thông tin media (src, title, alt...)
  audioProps: PropTypes.any,
  linkProps: PropTypes.any,
  videoProps: PropTypes.any,
};
