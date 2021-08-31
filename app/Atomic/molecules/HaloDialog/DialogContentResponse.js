import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import AtomTypography from '../../atoms/Typography';
import CloseCircleIcon from '../../../icons/CloseCircleIcon';
import WarningIcon from '../../../icons/WarningIcon';
import CheckCircleFilledIcon from '../../../icons/CheckCircleFilledIcon';
import AtomHaloDialogContent from '../../atoms/DialogContent/HaloDialogContent';
import AtomHaloDialogActions from '../../atoms/DialogActions/HaloDialogActions';

const useStyles = makeStyles(theme => ({
  icon: {
    textAlign: 'center',
    '& svg': {
      fontSize: theme.spacing(12),
    },
  },
  iconLarge: {
    '& svg': {
      fontSize: theme.spacing(20),
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: 'center',
  },
  success: {
    color: theme.palette.success.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  primary: {
    color: theme.palette.primary.main,
  },
}));

const typeIcons = {
  success: <CheckCircleFilledIcon />,
  error: <CloseCircleIcon />,
  warning: <WarningIcon />,
};

/* nội dung phản hồi kết quả */
export default function DialogContentResponse(props) {
  const {
    type,
    icon,
    iconLarge,
    IconComponent,
    title,
    titleProps,
    content,
    actions,
  } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <AtomHaloDialogContent>
        {(type || icon || IconComponent) && (
          <div
            className={clsx(
              classes.icon,
              type && classes[type],
              iconLarge ? classes.iconLarge : undefined,
            )}
          >
            {icon || (IconComponent && <IconComponent />) || typeIcons[type]}
          </div>
        )}

        {title && (
          <AtomTypography
            variant="h6"
            align="center"
            paragraph
            className={clsx(classes.title, classes[type])}
            {...titleProps}
          >
            {title}
          </AtomTypography>
        )}

        {content && <AtomTypography component="div">{content}</AtomTypography>}
      </AtomHaloDialogContent>
      {actions && <AtomHaloDialogActions>{actions}</AtomHaloDialogActions>}
    </React.Fragment>
  );
}
DialogContentResponse.propTypes = {
  type: PropTypes.string, // loại dialog
  icon: PropTypes.any, // icon
  iconLarge: PropTypes.bool, // icon lớn hơn
  IconComponent: PropTypes.elementType, // icon dạng element
  title: PropTypes.any, // tiêu đề
  titleProps: PropTypes.object, // tùy chỉnh tiêu đề.
  content: PropTypes.any, // nội dung dialog
  actions: PropTypes.any, // nội dung dialog
};
