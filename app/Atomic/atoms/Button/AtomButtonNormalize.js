import withStyles from '@material-ui/core/styles/withStyles';
import AtomButton from '.';
import { normalizeButton } from './buttonStyles';

/* nút chữ thường */
const AtomButtonNormalize = withStyles(
  {
    root: {
      ...normalizeButton
    }
  },
  { name: 'AtomButtonNormalize' }
)(AtomButton);
export default AtomButtonNormalize;
