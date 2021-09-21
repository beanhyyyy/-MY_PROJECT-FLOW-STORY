import React from "react";
import { Helmet } from "react-helmet";
import makeStyles from "@material-ui/core/styles/makeStyles";

import AtomButton from "Atomic/atoms/Button";
import AtomContainer from "Atomic/atoms/Container";
import PageBackground from "Atomic/templates/PageBackground";
import MakeGrid from "Atomic/molecules/Grid/MakeGrid";
import AtomTypography from "Atomic/atoms/Typography";

import HahaloloLogoIcon from "icons/HahaloloLogoIcon";
import imageHHLL from "images/imageHHLL.jpg";
import AtomRouterLink from "../../../Atomic/atoms/RouterLink";

const useStyle = makeStyles((theme) => ({}));

export default function SchoolPage() {
  const classes = useStyle();

  return (
    <>
      <Helmet titleTemplate="%s - HOME PAGE" defaultTitle="HOME PAGE">
        <meta name="description" content="A VLU : HOME PAGE" />
      </Helmet>
      <div>
        <div className={classes.styleWrapper}>
          <div className={classes.styleStaticText}>i'm</div>
          <ul className={classes.styleDynamicText}>
            <li>
              <span>12312312321 12414 124 12 41</span>
            </li>
          </ul>
        </div>
        <PageBackground image={imageHHLL} />
      </div>
    </>
  );
}
