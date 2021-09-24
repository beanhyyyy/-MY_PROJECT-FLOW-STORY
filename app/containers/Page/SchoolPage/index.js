import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import TextAnimationRun from "../../../Atomic/common/Text/TextAnimationRun";
import imageHHLL from "images/imageHHLL.jpg";
import PageBackground from "Atomic/templates/PageBackground";
import HaloTooltip from "../../../Atomic/molecules/HaloTooltip";
import AtomIconButton from "../../../Atomic/atoms/IconButton";
import { ClickAwayListener } from "@material-ui/core";
import AtomPopper from "../../../Atomic/atoms/Popper";
import AtomFade from "../../../Atomic/atoms/Fade";
import AtomPaper from "../../../Atomic/atoms/Paper";
import makeStyles from "@material-ui/styles/makeStyles";
import { linearColor } from "../../../Atomic/_settings/variables";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButtonMove from "../../../Atomic/common/Button/IconButtonMove";
import SectionTemplate from "../../../Atomic/templates/SectionTemplate";
import AtomBox from "../../../Atomic/atoms/Box";
import AtomButtonLink from "../../../Atomic/molecules/Button/AtomButtonLink";

const useStyles = makeStyles((theme) => ({
  styleDiv: {
    position: "relative",
  },
  styleButtonTop: {
    position: "absolute",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, 0%)",
  },
}));
export default function SchoolPage() {
  const classes = useStyles();

  return (
    <>
      <Helmet titleTemplate="%s - SCHOOL PAGE" defaultTitle="SCHOOL PAGE">
        <meta name="description" content="A VLU : SCHOOL PAGE" />
      </Helmet>
      <div className={classes.styleDiv}>
        <div className={classes.styleButtonTop}>
          <IconButtonMove
            go
            content={
              <SectionTemplate>
                <TextAnimationRun title="title" content="content" />
                <AtomBox textAlign="right">
                  <AtomButtonLink color="primary">Quay lại</AtomButtonLink>
                </AtomBox>
              </SectionTemplate>
            }
          />
        </div>

        <PageBackground image={imageHHLL} />
      </div>
    </>
  );
}
