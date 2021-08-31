import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Icon } from './MenuAltIcon.svg';

export default function MenuAltIcon(props) {
  return (
    <SvgIcon component={Icon} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          id="Group_29929"
          data-name="Group 29929"
          transform="translate(-789 -93)"
        >
          <g
            id="Group_29927"
            data-name="Group 29927"
            transform="translate(-264 -323)"
          >
            <rect
              id="Rectangle_4718"
              data-name="Rectangle 4718"
              width="24"
              height="24"
              transform="translate(1053 416)"
              fill="none"
            />
          </g>
          <g
            id="Group_29928"
            data-name="Group 29928"
            transform="translate(792 38.848)"
          >
            <g id="Menu" transform="translate(0 60.152)">
              <path
                id="Path_21460"
                data-name="Path 21460"
                d="M.563,61.277H17.442a.563.563,0,0,0,0-1.125H.563a.563.563,0,0,0,0,1.125Z"
                transform="translate(0 -60.152)"
              />
              <path
                id="Path_21461"
                data-name="Path 21461"
                d="M17.442,180.455H.563a.563.563,0,1,0,0,1.125H17.442a.563.563,0,1,0,0-1.125Z"
                transform="translate(0 -174.829)"
              />
              <path
                id="Path_21462"
                data-name="Path 21462"
                d="M17.442,300.758H.563a.563.563,0,0,0,0,1.125H17.442a.563.563,0,0,0,0-1.125Z"
                transform="translate(0 -289.505)"
              />
            </g>
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
}
