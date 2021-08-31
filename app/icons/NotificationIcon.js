import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Icon } from './NotificationIcon.svg';

export default function NotificationIcon(props) {
  return (
    <SvgIcon component={Icon} {...props}>
      <svg viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.8 18.5h8c.5 0 .9-.4.9-.9v-1.9c0-.4-.3-.8-.7-.8-2-.6-2.4-3-2.8-7.7-.3-2.6-1.8-5.2-5.4-5.2S6.7 4.6 6.5 7.2c-.4 4.8-.8 7.2-2.8 7.8-.4 0-.7.4-.7.8v1.9c0 .5.4.9.9.9h7.9zm0 3.5h0c-.9 0-1.7-.8-1.7-1.7 0 0 0 0 0 0v-1.7h3.4v1.7c0 .9-.7 1.7-1.7 1.7z"
        />
      </svg>
    </SvgIcon>
  );
}
