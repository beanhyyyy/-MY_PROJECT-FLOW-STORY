import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AtomToolbar from 'Atomic/atoms/Toolbar';
import HaloDialog from 'Atomic/molecules/HaloDialog';
import MakeGrid from 'Atomic/molecules/Grid/MakeGrid';
import AtomIconButtonLight from 'Atomic/atoms/IconButton/AtomIconButtonLight';
import AtomIconButtonDark from 'Atomic/atoms/IconButton/AtomIconButtonDark';
import ArrowLeftLargeIcon from 'icons/ArrowLeftLargeIcon';
import ArrowRightLargeIcon from 'icons/ArrowRightLargeIcon';
import FullScreenIcon from 'icons/FullScreenIcon';
import CloseIcon from 'icons/CloseIcon';
import TagIcon from 'icons/TagIcon';
import AtomBox from '../../atoms/Box';
import AtomIconButton from '../../atoms/IconButton';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const breakpoint = 'md'; // điểm chuyển layout

export const useStyles = makeStyles(theme => ({
  dialogContent: {
    overflowY: 'auto',

    overflow: 'hidden',

  },
  dialogContentLeft: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.up(breakpoint)]: {
      height: '100vh',
    },
  },
  // hiển thị ảnh/video
  mediaContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up(breakpoint)]: {
      padding: theme.spacing(4),
    },
  },
  mediaItem: {
    // maxWidth: '100%',
    // width: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    outline: 'none',
    borderRadius: '9px',
    transition: "all 2s ease",

    "&:hover": {
      transform: 'scale(1.2, 1.2)',
    },

  },
  mediaToolbar: {
    position: 'absolute',
    top: theme.spacing(2),
    left: 0,
    right: 0,
    zIndex: 1,
  },
  navButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    '&:hover': {
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
}));

/* dialog xem media */
export default function ViewMediaGDS({ children, mediaProps, ...restProps }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [indexImage, setIndexImage] = useState(0);

  const handleBackImage = () => {
    if(indexImage - 1 > -1){
      setIndexImage(indexImage - 1)
    }
  }

  const handleNextImage = () => {
    if(indexImage + 1 < mediaProps.length){
      setIndexImage(indexImage + 1)
    }
  }

  useEffect(()=> {
    setIndexImage(0)
  }, [])

  return (
    <React.Fragment>
      <AtomBox
        style={{ cursor: 'pointer', height: '100%' }}
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
                            alignItems: 'center',
                            justifyContent: 'space-between',
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
                            src={mediaProps[indexImage] && mediaProps[indexImage].src}
                            alt={mediaProps[indexImage] && mediaProps[indexImage].alt}
                          />
                      </div>

                      {/* thanh điều hướng */}
                      <nav>
                        <div
                          className={clsx(
                            classes.navButton,
                            classes.prevButton,
                          )}
                        >
                          <AtomIconButtonDark aria-label="previous" onClick={handleBackImage}>
                            <NavigateBeforeIcon />
                          </AtomIconButtonDark>
                        </div>
                        <div
                          className={clsx(

                            classes.navButton,
                            classes.nextButton,
                          )}
                        >
                          <AtomIconButtonDark aria-label="next" onClick={handleNextImage}>
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
};