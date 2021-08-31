import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const tabPanelStyles = makeStyles(theme => ({
  tabPanel: {
    paddingTop: theme.spacing(1),
  },
}));

const AtomTabPanel = props => {
  const classes = tabPanelStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      className={classes.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};
AtomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export default AtomTabPanel;
