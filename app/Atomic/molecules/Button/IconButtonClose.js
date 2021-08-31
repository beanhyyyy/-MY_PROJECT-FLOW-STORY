import React from 'react';
import PropTypes from 'prop-types';
import AtomIconButton from '../../atoms/IconButton';
import CloseIcon from '../../../icons/CloseIcon';

export default function IconButtonClose(props) {
  const { buttonProps, iconProps } = props;
  return (
    <AtomIconButton {...buttonProps}>
      <CloseIcon {...iconProps} />
    </AtomIconButton>
  );
}
IconButtonClose.propTypes = {
  buttonProps: PropTypes.object,
  iconProps: PropTypes.object
};
