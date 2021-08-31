import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Icon } from './CloseIcon.svg';

export default function CloseIcon(props) {
  return (
    <SvgIcon component={Icon} {...props}>
      <svg viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
          d="M6 6l12 12m0-12L6 18"
        />
      </svg>
    </SvgIcon>
  );
}
