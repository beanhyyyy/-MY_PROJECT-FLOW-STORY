import withStyles from '@material-ui/core/styles/withStyles';
import AtomTypography from '.';

/* text kèm background ở đầu */
export const AtomTypographyWithCircle = withStyles(
  theme => ({
    root: {
      position: 'relative',
      zIndex: 0,
      '&:before': {
        content: '""',
        width: theme.spacing(3),
        height: theme.spacing(3),
        backgroundColor:
          theme.palette.type === 'light'
            ? 'rgba(194, 249, 255, 1)'
            : theme.palette.action.focus,
        // : theme.palette.primary.main,
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: -theme.spacing(1),
        bottom: 0,
        zIndex: -1,
      },
    },
  }),
  { name: 'AtomTypographyWithCircle' },
)(AtomTypography);
export default AtomTypographyWithCircle;
