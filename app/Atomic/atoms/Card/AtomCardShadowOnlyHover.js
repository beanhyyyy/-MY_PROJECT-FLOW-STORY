import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';
import { cardShadowHover } from '../../_settings/variables';

/* card thường chỉ shadow khi hover */
const AtomCardShadowOnlyHover = withStyles(
  {
    root: {
      wordBreak: 'break-word',
      // overflow: 'unset',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: cardShadowHover,
      },
    },
  },
  { name: 'AtomCardShadowOnlyHover' },
)(AtomCard);
export default AtomCardShadowOnlyHover;
