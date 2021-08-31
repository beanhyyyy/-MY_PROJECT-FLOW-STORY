import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import IconButtonClose from '../Button/IconButtonClose';
import AtomTypography from '../../atoms/Typography';

/* tiêu đề và nút đóng */
const DialogTitle = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    wordBreak: 'break-word',
  },
  hasCloseButton: {
    paddingRight: theme.spacing(8),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  closeButton: {
    color: theme.palette.text.secondary,
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  blueBackground: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& svg': {
      color: theme.palette.primary.contrastText,
    },
  },
}))(props => {
  const {
    children,
    classes,
    onClose,
    hasBlueBackground,
    titleProps,
    ...other
  } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={clsx(
        classes.root,
        hasBlueBackground ? classes.blueBackground : undefined,
        onClose ? classes.hasCloseButton : undefined,
      )}
      {...other}
    >
      <AtomTypography
        variant="h6"
        component="div"
        className={classes.title}
        {...titleProps}
      >
        {children}
      </AtomTypography>
      {onClose ? (
        <IconButtonClose
          buttonProps={{
            'aria-label': 'close',
            className: classes.closeButton,
            onClick: onClose,
          }}
        />
      ) : null}
    </MuiDialogTitle>
  );
});
export default DialogTitle;
