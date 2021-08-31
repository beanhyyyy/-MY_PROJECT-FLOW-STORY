import withStyles from '@material-ui/core/styles/withStyles';
import AtomCard from '.';
import { cardShadow, cardShadowHover } from '../../_settings/variables';

/* card shadow và shadow thêm khi hover */
const AtomCardShadowHover = withStyles(
  {
    root: {
      wordBreak: 'break-word',
      boxShadow: cardShadow,
      // overflow: 'unset',
      '&:hover': {
        boxShadow: cardShadowHover,
      },
    },
  },
  { name: 'AtomCardShadowHover' },
)(AtomCard);
export default AtomCardShadowHover;
