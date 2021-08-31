import React from 'react';
import PropTypes from 'prop-types';
import MakeGrid from '../Grid/MakeGrid';

export default function ToolbarAction({ children, containerProps }) {
  return Array.isArray(children) ? (
    <MakeGrid
      containerProps={{ spacing: 1, alignItems: 'center', ...containerProps }}
      grids={children
        .filter(item => item !== false)
        .map(item => ({
          children: item
        }))}
    />
  ) : (
    children
  );
}
ToolbarAction.propTypes = {
  children: PropTypes.any,
  containerProps: PropTypes.object
};
