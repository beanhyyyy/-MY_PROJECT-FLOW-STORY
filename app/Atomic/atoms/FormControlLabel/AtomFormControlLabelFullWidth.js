import withStyles from '@material-ui/core/styles/withStyles';
import AtomFormControlLabel from '.';

/* form control fullwidth */
const AtomFormControlLabelFullWidth = withStyles(
  () => ({
    root: {
      display: 'flex',
      '&:first-child:last-child': {
        marginRight: 0,
      },
    },
    label: {
      flexGrow: 1,
    },
  }),
  { name: 'AtomFormControlLabelFullWidth' },
)(AtomFormControlLabel);

export default AtomFormControlLabelFullWidth;
