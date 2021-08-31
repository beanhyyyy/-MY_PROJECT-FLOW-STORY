import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import { cardShadow, affSidebarWidth } from '../_settings/variables.js';
import AtomAppBar from '../atoms/AppBar';
import AtomDrawer from '../atoms/Drawer';
import AtomToolbar from '../atoms/Toolbar';
import AtomHidden from '../atoms/Hidden';
import AtomIconButton from '../atoms/IconButton';
import MenuAltIcon from '../../icons/MenuAltIcon';
import Scrollbar from '../molecules/Scrollable/Scrollbar';
import TopMenuLogo from '../molecules/Appbar/TopMenuLogo.js';

// default
const drawerWidth = affSidebarWidth;
const breakpoint = 'lg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    boxShadow: cardShadow
  },
  appbarOnTop: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(breakpoint)]: {
      display: 'none'
    }
  },
  sidebar: {
    padding: theme.spacing(0)
  },
  drawer: {
    [theme.breakpoints.up(breakpoint)]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerContent: {
    flexGrow: 1,
    maxWidth: '100%',
    padding: theme.spacing(2, 2, 10)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    boxShadow: cardShadow,
    borderRight: 0,
    overflow: 'hidden'
  },
  scrollbar: {
    height: '100vh'
  },
  sidebarHeader: {}
}));

/* giao diện gồm sidebar trái và content phải của backend */
function BackendTemplate({
  appbarMenu,
  sidebarHeader,
  sidebarMenu,
  mainContent,
  showAppbarOnTop,
  bottomNavigation
}) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* left sidebar */
  const drawer = (
    <div>
      <div className={clsx(classes.toolbar, classes.sidebarHeader)}>
        {sidebarHeader}
      </div>
      <div className={classes.sidebar}>{sidebarMenu}</div>
      <div className={classes.toolbar} />
    </div>
  );

  return (
    <div className={classes.root}>
      {/* Menu top */}
      <AtomAppBar
        position="fixed"
        color="inherit"
        className={clsx(
          classes.appBar,
          showAppbarOnTop ? classes.appbarOnTop : undefined
        )}
      >
        <AtomToolbar>
          <TopMenuLogo />

          <AtomIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuAltIcon />
          </AtomIconButton>
          {appbarMenu}
        </AtomToolbar>
      </AtomAppBar>

      {/* Render sidebar */}
      <nav className={classes.drawer} aria-label="sidebar">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <AtomHidden lgUp implementation="css">
          <AtomDrawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <Scrollbar className={classes.scrollbar}>{drawer}</Scrollbar>
          </AtomDrawer>
        </AtomHidden>
        <AtomHidden mdDown implementation="css">
          <AtomDrawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            <Scrollbar className={classes.scrollbar}>{drawer}</Scrollbar>
          </AtomDrawer>
        </AtomHidden>
      </nav>

      {/* content */}
      <main className={classes.drawerContent}>
        <div className={classes.toolbar} />
        {mainContent}
      </main>
      {bottomNavigation}
    </div>
  );
}

BackendTemplate.propTypes = {
  appbarMenu: PropTypes.node,
  sidebarHeader: PropTypes.node,
  sidebarMenu: PropTypes.node,
  mainContent: PropTypes.node,
  bottomNavigation: PropTypes.node, // bottom nav
  showAppbarOnTop: PropTypes.bool // hiển thị appbar trên sidebar
};

BackendTemplate.defaultProps = {
  bottomNavigation: '123',
  sidebarHeader: <TopMenuLogo />,
  showAppbarOnTop: true
};

export default BackendTemplate;
