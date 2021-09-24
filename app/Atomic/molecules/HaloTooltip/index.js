import React from "react";
import PropTypes from "prop-types";
import AtomTooltipPrimary from "../../atoms/Tooltip/AtomTooltipPrimary";

export default function HaloTooltip(props) {
  const { children, ...toolTipProps } = props;
  return (
    <AtomTooltipPrimary arrow interactive {...toolTipProps}>
      {children}
    </AtomTooltipPrimary>
  );
}
HaloTooltip.propTypes = {
  children: PropTypes.any,
  toolTipProps: PropTypes.any,
};
