import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Draggable from 'react-draggable';

import DialogTitle from './DialogTitle';
import AtomDialog from '../../atoms/Dialog';
import AtomHaloDialogContent from '../../atoms/DialogContent/HaloDialogContent';
import AtomHaloDialogActions from '../../atoms/DialogActions/HaloDialogActions';
import AtomTypography from '../../atoms/Typography';
import AtomBox from '../../atoms/Box';
import AtomPaper from '../../atoms/Paper';

const useStyles = makeStyles(theme => ({
  paperRounded: {
    '&:not(.MuiDialog-paperFullScreen)': {
      borderRadius: theme.spacing(1),
    },
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <AtomPaper {...props} />
    </Draggable>
  );
}

/* Customized dialogs MUI */
export default function HaloDialog({
  open,
  onClose,
  dialogProps,
  dialogTitleProps,
  dialogContentProps,
  dialogActionsProps,
  title,
  titleProps,
  titleCenter,
  content,
  contentCustomize,
  actions,
  fullScreenMobile,
  DialogTitleComponent,
  draggable,
  disableCloseButton,
  disableDialogTitle,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const hasFullScreen = fullScreenMobile && matches;

  return (
    <AtomDialog
      onClose={onClose}
      open={open}
      aria-labelledby="customized-dialog-title"
      fullScreen={hasFullScreen}
      fullWidth
      PaperComponent={draggable && !matches ? PaperComponent : undefined}
      classes={{
        paper: !matches ? classes.paperRounded : undefined,
      }}
      {...dialogProps}
    >
      {!disableDialogTitle && (
        <>
          {DialogTitleComponent ||
            ((title || onClose) && (
              <DialogTitle
                style={draggable ? { cursor: 'move' } : undefined}
                id="draggable-dialog-title"
                onClose={!disableCloseButton && onClose}
                titleProps={{ ...titleProps }}
                {...dialogTitleProps}
              >
                {title}
              </DialogTitle>
            ))}
        </>
      )}

      {titleCenter && (
        <AtomBox
          pt={!title && !onClose ? 3 : undefined}
          px={3}
          textAlign="center"
        >
          <AtomTypography variant="h5" component="div" {...titleProps}>
            <b>{titleCenter}</b>
          </AtomTypography>
        </AtomBox>
      )}
      {content && (
        <AtomHaloDialogContent {...dialogContentProps}>
          {content}
        </AtomHaloDialogContent>
      )}
      {actions && (
        <AtomHaloDialogActions {...dialogActionsProps}>
          {actions}
        </AtomHaloDialogActions>
      )}
      {contentCustomize}
    </AtomDialog>
  );
}
HaloDialog.propTypes = {
  open: PropTypes.bool, // đóng mở dialog
  onClose: PropTypes.func, // handle nút đóng dialog
  title: PropTypes.any, // tiêu đề trên
  titleCenter: PropTypes.any, // tiêu đề giữa
  titleProps: PropTypes.object, // customize tiêu đề
  content: PropTypes.any, // nội dung
  contentCustomize: PropTypes.any, // nội dung tùy chỉnh
  actions: PropTypes.any, // hành động
  fullScreenMobile: PropTypes.bool, // toàn màn hình ở tablet trở xuống
  // tùy chỉnh dialog
  dialogProps: PropTypes.object,
  dialogTitleProps: PropTypes.object,
  dialogContentProps: PropTypes.object,
  dialogActionsProps: PropTypes.object,
  DialogTitleComponent: PropTypes.any, // tùy chỉnh title
  draggable: PropTypes.any, // cho phép di chuyến dialog
  disableCloseButton: PropTypes.bool, // tắt nút close
  disableDialogTitle: PropTypes.bool, // tắt dialog title,
};
HaloDialog.defaultProps = {
  draggable: true,
};
