import React from "react";
import { Helmet } from "react-helmet";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextAnimationRun from "../../../Atomic/common/Text/TextAnimationRun";

export default function SchoolPage() {

  return (
    <>
      <Helmet titleTemplate="%s - HOME PAGE" defaultTitle="HOME PAGE">
        <meta name="description" content="A VLU : HOME PAGE" />
      </Helmet>
      <div>
     <TextAnimationRun title='VLU' content="123123 1 2312 321 312 312 3 12" />
        {/* <PageBackground image={imageHHLL} /> */}
      </div>
    </>
  );
}