import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import HahaloloLogoIcon from '../../../icons/HahaloloLogoIcon';

const useStyles = makeStyles(theme => ({
  brand: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main
  },
  brandIcon: {
    fontSize: theme.spacing(6),
    marginRight: theme.spacing(1)
  }
}));

/* logo hahalolo ở menu top backend */
export default function TopMenuLogo() {
  const classes = useStyles();

  return (
    <div className={classes.brand}>
      <HahaloloLogoIcon
        className={classes.brandIcon}
        color="primary"
        alt="Hahalolo logo"
      />
      <span>Hahalolo</span>
    </div>
  );
}
